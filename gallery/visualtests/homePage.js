/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { By, ClassicRunner, Configuration, Eyes, Target } = require('@applitools/eyes-webdriverio');

describe('Home Page', function() {
  let eyes;

  it('looks right', async function() {
    await browser.url('#/pages/NxAlert');
    await browser.eyesSnapshot('Home Page', Target.window());
    await browser.eyesRegionSnapshot('Page Header', Target.region(By.className('nx-page-header')));
  });
});
