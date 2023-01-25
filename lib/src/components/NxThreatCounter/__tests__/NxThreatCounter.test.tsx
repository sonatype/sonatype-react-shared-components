/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RenderResult } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxThreatCounter, { Props } from '../NxThreatCounter';

// NOTE: <dl> and friends have no roles, so none of this test can follow RTL best practices
describe('NxThreatCounter', function() {
  const quickRender = rtlRender<Props>(NxThreatCounter, {}),
      renderEl = rtlRenderElement<Props>(NxThreatCounter, {});

  function getCounter(view: RenderResult, name: string) {
    return view.getByText((_, e) =>
      !!(e?.parentElement?.tagName === 'DL' && e?.textContent?.toLowerCase()?.includes(name)));
  }

  it('renders nothing if all six indicators are undefined', function() {
    expect(renderEl()).not.toBeInTheDocument();
  });

  it('renders nothing if all six indicators are null', function() {
    const el = renderEl({
      criticalCount: null,
      severeCount: null,
      moderateCount: null,
      lowCount: null,
      noneCount: null,
      unspecifiedCount: null
    });
    expect(el).not.toBeInTheDocument();
  });

  it('renders a <dl> if at least one count is specified', function() {
    const el = renderEl({criticalCount: 0});
    expect(el).toBeInTheDocument();
    expect(el!.tagName).toBe('DL');
  });

  it('renders a count with a critical label when criticalCount is specified', function() {
    const view = quickRender({criticalCount: 0}),
        counter = getCounter(view, 'critical');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('renders a count with a severe label when severeCount is specified', function() {
    const view = quickRender({severeCount: 0}),
        counter = getCounter(view, 'severe');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('renders a count with a moderate label when moderateCount is specified', function() {
    const view = quickRender({moderateCount: 0}),
        counter = getCounter(view, 'moderate');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('renders a count with a low label when lowCount is specified', function() {
    const view = quickRender({lowCount: 0}),
        counter = getCounter(view, 'low');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('renders a count with a none label when noneCount is specified', function() {
    const view = quickRender({noneCount: 0}),
        counter = getCounter(view, 'none');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('renders a count with a unspecified label when unspecifiedCount is specified', function() {
    const view = quickRender({unspecifiedCount: 0}),
        counter = getCounter(view, 'unspecified');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
  });

  it('renders all six indicators', function() {
    const view = quickRender({
      criticalCount: 66,
      severeCount: 55,
      moderateCount: 44,
      lowCount: 33,
      noneCount: 22,
      unspecifiedCount: 42
    });
    const criticalCount = getCounter(view, 'critical'),
        severeCount = getCounter(view, 'severe'),
        moderateCount = getCounter(view, 'moderate'),
        lowCount = getCounter(view, 'low'),
        noneCount = getCounter(view, 'none'),
        unspecifiedCount = getCounter(view, 'unspecified');

    expect(criticalCount).toHaveTextContent('66');
    expect(severeCount).toHaveTextContent('55');
    expect(moderateCount).toHaveTextContent('44');
    expect(lowCount).toHaveTextContent('33');
    expect(noneCount).toHaveTextContent('22');
    expect(unspecifiedCount).toHaveTextContent('42');
  });

  it('adds specified classes and attributes to the top-level element', function() {
    const el = renderEl({ criticalCount: 0, id: 'foo', className: 'bar', lang: 'en' }),
        defaultEl = renderEl({ criticalCount: 0 })!;

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
    expect(el).toHaveClass('bar');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  // layout prop only affects visuals
});
