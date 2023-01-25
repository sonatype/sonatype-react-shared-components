/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxPolicyViolationIndicator from '../NxPolicyViolationIndicator';

describe('NxPolicyViolationIndicator', function() {
  const quickRender = rtlRender(NxPolicyViolationIndicator, {}),
      renderEl = rtlRenderElement(NxPolicyViolationIndicator, {});

  it('adds specified classnames in addition to the defaults', function() {
    const defaultEl = renderEl()!,
        el = renderEl({ className: 'foo' })!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds additional attributes to the top-level element', function() {
    const el = renderEl({ id: 'foo', lang: 'en' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('applies a ref to the top level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ref: ref})!;

    expect(ref.current).toBe(el);
  });

  it('sets the text according to threatLevelCategory if no text is provided', function() {
    expect(renderEl({ threatLevelCategory: 'none' })).toHaveTextContent('none');
    expect(renderEl({ threatLevelCategory: 'moderate' })).toHaveTextContent('moderate');
  });

  it('overrides the default threatLevelCategory text if text is provided', function() {
    const el = renderEl({ threatLevelCategory: 'low', children: 'Foo' })!;

    expect(el).not.toHaveTextContent('low');
    expect(el).toHaveTextContent('Foo');
  });

  it('sets text content to unspecified if not defined', function() {
    const unspecifiedEl = renderEl()!;
    expect(unspecifiedEl).toHaveTextContent('unspecified');
  });

  it('sets the text content to the the threat level category corresponding to the provided policyThreatLevel',
      function() {
        expect(renderEl({ policyThreatLevel: 0})!).toHaveTextContent('none');
        expect(renderEl({ policyThreatLevel: 1})!).toHaveTextContent('low');
        expect(renderEl({ policyThreatLevel: 3})!).toHaveTextContent('moderate');
        expect(renderEl({ policyThreatLevel: 5})!).toHaveTextContent('severe');
        expect(renderEl({ policyThreatLevel: 9})!).toHaveTextContent('critical');
        expect(renderEl({ policyThreatLevel: 0})!).toHaveTextContent('none');
        expect(renderEl()!).toHaveTextContent('unspecified');
      });

  it('renders an indicator according to threatLevelCategory over policyThreatNumber if both are provided', function() {
    expect(renderEl({ policyThreatLevel: 9, threatLevelCategory: 'low' })).toHaveTextContent('low');
  });

  it('adds aria-label to icon', function() {
    expect(quickRender().getByRole('img')).toHaveAccessibleName('threat level unspecified');
    expect(quickRender({ threatLevelCategory: 'low' }).getByRole('img')).toHaveAccessibleName('threat level low');
    expect(quickRender({ threatLevelCategory: 'severe'}).getByRole('img')).toHaveAccessibleName('threat level severe');
  });
});
