/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');

module.exports = {
  simpleTest(selector) {
    return async () => {
      const targetElement = await browser.$(selector);

      await targetElement.scrollIntoView({ block: 'center' });
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  hoverTest(elementSelector, hoverSelector = elementSelector) {
    return async () => {
      const [targetElement, hoverElement] = await Promise.all([browser.$(elementSelector), browser.$(hoverSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await hoverElement.moveTo();

      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  focusTest(elementSelector, focusSelector = elementSelector) {
    return async () => {
      const [targetElement, focusElement] = await Promise.all([browser.$(elementSelector), browser.$(focusSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });

      // make sure mouse is not on element
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });
      await browser.execute(function(el) {
        el.focus();
      }, focusElement);

      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  focusAndHoverTest(elementSelector, focusHoverSelector = elementSelector) {
    return async () => {
      const [focusElement, targetElement] =
          await Promise.all([browser.$(focusHoverSelector), browser.$(elementSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.execute(function(el) {
        el.focus();
      }, focusElement);
      await focusElement.moveTo();

      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  clickTest(elementSelector, clickSelector = elementSelector) {
    return async () => {
      const [targetElement, clickElement] = await Promise.all([browser.$(elementSelector), browser.$(clickSelector)]);

      await clickElement.scrollIntoView({ block: 'center' });

      await browser.performActions([{
        id: 'pointer1',
        type: 'pointer',
        parameters: {
          pointerType: 'mouse'
        },
        actions: [{
          type: "pointerMove",
          duration: 0,
          origin: clickElement,
          x: 10,
          y: 10
        }, {
          type: 'pointerDown',
          button: 0
        }]
      }]);

      try {
        await browser.eyesRegionSnapshot(null, Target.region(targetElement));
      }
      finally {
        browser.releaseActions();

        await browser.pause(1000);

        // some button examples have click handlers that fire alert dialogs
        if (await browser.isAlertOpen()) {
          await browser.acceptAlert();
        }
      }
    };
  },

  // A simple-style test for elements that are too tall to fit into view all at once. It takes a series of screenshots
  // with appropriate scrolling to ultimately capture the whole element
  simpleTestLongElement(selector) {
    return async () => {
      const targetElement = await browser.$(selector),
          screenshotHeight = 900,
          headerHeight = 75;

      const { x, y, width, height } = await browser.getElementRect(targetElement.elementId);

      let currentScreenshotY = y,
          i = 0;
      while (currentScreenshotY < y + height) {
        const remainingElementHeight = height - screenshotHeight * i,
          currentScreenshotHeight = Math.min(screenshotHeight, remainingElementHeight),
          screenshotRegion = new Region(x, currentScreenshotY, width, currentScreenshotHeight);

        await browser.execute(function(x, y) {
          return window.scroll(x, y);
        }, 0, y + (screenshotHeight * i) - headerHeight);

        await browser.eyesRegionSnapshot(`Part ${i}`, Target.region(screenshotRegion));

        i++;
        currentScreenshotY += screenshotHeight;
      }
    };
  }
};
