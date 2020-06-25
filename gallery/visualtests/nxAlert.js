/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { By, ClassicRunner, Configuration, Eyes, Target } = require('@applitools/eyes-webdriverio');

describe('NxAlert', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxAlert');
  });

  describe('Custom NxAlert', function() {
    it('looks right', async function() {
      const targetElement = await browser.$('.nx-alert--modifier');

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.eyesRegionSnapshot('Alert', Target.region(targetElement));
    });
  });

  describe('NxSuccessAlert', function() {
    it('looks right', async function() {
      const targetElement = await browser.$('.nx-alert--success');

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.eyesRegionSnapshot('Alert', Target.region(targetElement));
    });
  });

  describe('NxErrorAlert', function() {
    it('looks right', async function() {
      const targetElement = await browser.$('.nx-alert--error');

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.eyesRegionSnapshot('Alert', Target.region(targetElement));
    });
  });

  describe('NxInfoAlert', function() {
    it('looks right', async function() {
      const targetElement = await browser.$('.nx-alert--info');

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.eyesRegionSnapshot('Alert', Target.region(targetElement));
    });
  });

  describe('NxWarningAlert', function() {
    it('looks right', async function() {
      const targetElement = await browser.$('.nx-alert--warning');

      await targetElement.scrollIntoView({ block: 'center' });
      await browser.eyesRegionSnapshot('Alert', Target.region(targetElement));
    });
  });
});
