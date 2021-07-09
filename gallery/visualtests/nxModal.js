/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('NxAlert', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxModal');
    await browser.refresh();
  });

  const simpleExampleSelector = '#nx-modal-simple-example',
      formWithAlertExampleSelector = '#nx-modal-form-with-alert-example',
      formExampleSelector = '#nx-modal-form-example',
      narrowExampleSelector = '#nx-modal-narrow-example',
      wideExampleSelector = '#nx-modal-wide-example',
      stackedExampleSelector = '#nx-modal-stacked-example',
      escClosingExampleSelector = '#nx-modal-esc-example';

  function simpleModalTest(exampleSelector) {
    return async function() {
      const openModalBtnSelector = `${exampleSelector} button`,
          closeModalBtnSelector =
              `${exampleSelector} .nx-footer .nx-btn-bar .nx-btn:not(.nx-btn--primary):not(.nx-btn-tertiary)`;

      const openModalBtn = await browser.$(openModalBtnSelector);

      await openModalBtn.scrollIntoView({ block: 'center' });
      await openModalBtn.click();

      const closeModalBtn = await browser.$(closeModalBtnSelector);

      // take image of entire viewport in order to capture the backdrop color
      await browser.eyesSnapshot(null);
    }
  }

  describe('Simple NxModal', function() {
    it('looks right', simpleModalTest(simpleExampleSelector));
  });

  describe('Form NxModal', function() {
    it('looks right', simpleModalTest(formWithAlertExampleSelector));
    it('shows the tooltip in front of the modal', async function() {
      const openModalBtnSelector = `${formExampleSelector} button`,
          submitBtnSelector =
              `${formExampleSelector} .nx-footer .nx-btn-bar .nx-form__submit-btn`,
          cancelBtnSelector =
              `${formExampleSelector} .nx-footer .nx-btn-bar .nx-form__cancel-btn`;

      const openModalBtn = await browser.$(openModalBtnSelector);

      await openModalBtn.scrollIntoView({ block: 'center' });
      await openModalBtn.click();

      const submitBtn = await browser.$(submitBtnSelector);
      const cancelBtn = await browser.$(cancelBtnSelector);

      // this modal has a loading form built in so we need to wait for it to load
      await submitBtn.waitForDisplayed();
      await submitBtn.moveTo();

      // take image of entire viewport in order to capture the backdrop color
      await browser.eyesSnapshot(null);
    });
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
              `${exampleSelector} .nx-modal-backdrop + .nx-modal-backdrop .nx-footer .nx-btn-bar .nx-btn`,
          closeFirstModalBtnSelector =
              `${exampleSelector} .nx-modal-backdrop .nx-footer .nx-btn-bar .nx-btn`;

      const openFirstModalBtn = await browser.$(openFirstModalBtnSelector);

      await openFirstModalBtn.scrollIntoView({ block: 'center' });
      await openFirstModalBtn.click();

      const closeFirstModalBtn = await browser.$(closeFirstModalBtnSelector);

      const openSecondModalBtn = await browser.$(openSecondModalBtnSelector);

      await openSecondModalBtn.click();

      const closeSecondModalBtn = await browser.$(closeSecondModalBtnSelector);

      // take image of entire viewport in order to capture the backdrop color
      await browser.eyesSnapshot(null);
    });
  });

  describe('NxModal + NxDropdown ESC Closing behavior', function() {
    it('closes one layer per ESC press', async function() {
      const [
        initialBtn,
        customPanel,
        customPanelBtn,
        dropdownToggle,
        dropdownMenu,
        dropdownBtn,
        modal1,
        modal1CloseBtn,
        modal2,
        modal2CloseBtn
      ] = await Promise.all([
        browser.$(`${escClosingExampleSelector} #esc-example-initial-btn`),
        browser.$(`${escClosingExampleSelector} .gallery-custom-expandable`),
        browser.$(`${escClosingExampleSelector} .gallery-custom-expandable button`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-dropdown__toggle`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-dropdown-menu`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-dropdown-button`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal .nx-footer .nx-btn`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal2`),
        browser.$(`${escClosingExampleSelector} #nx-modal-esc-example-modal2 .nx-footer .nx-btn`)
      ]);

      await initialBtn.click();
      await customPanel.waitForDisplayed();
      await customPanelBtn.click();
      await modal1.waitForDisplayed();
      await dropdownToggle.click();
      await dropdownBtn.waitForDisplayed();
      await dropdownBtn.click();
      await modal2.waitForDisplayed();

      expect(await modal2CloseBtn.isFocused()).toBe(true);

      // close second modal
      await browser.keys('Escape');

      expect(await modal2.isDisplayed()).toBe(false);
      expect(await dropdownBtn.isFocused()).toBe(true);

      // close dropdown menu
      await browser.keys('Escape');

      expect(await dropdownMenu.isDisplayed()).toBe(false);
      expect(await dropdownToggle.isFocused()).toBe(true);

      // close first modal
      await browser.keys('Escape');

      expect(await modal1.isDisplayed()).toBe(false);
      expect(await customPanelBtn.isFocused()).toBe(true);

      // close custom panel
      await browser.keys('Escape');

      expect(await customPanel.isDisplayed()).toBe(false);
    });
  });
});
