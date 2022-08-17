/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxGlobalHeader', function() {
  describe('with full content', function() {
    const { getPage, checkFullPageScreenshot, a11yTest } = setupBrowser('#/NxGlobalHeaderFullExample', false);

    it('looks right', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('without action bar', function() {
    const { getPage, checkFullPageScreenshot, a11yTest } = setupBrowser('#/NxGlobalHeaderNoActionsExample', false);

    it('looks right', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('without back button', function() {
    const { getPage, checkFullPageScreenshot, a11yTest } = setupBrowser('#/NxGlobalHeaderNoBackButtonExample', false);

    it('looks right', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });

  describe('when empty', function() {
    const { getPage, checkFullPageScreenshot, a11yTest } = setupBrowser('#/NxGlobalHeaderEmptyExample', false);

    it('looks right when empty', async function() {
      await getPage().setViewport({ width: 1366, height: 1000 });
      await checkFullPageScreenshot();
    });

    it('passes a11y checks', a11yTest(null, true));
  });
});
