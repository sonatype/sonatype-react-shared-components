/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxTree from '../NxTree';
import NxTreeItem from '../NxTreeItem';
import NxTreeItemLabel from '../NxTreeItemLabel';
import NxTreeStatefulItem from '../stateful/NxTreeStatefulItem';

describe('NxTree', function() {
  const quickRender = rtlRender(NxTree, {}),
      renderEl = rtlRenderElement(NxTree, {});

  it('renders a <ul> with role=tree as the top-level element', function() {
    const view = quickRender();

    expect(view.getByRole('tree')).toBe(view.container.firstElementChild);
    expect(view.container.firstElementChild!.tagName).toBe('UL');
  });

  it('renders any subtrees with a role of group', function() {
    const view = render(
      <NxTree>
        <NxTree.Item>
          <NxTree.ItemLabel>Foo</NxTree.ItemLabel>
          <NxTree />
        </NxTree.Item>
      </NxTree>
        ),
        tree = view.getByRole('tree'),
        subtree = view.getByRole('group');

    expect(subtree).toBeInTheDocument();
    expect(tree).toContainElement(subtree);
  });

  it('adds specified classNames to the top-level element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
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

  it('allows the a11y name of the top-level element to be set via aria-label or aria-labelledby', function() {
    render(<div id="label">bar</div>);

    const elWithNoLabel = renderEl(),
        elWithLabel = renderEl({ 'aria-label': 'foo' }),
        elWithLabelledBy = renderEl({ 'aria-labelledby': 'label' });

    expect(elWithNoLabel).not.toHaveAccessibleName();
    expect(elWithLabel).toHaveAccessibleName('foo');
    expect(elWithLabelledBy).toHaveAccessibleName('bar');
  });
});

describe('NxTree.ItemLabel', function() {
  it('is NxTreeItemLabel', function() {
    expect(NxTree.ItemLabel).toBe(NxTreeItemLabel);
  });
});

describe('NxTree.Item', function() {
  it('is NxTreeItem', function() {
    expect(NxTree.Item).toBe(NxTreeItem);
  });
});

describe('NxTree.StatefulItem', function() {
  it('is NxTreeStatefulItem', function() {
    expect(NxTree.StatefulItem).toBe(NxTreeStatefulItem);
  });
});

// NOTE keyboard navigation is tested in functional tests
