/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxList from '../NxList';
import { NxListButtonItemProps } from '../types';

describe('NxList.ButtonItem', function() {
  const quickRender = rtlRender(NxList.ButtonItem, {}),
      renderEl = rtlRenderElement(NxList.ButtonItem, {});

  it('renders a listitem containing a button', function() {
    const view = quickRender(),
        listItem = view.getByRole('listitem'),
        btn = view.getByRole('button');

    expect(listItem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(listItem).toContainElement(btn);
  });

  it('sets a ref to the element', function() {
    const ref = React.createRef<HTMLLIElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('sets the specified classnames to the list in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('sets the specified attrs to the list', function() {
    const el = renderEl({ id: 'foo', lang: 'en' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('sets the specified classnames to the button in addition to the defaults ' +
    'when buttonClassName prop is provided', function() {
    const btn = quickRender({ buttonClassName: 'boo' }).getByRole('button'),
        defaultBtn = quickRender().getByRole('button');

    expect(btn).toHaveClass('boo');

    for (const cls of Array.from(defaultBtn.classList)) {
      expect(btn).toHaveClass(cls);
    }
  });

  it('sets the specified attrs to the button ' +
    'when buttonAttributes prop is provided', function() {
    const buttonAttributes = { id: 'boo', value: 'test' },
        btn = quickRender({ buttonAttributes }).getByRole('button');

    expect(btn).toHaveAttribute('id', 'boo');
    expect(btn).toHaveAttribute('value', 'test');
  });

  it('sets disabled and aria-disabled="true" to the button ' +
    'iff disabled prop is set to true', function() {
    const renderAndGetBtn = (props?: Partial<NxListButtonItemProps>) => quickRender(props).getByRole('button');

    expect(renderAndGetBtn()).toBeEnabled();
    expect(renderAndGetBtn()).toHaveAttribute('aria-disabled', 'false');

    expect(renderAndGetBtn({ disabled: false })).toBeEnabled();
    expect(renderAndGetBtn({ disabled: false })).toHaveAttribute('aria-disabled', 'false');

    expect(renderAndGetBtn({ disabled: null })).toBeEnabled();
    expect(renderAndGetBtn({ disabled: null })).toHaveAttribute('aria-disabled', 'false');

    expect(renderAndGetBtn({ disabled: true })).toBeDisabled();
    expect(renderAndGetBtn({ disabled: true })).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets aria-selected and aria-current="true" to the list ' +
    'iff selected prop is set to true', function() {
    const renderAndGetList = (props?: Partial<NxListButtonItemProps>) => quickRender(props).getByRole('listitem');

    expect(renderAndGetList()).not.toHaveAttribute('aria-selected');
    expect(renderAndGetList()).not.toHaveAttribute('aria-current');

    expect(renderAndGetList({ selected: false })).toHaveAttribute('aria-selected', 'false');
    expect(renderAndGetList({ selected: false })).toHaveAttribute('aria-current', 'false');

    expect(renderAndGetList({ selected: null })).not.toHaveAttribute('aria-selected');
    expect(renderAndGetList({ selected: null })).not.toHaveAttribute('aria-current');

    expect(renderAndGetList({ selected: true })).toHaveAttribute('aria-selected', 'true');
    expect(renderAndGetList({ selected: true })).toHaveAttribute('aria-current', 'true');
  });

  it('renders children correctly', function() {
    const children = [
      <NxList.Text data-testid="text" key="1">Test Item 1 Text</NxList.Text>,
      <NxList.Subtext data-testid="subtext" key="2">Test Item 1 Subtext</NxList.Subtext>
        ],
        view = quickRender({ children }),
        btn = view.getByRole('button'),
        childrenText = view.getByTestId('text'),
        childrenSubtext = view.getByTestId('subtext');

    expect(btn).toBeInTheDocument();
    expect(btn).toContainElement(childrenText);
    expect(childrenText).toHaveTextContent('Test Item 1 Text');
    expect(btn).toContainElement(childrenSubtext);
    expect(childrenSubtext).toHaveTextContent('Test Item 1 Subtext');
  });
});
