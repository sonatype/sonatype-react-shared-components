/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');
describe('NxModal', function() {
  const {
    waitAndGetElements,
    checkFullPageScreenshot,
    disableLoadingSpinnerAnimation,
    getPage,
    a11yTest,
    isInDocument,
    isFocused
  } = setupBrowser('#/pages/Modal');

  const simpleExampleSelector = '#nx-modal-simple-example',
      formWithAlertExampleSelector = '#nx-modal-form-with-alert-example',
      formExampleSelector = '#nx-modal-form-example',
      narrowExampleSelector = '#nx-modal-narrow-example',
      wideExampleSelector = '#nx-modal-wide-example',
      stackedExampleSelector = '#nx-modal-stacked-example',
      nestedExampleSelector = '#nx-modal-nested-example',
      escClosingExampleSelector = '#nx-modal-esc-example';

  async function openModal(exampleSelector) {
    const openModalBtnSelector = `${exampleSelector} button`,
        closeModalBtnSelector =
            `${exampleSelector} .nx-footer .nx-btn-bar .nx-btn:not(.nx-btn--primary):not(.nx-btn-tertiary)`;

    const [openModalBtn] = await waitAndGetElements(openModalBtnSelector);

    await openModalBtn.click();

    await waitAndGetElements(closeModalBtnSelector);
  }

  function simpleModalTest(exampleSelector) {
    return async function() {
      await openModal(exampleSelector);

      // take image of entire viewport in order to capture the backdrop color
      await checkFullPageScreenshot();
    };
  }

  function modalA11yTest(exampleSelector) {
    return async function() {
      await openModal(exampleSelector);
      await a11yTest()();
    };
  }

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  describe('Simple NxModal', function() {
    it('looks right', simpleModalTest(simpleExampleSelector));

    it('passes a11y checks', modalA11yTest(simpleExampleSelector));
  });

  describe('Form NxModal', function() {
    it('looks right', simpleModalTest(formWithAlertExampleSelector));

    it('correctly renders its loading spinner', async function() {
      const openModalBtnSelector = `${formExampleSelector} button`,
          modalSelector = '#nx-modal-form-example';

      const [openModalBtn] = await waitAndGetElements(openModalBtnSelector);

      await openModalBtn.click();

      await waitAndGetElements(modalSelector);

      await disableLoadingSpinnerAnimation();
      await checkFullPageScreenshot();
    });

    it('shows the tooltip in front of the modal', async function() {
      const openModalBtnSelector = `${formExampleSelector} button`,
          submitBtnSelector =
              `${formExampleSelector} .nx-footer .nx-btn-bar .nx-form__submit-btn`;

      const [openModalBtn] = await waitAndGetElements(openModalBtnSelector);

      await openModalBtn.click();

      // wait for submit button to appear after loading completes
      await waitAndGetElements(submitBtnSelector);

      await checkFullPageScreenshot();
    });

    it('does not cut off overflowing focus borders in the content area', async function() {
      const openModalBtnSelector = `${formExampleSelector} button`,
          modalSelector = `${formExampleSelector} .nx-modal`,
          checkboxSelector = `${formExampleSelector} fieldset .nx-checkbox:first-of-type`;

      const [openModalBtn] = await waitAndGetElements(openModalBtnSelector);

      await openModalBtn.click();

      const [, checkbox] = await waitAndGetElements(modalSelector, checkboxSelector);
      await checkbox.focus();

      await checkFullPageScreenshot();
    });

    it('passes a11y checks', modalA11yTest(formWithAlertExampleSelector));
  });

  describe('Narrow NxModal', function() {
    it('looks right', simpleModalTest(narrowExampleSelector));
  });

  describe('Wide NxModal', function() {
    it('looks right', simpleModalTest(wideExampleSelector));
  });

  describe('Stacked NxModals', function() {
    it('looks right', async function() {
      const exampleSelector = stackedExampleSelector,
          openFirstModalBtnSelector = `${exampleSelector} button`,
          openSecondModalBtnSelector = `${exampleSelector} .nx-modal-backdrop .nx-btn--primary`,
          closeSecondModalBtnSelector =
              `${exampleSelector} .nx-modal-backdrop + .nx-modal-backdrop .nx-footer .nx-btn-bar .nx-btn`;

      const [openFirstModalBtn] = await waitAndGetElements(openFirstModalBtnSelector);

      await openFirstModalBtn.click();

      const [openSecondModalBtn] = await waitAndGetElements(openSecondModalBtnSelector);

      await openSecondModalBtn.click();

      await waitAndGetElements(closeSecondModalBtnSelector);

      await checkFullPageScreenshot();
    });
  });

  describe('Nested NxModal', function() {
    it('looks right', async function() {
      const openModalButtonSelector = `${nestedExampleSelector} button`,
          openNestedButtonSelector = `${nestedExampleSelector} #open-nested-modal`;

      const [openModalButton] = await waitAndGetElements(openModalButtonSelector);
      await openModalButton.click();

      const [openNestedButton] = await waitAndGetElements(openNestedButtonSelector);
      await openNestedButton.click();
      await checkFullPageScreenshot();
    });

    it('focuses on first focusable element after Tab, when focused element is hidden in css', async function() {
      const openModalButtonSelector = `${nestedExampleSelector} button`,
          firstHideButtonSelector = `${nestedExampleSelector} #hide-button`,
          openNestedButtonSelector = `${nestedExampleSelector} #open-nested-modal`,
          secondHideButtonSelector = `${nestedExampleSelector} #hide-button-2`,
          secondButtonSelector = `${nestedExampleSelector} #second-button`;

      const [openModalButton] = await waitAndGetElements(openModalButtonSelector);
      await openModalButton.click();

      const [firstHideButton, openNestedButton] = await waitAndGetElements(
          firstHideButtonSelector, openNestedButtonSelector
      );

      expect(await isFocused(firstHideButton)).toBe(true);
      await openNestedButton.click();

      const [secondHideButton, secondButton] = await waitAndGetElements(
          secondHideButtonSelector, secondButtonSelector
      );

      expect(await isFocused(secondHideButton)).toBe(true);

      await secondHideButton.click();
      await getPage().keyboard.press('Tab');

      expect(await isFocused(secondButton)).toBe(true);
    });
  });

  describe('NxModal + NxDropdown ESC Closing behavior', function() {
    it('closes one layer per ESC press', async function() {
      const [initialBtn] = await waitAndGetElements(`${escClosingExampleSelector} #esc-example-initial-btn`);
      await initialBtn.click();

      const [customPanel, customPanelBtn] = await waitAndGetElements(
          `${escClosingExampleSelector} .gallery-custom-expandable`,
          `${escClosingExampleSelector} .gallery-custom-expandable button`
      );
      await customPanelBtn.click();

      const [modal1, dropdownToggle] = await waitAndGetElements(
          `${escClosingExampleSelector} #nx-modal-esc-example-modal`,
          `${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-dropdown__toggle`
      );
      await dropdownToggle.click();

      const [dropdownMenu, dropdownBtn] = await waitAndGetElements(
          `${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-dropdown-menu`,
          `${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-dropdown-button`
      );
      await dropdownBtn.click();

      const [modal2, modal2CloseBtn] = await waitAndGetElements(
          `${escClosingExampleSelector} #nx-modal-esc-example-modal2`,
          `${escClosingExampleSelector} #nx-modal-esc-example-modal2 .nx-footer .nx-btn`
      );

      async function pressEsc() {
        const { keyboard } = getPage();

        await keyboard.press('Escape');
      }

      expect(await isInDocument(modal2CloseBtn)).toBe(true);
      expect(await isFocused(modal2CloseBtn)).toBe(true);

      // close second modal
      await pressEsc();

      expect(await isInDocument(modal2)).toBe(false);
      expect(await isFocused(dropdownBtn)).toBe(true);

      // close dropdown menu
      await pressEsc();

      expect(await isInDocument(dropdownMenu)).toBe(false);
      expect(await isFocused(dropdownToggle)).toBe(true);

      // close first modal
      await pressEsc();

      expect(await isInDocument(modal1)).toBe(false);
      expect(await isFocused(customPanelBtn)).toBe(true);

      // close custom panel
      await pressEsc();

      expect(await isInDocument(customPanel)).toBe(false);
    });
  });
});
