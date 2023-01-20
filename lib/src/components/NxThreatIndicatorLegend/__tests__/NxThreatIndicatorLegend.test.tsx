/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxThreatIndicatorLegend from '../NxThreatIndicatorLegend';

describe('NxThreatIndicatorLegend', function() {
  const quickRender = rtlRender(NxThreatIndicatorLegend, {}),
      renderEl = rtlRenderElement(NxThreatIndicatorLegend, {});

  const threatLevelCategories = {
    critical: true,
    severe: true,
    moderate: true,
    low: true,
    none: true,
    unspecified: true
  };

  it('fowards a ref to the top level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref: ref, ...threatLevelCategories });

    expect(ref.current).toBe(el);
  });

  it('adds specified classes and attributes to top-level element', function() {
    const defaultEl = renderEl(threatLevelCategories)!,
        el = renderEl({ className: 'bar', id: 'foo', lang: 'en', ...threatLevelCategories })!;

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');

    expect(el).toHaveClass('bar');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('renders default legend label', function() {
    expect(quickRender(threatLevelCategories).getByText('Legend')).toBeInTheDocument();
  });

  it('renders custom label when header is provided', function() {
    const el = quickRender({ header: 'Test Test', ...threatLevelCategories });

    expect(el.getByText('Test Test')).toBeInTheDocument();
    expect(el.queryByText('Legend')).not.toBeInTheDocument();
  });

  it('renders nothing if no threat levels are provided', function() {
    const el = renderEl();
    expect(el).not.toBeInTheDocument();
  });

  it('renders nothing if all threat levels are null', function() {
    const el = renderEl({
      critical: null,
      severe: null,
      moderate: null,
      low: null,
      none: null,
      unspecified: null
    });
    expect(el).not.toBeInTheDocument();
  });

  it('renders correct legend items', function() {
    const el = quickRender({ critical: true,
      severe: true,
      low: true,
      none: true
    });

    expect(el.getByText('Low')).toBeInTheDocument();
    expect(el.getByText('Severe')).toBeInTheDocument();
    expect(el.getByText('Critical')).toBeInTheDocument();
    expect(el.getByText('None')).toBeInTheDocument();
    expect(el.queryByText('Moderate')).not.toBeInTheDocument();
    expect(el.queryByText('Unspecified')).not.toBeInTheDocument();
  });

  // vertical prop only affects visual layout
});

