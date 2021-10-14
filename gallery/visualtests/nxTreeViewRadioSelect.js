/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTreeViewRadioSelect', function() {
  const { focusTest, simpleTest } = setupBrowser('#/pages/NxTreeViewRadioSelect');

  const selector = '#nx-tree-view-radio-select-example .nx-tree-view--select';

  it('looks right', simpleTest(selector));

  describe('NxTreeViewRadioSelect radio', function() {
    const radioSelector = selector + ' .nx-tree-view__child:nth-child(3) .nx-radio-checkbox__input';
    it('has an offsetted blue outer border outline and glow when focused', focusTest(selector, radioSelector));
  });
});
