/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const puppeteer = require('puppeteer');

const fs = require('fs');
const path = require('path');
const tmp = require('tmp-promise');

const pageUrl = `file://${__dirname}/../dist/index.html`;

const { AxePuppeteer } = require('@axe-core/puppeteer');

module.exports = {
  setupBrowser(pageFragmentIdentifier, ignoreVersionNumber = true) {
    let browser, page;

    async function enableClipboardAccess(browser) {
      // This ought to be possible with browser.defaultBrowserContext().overridePermissions but that doesn't
      // seem to work right for enabling clipboard-write.  See
      // https://github.com/puppeteer/puppeteer/issues/3241#issuecomment-751489962
      const session = await browser.target().createCDPSession();
      await session.send('Browser.grantPermissions', {
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
        defaultViewport: { width: 1366, height: 4000 },
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

    async function checkScreenshotWithOutset(element, outset = 0) {
      const { x, y, width, height } = await element.boundingBox();
      await checkScreenshotCoordinates(x - outset, y - outset, width + outset * 2, height + outset * 2);
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

    async function scrollPage(y) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
    }

    async function moveMouseAway() {
      await page.mouse.move(0, 0);
    }

    async function fillFile(path, numBytes) {
      const MAX_BUFFER_SIZE = 1 << 20, // 1 MiB
          writeStream = fs.createWriteStream(path);

      let buffer;

      for (let i = 0; i < numBytes; i += MAX_BUFFER_SIZE) {
        const bufferSize = Math.min(MAX_BUFFER_SIZE, numBytes - i);

        if (!(buffer && buffer.length === bufferSize)) {
          buffer = await Buffer.alloc(bufferSize);
        }

        writeStream.write(buffer);
      }

      return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);

        writeStream.end();
      });
    }

    let files, tmpDir;

    async function buildUploadableFiles() {
      tmpDir = await tmp.dir({ unsafeCleanup: true });

      files = {
        bytes: path.join(tmpDir.path, 'bytes'),
        kilobytes: path.join(tmpDir.path, 'kilobytes'),
        megabytes: path.join(tmpDir.path, 'megabytes'),
        gigabytes: path.join(tmpDir.path, 'gigabytes-gigalongname')
      };

      const bytesPromise = fillFile(files.bytes, 14),
          kilobytesPromise = fillFile(files.kilobytes, 2000),
          megabytesPromise = fillFile(files.megabytes, 1500100),
          gigabytesPromise = fillFile(files.gigabytes, 1200000100);

      await Promise.all([bytesPromise, kilobytesPromise, megabytesPromise, gigabytesPromise]);

      return files;
    }

    async function cleanupUploadableFiles() {
      await tmpDir.cleanup();
    }

    function setupUploadableFiles() {

      beforeAll(async function() {
        const returnedFiles = await buildUploadableFiles();
        files = returnedFiles;
        return files;
      });

      afterAll(async function() {
        await cleanupUploadableFiles();
      });

      return () => files;
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
      setupUploadableFiles,
      scrollIntoView,
      scrollPage,

      waitForSelectors,
      getElements,
      waitAndGetElements,
      wait,

      checkScreenshot,
      checkFullPageScreenshot,
      checkScreenshotCoordinates,

      simpleTest(selector, outset) {
        return async function() {
          const [element] = await waitAndGetElements(selector);
          await moveMouseAway();
          await checkScreenshotWithOutset(element, outset);
        };
      },

      focusTest(elementSelector, focusSelector = elementSelector, outset) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, focusSelector);

          try {
            await focusElement.focus();
            await checkScreenshotWithOutset(targetElement, outset);
          }
          finally {
            await blurElement(focusElement);
          }
        };
      },

      hoverTest(elementSelector, hoverSelector = elementSelector, waitForTooltip = false, outset) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, hoverSelector);

          await scrollIntoView(targetElement);
          await focusElement.hover();

          if (waitForTooltip) {
            await wait(500);
          }

          await checkScreenshotWithOutset(targetElement, outset);
        };
      },

      focusAndHoverTest(elementSelector, hoverSelector = elementSelector, outset) {
        return async function() {
          const [targetElement, focusElement] = await waitAndGetElements(elementSelector, hoverSelector);

          try {
            await scrollIntoView(targetElement);
            await focusElement.focus();
            await focusElement.hover();
            await checkScreenshotWithOutset(targetElement, outset);
          }
          finally {
            await blurElement(focusElement);
          }
        };
      },

      clickTest(elementSelector, clickSelector = elementSelector, outset) {
        return async () => {
          const [targetElement, clickElement] = await waitAndGetElements(elementSelector, clickSelector);

          await scrollIntoView(targetElement);

          const { x, y, width, height } = await clickElement.boundingBox();

          await page.mouse.move(x + width / 2, y + height / 2);

          await dismissResultingDialog(async () => {
            await page.mouse.down();
            await checkScreenshotWithOutset(targetElement, outset);
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
