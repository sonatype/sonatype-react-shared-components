/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { clickTest, focusTest, simpleTest, simpleTestLongElement } = require('./testUtils');

describe('NxTree', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxTree');
    await browser.refresh();
  });

  const nonCollapsibleExampleSelector = '#nx-tree-non-collapsible-example .nx-tree',
      collapsibleExampleSelector = '#nx-tree-collapsible-example .nx-tree',
      nonCollapsibleMultiTopExampleSelector = '#nx-tree-non-collapsible-multi-top-example .nx-tree',
      collapsibleMultiTopExampleSelector = '#nx-tree-collapsible-multi-top-example .nx-tree',
      firstCollapseControlSelector = `${collapsibleExampleSelector} .nx-tree__collapse-label`;

  it('looks right with a single top entry and no collapsing', simpleTestLongElement(nonCollapsibleExampleSelector));
  it('looks right with a single top entry and collapsing', simpleTest(collapsibleExampleSelector));
  it('looks right with a multiple top entries and no collapsing', simpleTest(nonCollapsibleMultiTopExampleSelector));
  it('looks right with a multiple top entries and collapsing', simpleTest(collapsibleMultiTopExampleSelector));

  it('looks right with some collapsible elements collapsed', async function() {
    const collapseControlSelector1 = `${collapsibleExampleSelector} .nx-tree__item .nx-tree__item
            .nx-tree__item:last-child .nx-tree__item .nx-tree__item:nth-child(2) .nx-tree__collapse-label`,
        collapseControlSelector2 = `${collapsibleExampleSelector} .nx-tree__item .nx-tree__item
            .nx-tree__item:last-child .nx-tree__item .nx-tree__item:last-child .nx-tree__item:last-child
            .nx-tree__collapse-label`,
        input2Selector = `${collapseControlSelector2} input`,
        [tree, collapseControl1, collapseControl2, collapseInput2] = await Promise.all([
          browser.$(collapsibleMultiTopExampleSelector),
          browser.$(collapseControlSelector1),
          browser.$(collapseControlSelector2),
          browser.$(input2Selector)
        ]);

    await collapseControl1.scrollIntoView({ block: 'center' });
    await collapseControl1.click();
    await collapseControl2.click();
    await browser.execute(function(el) {
      el.blur();
    }, collapseInput2);

    await simpleTest(collapsibleExampleSelector)();
  });

  it('looks right when a collapse control is focused',
      focusTest(collapsibleExampleSelector, firstCollapseControlSelector));

  it('looks right when a collapse control is clicked',
      clickTest(collapsibleExampleSelector, firstCollapseControlSelector));
});
