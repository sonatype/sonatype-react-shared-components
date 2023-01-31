/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxList from '../NxList';

describe('NxList.Subtext', function() {
  const quickRender = rtlRender(NxList.Subtext, {}),
      renderEl = rtlRenderElement(NxList.Subtext, {});

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
    const ref = React.createRef<HTMLSpanElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('renders children correctly', function() {
    const children = 'Book',
        view = quickRender({ children }),
        el = view.container.firstElementChild;

    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent('Book');
  });
});
