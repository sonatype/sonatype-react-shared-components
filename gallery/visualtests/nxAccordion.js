/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const puppeteer = require('puppeteer');
//const { focusTest, simpleTest } = require('./testUtils');

describe('NxAccordion', function() {
  let browser, page;

  beforeAll(async function() {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(async function() {
    await browser.close();
  });

  beforeEach(async function() {
    await page.goto(`file://${__dirname}/../dist/index.html#/pages/NxAccordion`);
  });

  const exampleSelector = '#nx-accordion-example .gallery-example-live',
      tertiaryBtnExampleSelector = '#nx-accordion-tertiary-button-example .gallery-example-live',
      headerSelector = `${exampleSelector} .nx-accordion__header`;

  describe('Closed NxAccordion', function() {
    it('looks right', async function () {
      await page.waitForSelector(exampleSelector);
      const element = await page.$(exampleSelector);
      const image = await element.screenshot();

      expect(image).toMatchImageSnapshot();
    });

    //it('looks right when the header is focused', focusTest(exampleSelector, headerSelector));
  });

  /*
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
    it('looks right', simpleTest(tertiaryBtnExampleSelector));
  });
  */
});
