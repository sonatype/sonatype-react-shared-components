/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
describe('NxAlert', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxModal');
  });

  const simpleExampleSelector = '#nx-modal-simple-example',
      formExampleSelector = '#nx-modal-form-with-alert-example',
      narrowExampleSelector = '#nx-modal-narrow-example',
      wideExampleSelector = '#nx-modal-wide-example',
      stackedExampleSelector = '#nx-modal-stacked-example';

  function simpleModalTest(exampleSelector) {
    return async function() {
      const openModalBtnSelector = `${exampleSelector} button`,
          closeModalBtnSelector =
              `${exampleSelector} .nx-footer .nx-btn-bar .nx-btn:not(.nx-btn--primary):not(.nx-btn-tertiary)`;

      const openModalBtn = await browser.$(openModalBtnSelector);

      await openModalBtn.scrollIntoView({ block: 'center' });
      await openModalBtn.click();

      const closeModalBtn = await browser.$(closeModalBtnSelector);

      try {
        // take image of entire viewport in order to capture the backdrop color
        await browser.eyesSnapshot(null);
      }
      finally {
        await closeModalBtn.click();
      }
    }
  }

  describe('Simple NxModal', function() {
    it('looks right', simpleModalTest(simpleExampleSelector));
  });

  describe('Form NxModal', function() {
    it('looks right', simpleModalTest(formExampleSelector));
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

      try {
      const openSecondModalBtn = await browser.$(openSecondModalBtnSelector);

      await openSecondModalBtn.click();

      const closeSecondModalBtn = await browser.$(closeSecondModalBtnSelector);

        try {
          // take image of entire viewport in order to capture the backdrop color
          await browser.eyesSnapshot(null);
        }
        finally {
          await closeSecondModalBtn.click();
        }
      }
      finally {
        await closeFirstModalBtn.click();
      }
    });
  });
});
