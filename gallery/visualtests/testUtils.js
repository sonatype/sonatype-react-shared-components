/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const puppeteer = require('puppeteer');

module.exports = {
  setupBrowser(pageFragmentIdentifier) {
    let browser, page;

    beforeAll(async function() {
      browser = await puppeteer.launch();
      page = await browser.newPage();
    });

    afterAll(async function() {
      await browser.close();
    });

    beforeEach(async function() {
      await page.goto(`file://${__dirname}/../dist/index.html${pageFragmentIdentifier}`);
    });

    async function blurElement(selector) {
      await page.$eval(selector, function(el) {
        el.blur();
      });
    }

    return {
      getBrowser: () => browser,
      getPage: () => page,

      blurElement,

      simpleTest(selector) {
        return async function() {
          await Promise.all([page.waitForSelector(selector), page.mouse.move(0, 0)]);
          const element = await page.$(selector);
          const image = await element.screenshot();

          expect(image).toMatchImageSnapshot();
        };
      },

      focusTest(elementSelector, focusSelector = elementSelector) {
        return async function() {
          await Promise.all([
            page.waitForSelector(elementSelector),
            page.waitForSelector(focusSelector),
            page.mouse.move(0, 0)
          ]);

          const [targetElement, focusElement] = await Promise.all([page.$(elementSelector), page.$(focusSelector)]);

          try {
            await focusElement.focus();
            const image = await targetElement.screenshot();

            expect(image).toMatchImageSnapshot();
          }
          finally {
            await blurElement(focusSelector);
          }
        };
      },

      hoverTest(elementSelector, hoverSelector = elementSelector) {
        return async function() {
          await Promise.all([
            page.waitForSelector(elementSelector),
            page.waitForSelector(hoverSelector),
            page.mouse.move(0, 0)
          ]);

          const [targetElement, focusElement] = await Promise.all([page.$(elementSelector), page.$(hoverSelector)]);

          await focusElement.hover();
          const image = await targetElement.screenshot();

          expect(image).toMatchImageSnapshot();
        };
      },

      focusAndHoverTest(elementSelector, hoverSelector = elementSelector) {
        return async function() {
          await Promise.all([
            page.waitForSelector(elementSelector),
            page.waitForSelector(hoverSelector),
            page.mouse.move(0, 0)
          ]);

          const [targetElement, focusElement] = await Promise.all([page.$(elementSelector), page.$(hoverSelector)]);


          try {
            await focusElement.focus();
            await focusElement.hover();
            const image = await targetElement.screenshot();

            expect(image).toMatchImageSnapshot();
          }
          finally {
            await blurElement(hoverSelector);
          }
        };
      }
    };
  }
};
