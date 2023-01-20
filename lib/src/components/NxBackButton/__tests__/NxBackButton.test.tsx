/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import { within } from '@testing-library/react';

import NxBackButton, { Props } from '../NxBackButton';

describe('NxBackButton', function() {
  const minimalProps = {
        href: '/foo'
      },
      quickRender = rtlRender<Props>(NxBackButton, minimalProps),
      renderEl = rtlRenderElement<Props>(NxBackButton, minimalProps);

  it('renders a child with the role of link', function() {
    const el = renderEl()!;
    expect(within(el).getByRole('link')).toBeInTheDocument();
  });

  it('renders "Back" as default text', function() {
    expect(renderEl()!).toHaveTextContent('Back');
  });

  it('overrides the default text if text prop is provided', function() {
    const el = renderEl({ text: 'foo' })!;
    expect(el).toHaveTextContent('foo');
    expect(el).not.toHaveTextContent('Back');
  });

  it('renders text based on the targetPageTitle if it is provided', function() {
    const el = renderEl({ targetPageTitle: 'foo' })!;
    expect(el).toHaveTextContent('Back to foo');
  });

  it('ignores the targetPageTitle when the text prop is provided', function() {
    const el = renderEl({ targetPageTitle: 'foo', text: 'bar'});
    expect(el).toHaveTextContent('bar');
    expect(el).not.toHaveTextContent('foo');
  });

  it('renders an accessible name according to visible text', function() {
    expect(quickRender().getByRole('link')).toHaveAccessibleName('Back');
    expect(quickRender({ targetPageTitle: 'foo'}).getByRole('link')).toHaveAccessibleName('Back to foo');
    expect(quickRender({ text: 'bar' }).getByRole('link')).toHaveAccessibleName('bar');
    expect(quickRender({ targetPageTitle: 'foo', text: 'bar'}).getByRole('link')).toHaveAccessibleName('bar');
  });
});

