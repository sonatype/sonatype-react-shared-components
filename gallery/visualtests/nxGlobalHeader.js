/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { a11yTest } = require('./testUtils');

describe('NxGlobalHeader', function() {
  describe('NxGlobalHeader with full content', function() {
    beforeEach(async function() {
      await browser.url('#/NxGlobalHeaderFullExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('NxGlobalHeader without action bar', function() {
    beforeEach(async function() {
      await browser.url('#/NxGlobalHeaderNoActionsExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('NxGlobalHeader without back button', function() {
    beforeEach(async function() {
      await browser.url('#/NxGlobalHeaderNoBackButtonExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });

  describe('NxGlobalHeader when empty', function() {
    beforeEach(async function() {
      await browser.url('#/NxGlobalHeaderEmptyExample');
    });

    it('looks right', async function() {
      await browser.eyesSnapshot(null);
    });

    it('passes a11y checks', a11yTest());
  });
});
