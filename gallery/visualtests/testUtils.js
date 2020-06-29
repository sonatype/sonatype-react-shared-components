/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Target } = require('@applitools/eyes-webdriverio');

module.exports = {
  async simpleTest(selector) {
    const targetElement = await browser.$(selector);

    await targetElement.scrollIntoView({ block: 'center' });
    await browser.eyesRegionSnapshot(null, Target.region(targetElement));
  },

  async hoverTest(elementSelector, hoverSelector = elementSelector) {
    const [targetElement, hoverElement] = await Promise.all(browser.$(elementSelector), browser.$(hoverElement));

    await targetElement.scrollIntoView({ block: 'center' });
    await hoverElement.moveTo();
    await browser.eyesRegionSnapshot(null, Target.region(targetElement));
  }
};
