/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');

module.exports = {
  simpleTest(selector) {
    return async () => {
      const targetElement = await browser.$(selector);

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.pause(1000);
      await targetElement.moveTo({ xOffset: -10, yOffset: -10 });
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  hoverTest(elementSelector, hoverSelector = elementSelector) {
    return async () => {
      const [targetElement, hoverElement] = await Promise.all([browser.$(elementSelector), browser.$(hoverSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.pause(1000);
      await hoverElement.moveTo();

      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  focusTest(elementSelector, focusSelector = elementSelector) {
    return async () => {
      const [targetElement, focusElement] = await Promise.all([browser.$(elementSelector), browser.$(focusSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.pause(1000);

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
      await browser.pause(1000);
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
      await browser.pause(1000);

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
      }
    };
  }
};
