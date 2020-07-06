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
  }
};
