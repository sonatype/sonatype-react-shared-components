/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxGlobalHeader', function() {
  describe('with full content', function() {
    const { getPage, checkFullPageScreenshot } = setupBrowser('#/NxGlobalHeaderFullExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('without action bar', function() {
    const { getPage, checkFullPageScreenshot } = setupBrowser('#/NxGlobalHeaderNoActionsExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('without back button', function() {
    const { getPage, checkFullPageScreenshot } = setupBrowser('#/NxGlobalHeaderNoBackButtonExample');

    it('looks right', async function() {
      await checkFullPageScreenshot();
    });
  });

  describe('when empty', function() {
    const { getPage, checkFullPageScreenshot } = setupBrowser('#/NxGlobalHeaderEmptyExample');

    it('looks right when empty', async function() {
      await checkFullPageScreenshot();
    });
  });
});
