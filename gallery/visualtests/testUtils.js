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
      await focusElement.moveTo({ xOffset: -100, yOffset: -100 });
      await browser.execute(function(el) {
        el.focus();
      }, focusElement);

      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    };
  },

  focusAndHoverTest(elementSelector, focusHoverSelector = elementSelector) {
    return async () => {
      const focusElement = await browser.$(focusHoverSelector);

      await browser.execute(function(el) {
        el.focus();
      }, focusElement);

      await module.exports.hoverTest(elementSelector)();
    };
  },

  clickTest(elementSelector, clickSelector = elementSelector) {
    return async () => {
      const [targetElement, clickElement] = await Promise.all([browser.$(elementSelector), browser.$(clickSelector)]);

      await clickElement.moveTo();
      await browser.performActions([{
        id: 'pointer1',
        type: 'pointer',
        parameters: {
          pointerType: 'mouse'
        },
        actions: [{
          type: 'pointerDown',
          button: 1
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
