/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { By, ClassicRunner, Configuration, Eyes, Target } = require('@applitools/eyes-webdriverio');

describe('NxBackButton', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxBackButton');
  });

  describe('Simple NxBackButton', function() {
    it('looks right', async function() {
      const targetElement = await browser.$('#nx-back-button-simple-example .nx-back-button');

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.eyesRegionSnapshot(null, Target.region(targetElement));
    });
  });
});
