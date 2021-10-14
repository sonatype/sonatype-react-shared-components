/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const puppeteer = require('puppeteer');
const { setupBrowser } = require('./testUtils');

describe('NxAccordion', function() {
  const { getPage, simpleTest, focusTest } = setupBrowser('#/pages/NxAccordion');

  const exampleSelector = '#nx-accordion-example .gallery-example-live',
      tertiaryBtnExampleSelector = '#nx-accordion-tertiary-button-example .gallery-example-live',
      headerSelector = `${exampleSelector} .nx-accordion__header`;

  describe('Closed NxAccordion', function() {
    it('looks right', simpleTest(exampleSelector));

    it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  describe('Open NxAccordion', function() {
    beforeEach(async function() {
      const page = getPage();

      await page.waitForSelector(headerSelector);

      async function dismissDialog(d) {
        await d.dismiss();
      }

      await dismissResultingDialog(async () => {
        const header = await page.$(headerSelector);
        await header.click();
      });

      await page.$eval(headerSelector, function(el) {
        el.blur();
      });
    });

    it('looks right', simpleTest(exampleSelector));
    it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  describe('NxAccordion with tertiary header button', function() {
    it('looks right', simpleTest(tertiaryBtnExampleSelector));
  });
});
