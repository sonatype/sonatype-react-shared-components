/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-form', function() {
  const { waitAndGetElements, checkScreenshot, simpleTest, a11yTest } = setupBrowser('#/pages/Form Layout Examples');

  const generalFormSelector = '#nx-form-layout-example .nx-form',
      horizontablFormSelector = '#nx-form-layout-horizontal-example .nx-form';

  describe('nx-form layout', function() {
    it('looks right', simpleTest(generalFormSelector));
    it('looks right with form-wide validation errors', async function() {
      const [form, submitBtn] = await waitAndGetElements(
          generalFormSelector,
          `${generalFormSelector} .nx-form__submit-btn`
      );

      await submitBtn.click();
      await checkScreenshot(form);
    });
  });

  describe('nx-form horizontal layout', function() {
    it('looks right', simpleTest(horizontablFormSelector));
  });

  // color-contrast rule doesn't work on elements with a background-image (such as nx-form-select)
  it('passes a11y checks', a11yTest(builder => builder.disableRules('color-contrast')));
});
