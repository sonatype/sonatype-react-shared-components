/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';

import NxSmallTag, { Props } from '../NxSmallTag';

import { rtlRenderElement } from '../../../__testutils__/rtlUtils';

describe('NxSmallTag', function() {
  type PropsWithRef = Props & RefAttributes<HTMLLabelElement>;
  const renderEl = rtlRenderElement<PropsWithRef>(NxSmallTag, { children: 'small tag'});

  it('sets ref on label element', function() {
    const ref = React.createRef<HTMLLabelElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('adds specified classNames to the label element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds specified attrs to the label element', function() {
    const el = renderEl({ id: 'foo', lang: 'en-US' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en-US');
  });

  it('renders the supplied text', function() {
    const el = renderEl({ children: 'small tag text' });

    expect(el).toHaveTextContent('small tag text');
  });

});
