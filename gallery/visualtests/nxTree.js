/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTree', function() {
  const { clickTest, focusTest, simpleTest, blurElement, waitAndGetElements } = setupBrowser('#/pages/NxTree');

  const nonCollapsibleExampleSelector = '#nx-tree-non-collapsible-example .nx-tree',
      collapsibleExampleSelector = '#nx-tree-collapsible-example .gallery-example-live > .nx-tree',
      nonCollapsibleMultiTopExampleSelector = '#nx-tree-non-collapsible-multi-top-example .nx-tree',
      collapsibleMultiTopExampleSelector = '#nx-tree-collapsible-multi-top-example .nx-tree',
      noGutterExampleSelector = '#nx-tree-no-gutter-example .gallery-example-live',
      aCollapseControlSelector = `${collapsibleExampleSelector} > .nx-tree__item > .nx-tree > .nx-tree__item >
          .nx-tree > .nx-tree__item > .nx-tree > .nx-tree__item > .nx-tree > .nx-tree__item:nth-child(2) >
          .nx-tree__collapse-label`;

  it('looks right with a single top entry and no collapsing', simpleTest(nonCollapsibleExampleSelector));
  it('looks right with a single top entry and collapsing', simpleTest(collapsibleExampleSelector));
  it('looks right with a multiple top entries and no collapsing', simpleTest(nonCollapsibleMultiTopExampleSelector));
  it('looks right with a multiple top entries and collapsing', simpleTest(collapsibleMultiTopExampleSelector));
  it('looks right in relation to other content when it has the no-gutter modifier',
      simpleTest(noGutterExampleSelector));

  it('looks right with some collapsible elements collapsed', async function() {
    const collapseControlSelector1 = `${collapsibleExampleSelector} .nx-tree__item .nx-tree__item
            .nx-tree__item:last-child .nx-tree__item .nx-tree__item:nth-child(2) .nx-tree__collapse-label`,
        collapseControlSelector2 = `${collapsibleExampleSelector} .nx-tree__item .nx-tree__item
            .nx-tree__item:last-child .nx-tree__item .nx-tree__item:last-child .nx-tree__item:last-child
            .nx-tree__collapse-label`,
        input2Selector = `${collapseControlSelector2} input`,
      [tree, collapseControl1, collapseControl2, collapseInput2] = await waitAndGetElements(
          collapsibleMultiTopExampleSelector,
          collapseControlSelector1,
          collapseControlSelector2,
          input2Selector
      );

    await collapseControl1.click();
    await collapseControl2.click();
    await blurElement(collapseInput2);

    await simpleTest(collapsibleExampleSelector)();
  });

  it('looks right when a collapse control is focused',
      focusTest(collapsibleExampleSelector, aCollapseControlSelector));

  it('looks right when a collapse control is clicked',
      clickTest(collapsibleExampleSelector, aCollapseControlSelector));
});
