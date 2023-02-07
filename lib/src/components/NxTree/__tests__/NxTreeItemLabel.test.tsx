/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxTree from '../NxTree';
import { ItemLabelProps as Props, TreeKeyNavContextType } from '../types';
import TreeKeyNavContext from '../TreeKeyNavContext';

const keyNavContext: TreeKeyNavContextType = {
  focusedChild: null,
  focusParent: () => {},
  focusPrev: () => {},
  focusNext: () => {},
  focusFirst: () => {},
  focusLast: () => {},
  navigationDirection: 'down',
  setNavigationDirection: () => {},
  getTreeRoot: () => null
};
function getTreeItemLabel(extraProps?: Props) {
  return (
    <TreeKeyNavContext.Provider value={keyNavContext}>
      <NxTree.ItemLabel { ...extraProps } />
    </TreeKeyNavContext.Provider>
  );
}

const quickRender = rtlRender(getTreeItemLabel, {}),
    renderEl = rtlRenderElement(getTreeItemLabel, {});

describe('NxTree.ItemLabel', function() {
  it('adds specified classes and attrs to the top-level element', function() {
    const el = renderEl({ className: 'foo', lang: 'en-US' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attrs to the top-level element', function() {
    const el = renderEl({ id: 'foo', lang: 'en-US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('sets a random id on the span if none is provided', function() {
    const { container, rerender } = quickRender(),
        firstItemLabel = container.firstElementChild!,
        firstItemLabelId = firstItemLabel.getAttribute('id');

    rerender(
      <TreeKeyNavContext.Provider value={keyNavContext}>
        <NxTree.ItemLabel />
      </TreeKeyNavContext.Provider>
    );

    const secondItemLabel = container.firstElementChild!,
        secondItemLabelId = secondItemLabel.getAttribute('id');

    expect(firstItemLabel).toHaveAttribute('id');
    expect(secondItemLabel).toHaveAttribute('id');
    expect(firstItemLabelId).not.toBe(secondItemLabelId);
  });

  it('renders text content of the child element', function() {
    const el = renderEl({ children: <span>foo</span> });
    expect(el).toHaveTextContent('foo');
  });
});
