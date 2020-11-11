/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

describe('NxAccordion', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxAccordion');
  });

  const exampleSelector = '#nx-accordion-example',
      tertiaryBtnExampleSelector = '#nx-accordion-tertiary-button-example',
      headerSelector = `${exampleSelector} .nx-accordion__header`;

  describe('Closed NxAccordion', function() {
    it('looks right', simpleTest(exampleSelector));
    it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  describe('Open NxAccordion', function() {
    beforeEach(function() {
      const header = await browser.$(headerSelector);
      await header.scrollIntoView({ block: 'center' });
      await header.click();
    });

    it('looks right', simpleTest(exampleSelector));
    it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  describe('NxAccordion with tertiary header button', function() {
    it('looks right', simpleTest(tertiaryBtnExampleSelector));
  });
});
