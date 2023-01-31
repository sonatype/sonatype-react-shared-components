/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxList from '../NxList';

describe('NxList.Item', function() {
  const quickRender = rtlRender(NxList.Item, {}),
      renderEl = rtlRenderElement(NxList.Item, {});

  it('sets the specified classnames in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('sets the specified attrs', function() {
    const el = renderEl({ id: 'foo', lang: 'en' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('sets a ref to the element', function() {
    const ref = React.createRef<HTMLLIElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('renders children correctly', function() {
    const children =
        [
          <NxList.Text data-testid="text" key="1">Test Item 1 Text</NxList.Text>,
          <NxList.Subtext data-testid="subtext" key="2">Test Item 1 Subtext</NxList.Subtext>
        ],
        view = quickRender({ children }),
        el = view.getByRole('listitem'),
        childrenText = view.getByTestId('text'),
        childrenSubtext = view.getByTestId('subtext');

    expect(el).toBeInTheDocument();
    expect(el).toContainElement(childrenText);
    expect(childrenText).toHaveTextContent('Test Item 1 Text');
    expect(el).toContainElement(childrenSubtext);
    expect(childrenSubtext).toHaveTextContent('Test Item 1 Subtext');
  });
});
