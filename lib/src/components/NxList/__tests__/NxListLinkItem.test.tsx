/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxList from '../NxList';
import { NxListLinkItemProps } from '../types';

describe('NxList.LinkItem', function() {
  const minimalProps: NxListLinkItemProps & RefAttributes<HTMLLIElement> = {
        href: 'www.sonatype.com'
      },
      quickRender = rtlRender(NxList.LinkItem, minimalProps),
      renderEl = rtlRenderElement(NxList.LinkItem, minimalProps);

  it('renders a list containing an anchor', function() {
    const view = quickRender(),
        listItem = view.getByRole('listitem'),
        anchor = view.getByRole('link');

    expect(listItem).toBeInTheDocument();
    expect(anchor).toBeInTheDocument();
    expect(listItem).toContainElement(anchor);
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

  it('sets the specified classnames to the anchor in addition to the defaults ' +
  'when anchorClassName prop is provided', function() {
    const anchor = quickRender({ anchorClassName: 'boo' }).getByRole('link'),
        defaultAnchor = quickRender().getByRole('link');

    expect(anchor).toHaveClass('boo');

    for (const cls of Array.from(defaultAnchor.classList)) {
      expect(anchor).toHaveClass(cls);
    }
  });

  it('sets the specified attrs to the anchor when anchorAttributes prop is provided', function() {
    const anchorAttributes = { id: 'boo', hrefLang: 'en' },
        anchor = quickRender({ anchorAttributes }).getByRole('link');

    expect(anchor).toHaveAttribute('id', 'boo');
    expect(anchor).toHaveAttribute('hrefLang', 'en');
  });

  it('sets aria-disabled="true" and does not pass href value on the anchor ' +
  'iff disabled prop is set to true', function() {
    const renderAndGetAnchor = (props?: Partial<NxListLinkItemProps>) => quickRender(props).getByRole('link');

    expect(renderAndGetAnchor()).toHaveAttribute('href', 'www.sonatype.com');
    expect(renderAndGetAnchor()).toHaveAttribute('aria-disabled', 'false');

    expect(renderAndGetAnchor({ disabled: false })).toHaveAttribute('href', 'www.sonatype.com');
    expect(renderAndGetAnchor({ disabled: false })).toHaveAttribute('aria-disabled', 'false');

    expect(renderAndGetAnchor({ disabled: null })).toHaveAttribute('href', 'www.sonatype.com');
    expect(renderAndGetAnchor({ disabled: null })).toHaveAttribute('aria-disabled', 'false');

    expect(renderAndGetAnchor({ disabled: true })).not.toHaveAttribute('href');
    expect(renderAndGetAnchor({ disabled: true })).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets aria-selected and aria-current="true" to the list ' +
    'iff selected prop is set to true', function() {
    const renderAndGetList = (props?: Partial<NxListLinkItemProps>) => quickRender(props).getByRole('listitem');

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
        anchor = view.getByRole('link'),
        childrenText = view.getByTestId('text'),
        childrenSubtext = view.getByTestId('subtext');

    expect(anchor).toBeInTheDocument();
    expect(anchor).toContainElement(childrenText);
    expect(childrenText).toHaveTextContent('Test Item 1 Text');
    expect(anchor).toContainElement(childrenSubtext);
    expect(childrenSubtext).toHaveTextContent('Test Item 1 Subtext');
  });
});
