/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxMeter, { Props } from '../NxMeter';

describe('NxMeter', function() {
  const minimalProps: Props = {
        value: 1,
        children: 'foo'
      },
      quickRender = rtlRender(NxMeter, minimalProps),
      renderEl = rtlRenderElement(NxMeter, minimalProps);

  it('renders a <meter> element', function() {
    expect(renderEl()!.tagName).toBe('METER');
  });

  it('forwards its ref to the element', function() {
    const ref = React.createRef<HTMLMeterElement>(),
        el = renderEl({ ref })!;

    expect(ref.current).toBe(el);
  });

  it('adds specified attributes to the meter', function() {
    const el = renderEl({ id: 'asdf', lang: 'en' })!;

    expect(el).toHaveAttribute('id', 'asdf');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('adds specified classNames in addition to the ones it has by default', function() {
    const defaultEl = renderEl()!,
        elWithClasses = renderEl({ className: 'asdf' });

    expect(elWithClasses).toHaveClass('asdf');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(elWithClasses).toHaveClass(cls);
    }
  });

  it('populates the children within the meter', function() {
    const view = quickRender({ children: <span data-testid="foo">asdf</span> });

    expect(view.getByTestId('foo')).toBeInTheDocument();
    expect(view.container).toHaveTextContent('asdf');
  });

  it('sets the meter value from the value prop', function() {
    expect(renderEl({ value: 5 })).toHaveAttribute('value', '5');
  });

  it('sets the meter max from the max prop, defaulting to 100 if not specified', function() {
    expect(renderEl({ max: 8 })).toHaveAttribute('max', '8');
    expect(renderEl()).toHaveAttribute('max', '100');
  });
});
