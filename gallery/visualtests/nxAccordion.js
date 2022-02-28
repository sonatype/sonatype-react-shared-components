/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { focusTest, simpleTest, a11yTest } = require('./testUtils');

describe('NxAccordion', function() {
  beforeEach(async function() {
    await browser.url('#/pages/Accordion');
    await browser.refresh();
  });

  const exampleSelector = '#nx-accordion-example .gallery-example-live',
      nestedNxListExampleSelector = '#nx-accordion-nested-nx-list-example .gallery-example-live',
      iconButtonHeaderExampleSelector = '#nx-accordion-icon-button-header-example .gallery-example-live',
      buttonHeaderExampleSelector = '#nx-accordion-tertiary-button-header-example .gallery-example-live',
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

      // this example header has a click handler that opens an alert
      await browser.acceptAlert();

      await browser.execute(function(el) {
        el.blur();
      }, header);
    });

    it('looks right', simpleTest(exampleSelector));
    it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  describe('NxAccordion with tertiary header button', function() {
    it('looks right', simpleTest(buttonHeaderExampleSelector));
  });

  describe('NxAccordion with icon header button', function() {
    it('looks right', simpleTest(iconButtonHeaderExampleSelector));
  });

  describe('NxAccordion with nested NxList', function() {
    it('looks right', simpleTest(nestedNxListExampleSelector));
  });

  describe('non-deprecated NxAccordion', function() {
    beforeEach(async function() {
      await browser.url('#/pages/Accordion?hideDeprecatedExamples');
    });

    it('passes a11y checks', a11yTest());
  });
});
