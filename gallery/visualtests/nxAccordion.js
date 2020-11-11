/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { focusTest, simpleTest } = require('./testUtils');

describe('NxAccordion', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxAccordion');
    await browser.refresh();
  });

  const exampleSelector = '#nx-accordion-example .gallery-example-live',
      tertiaryBtnExampleSelector = '#nx-accordion-tertiary-button-example .gallery-example-live',
      headerSelector = `${exampleSelector} .nx-accordion__header`;

  describe('Closed NxAccordion', function() {
    it('looks right', simpleTest(exampleSelector));
    it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  describe('Open NxAccordion', function() {
    beforeEach(async function() {
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
