/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxSmallTag', function() {
  const { simpleTest, a11yTest } = setupBrowser('#/pages/Small%20Tag');

  const smallTagSelector = '#nx-small-tag-example .gallery-example-live',
      defaultTagSelector = `${smallTagSelector} .nx-small-tag--pink .nx-small-tag__text`,
      smallTagLayoutSelector = '#nx-small-tag-layout-example .gallery-example-live';

  it('looks right', simpleTest(smallTagSelector));
  it('renders a default pink colored NxSmallTag if no color prop is passed', simpleTest(defaultTagSelector));
  it('looks right', simpleTest(smallTagLayoutSelector));
  it('passes a11y checks', a11yTest());
});
