/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const puppeteer = require('puppeteer');

const pageUrl = `file://${__dirname}/../dist/index.html`;

const { AxePuppeteer } = require('@axe-core/puppeteer');

module.exports = {
  setupBrowser(pageFragmentIdentifier, ignoreVersionNumber = true) {
    let browser, page;

    async function enableClipboardAccess(browser) {
      // This ought to be possible with browser.defaultBrowserContext().overridePermissions but that doesn't
      // seem to work right for enabling clipboard-write.  See
      // https://github.com/puppeteer/puppeteer/issues/3241#issuecomment-751489962
      await browser._connection.send('Browser.grantPermissions', {
        origin: pageUrl,
        permissions: ['clipboardReadWrite', 'clipboardSanitizedWrite']
      });
    }

    async function hideVersionNumber() {
      const [versionEl] = await waitAndGetElements('.gallery-page-header__version');
      await versionEl.evaluate(el => { el.style.visibility = 'hidden'; });
    }

    beforeAll(async function() {
      browser = await puppeteer.launch({
        defaultViewport: { width: 1366, height: 3000 },
        headless: true,

        // we trust the pages we'll be viewing, and this is needed to run in docker without hampering docker's own
        // security configuration
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--font-render-hinting=none'
        ]
      });
      await enableClipboardAccess(browser);
    });

    afterEach(async function() {
      await page.removeAllListeners();
      await page.close();
    });

    afterAll(async function() {
      await browser.close();
    });

    beforeEach(async function() {
      page = await browser.newPage();
      await page.goto(pageUrl + pageFragmentIdentifier);

      if (ignoreVersionNumber) {
        await hideVersionNumber();
      }

      await page.mouse.move(0, 0);
    });

    async function blurElement(element) {
      await page.evaluate(function(el) {
        el.blur();
      }, element);
    }

    async function isFocused(element) {
      return await element.evaluate(e => e === document.activeElement);
    }

    async function isInDocument(el) {
      return el.evaluate(e => e.isConnected);
    }

    async function isVisible(el) {
      return el.evaluate(e => {
        const computedStyles = window.getComputedStyle(e);
        const rect = e.getBoundingClientRect();
        return !!(
          computedStyles.display !== 'none'
          && computedStyles.opacity !== '0'
          && computedStyles.visibility !== 'hidden'
          && !!(rect.bottom || rect.top || rect.height || rect.width)
        );
      });
    }

    async function waitForSelectors(...selectors) {
      return Promise.all(selectors.map(s => page.waitForSelector(s)));
    }

    async function getElements(...selectors) {
      return Promise.all(selectors.map(s => page.$(s)));
    }

    async function waitAndGetElements(...selectors) {
      await waitForSelectors(...selectors);
      return await getElements(...selectors);
    }

    function wait(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function checkScreenshot(element, customWidth, customHeight) {
      let image;
      if (customHeight || customWidth) {
        const { x, y, width, height } = await element.boundingBox(),
            pageScrollY = await page.evaluate(() => window.scrollY),
            pageScrollX = await page.evaluate(() => window.scrollX);

        image = await page.screenshot({
          clip: {
            x: x + pageScrollX,
            y: y + pageScrollY,
            width: customWidth == null ? width : customWidth,
            height: customHeight == null ? height : customHeight
          }
        });
      }
      else {
        image = await element.screenshot();
      }

      expect(image).toMatchImageSnapshot();
    }

    async function checkScreenshotCoordinates(x, y, width, height) {
      const pageScrollY = await page.evaluate(() => window.scrollY),
          pageScrollX = await page.evaluate(() => window.scrollX),
          image = await page.screenshot({
            clip: {
              x: x + pageScrollX,
              y: y + pageScrollY,
              height,
              width
            }
          });

      expect(image).toMatchImageSnapshot();
    }

    async function checkFullPageScreenshot() {
      const screenshot = await page.screenshot();
      expect(screenshot).toMatchImageSnapshot();
    }

    async function dismissResultingDialog(action, waitTime) {
      page.once('dialog', async d => {
        if (waitTime) {
          await wait(waitTime);
        }

        await d.dismiss();
      });

      await action();
    }

    async function disableLoadingSpinnerAnimation() {
      const spinner = await page.$('.nx-loading-spinner__icon');
      await spinner.evaluate(el => el.style.animation = 'none');
    }

    async function scrollIntoView(el) {
      await el.evaluate(e => e.scrollIntoView({ block: 'center' }));
    }

    async function moveMouseAway() {
      await page.mouse.move(0, 0);
    }

    return {
      getBrowser: () => browser,
      getPage: () => page,

      blurElement,
      isFocused,
      isVisible,
      isInDocument,
      moveMouseAway,
      dismissResultingDialog,
      disableLoadingSpinnerAnimation,
      scrollIntoView,

      waitForSelectors,
      getElements,
      waitAndGetElements,
      wait,

      checkScreenshot,
      checkFullPageScreenshot,
      checkScreenshotCoordinates,

      simpleTest(selector) {
        return async function() {
          const [element] = await waitAndGetElements(selector);
          await checkScreenshot(element);
        };
      },

      focusTest(elementSelector, focusSelector = elementSelector) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, focusSelector);

          try {
            await focusElement.focus();
            await checkScreenshot(targetElement);
          }
          finally {
            await blurElement(focusElement);
          }
        };
      },

      hoverTest(elementSelector, hoverSelector = elementSelector, waitForTooltip = false) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, hoverSelector);

          await scrollIntoView(targetElement);
          await focusElement.hover();

          if (waitForTooltip) {
            await wait(500);
          }

          await checkScreenshot(targetElement);
        };
      },

      focusAndHoverTest(elementSelector, hoverSelector = elementSelector) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, hoverSelector);

          try {
            await scrollIntoView(targetElement);
            await focusElement.focus();
            await focusElement.hover();
            await checkScreenshot(targetElement);
          }
          finally {
            await blurElement(focusElement);
          }
        };
      },

      clickTest(elementSelector, clickSelector = elementSelector) {
        return async () => {
          const [targetElement, clickElement] = await waitAndGetElements(elementSelector, clickSelector);

          await scrollIntoView(targetElement);

          const { x, y, width, height } = await clickElement.boundingBox();

          await page.mouse.move(x + width / 2, y + height / 2);

          await dismissResultingDialog(async () => {
            await page.mouse.down();
            await checkScreenshot(targetElement);
          }, 300);
        };
      },

      a11yTest(builderCustomizer, fullPage = false) {
        return async () => {
          // to allow async code such as tooltip initialization to complete
          await wait(500);

          // the color contrast checker seems to be buggy, it has many complaints about overlapping items when
          // there aren't any
          const builder = new AxePuppeteer(page).disableRules('color-contrast'),
              builderWithInclude = fullPage ? builder : builder.include('.gallery-example-live'),
              customizedBuilder = builderCustomizer ? builderCustomizer(builderWithInclude) : builderWithInclude,
              axeResults = await customizedBuilder.analyze();

          expect(axeResults.violations).toEqual([]);
          expect(axeResults.incomplete).toEqual([]);
        };
      }
    };
  }
};
