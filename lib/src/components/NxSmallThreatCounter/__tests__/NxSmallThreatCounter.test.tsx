/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement, runTimers } from '../../../__testutils__/rtlUtils';

import NxSmallThreatCounter, { Props } from '../NxSmallThreatCounter';

describe('NxSmallThreatCounter', function() {
  const quickRender = rtlRender<Props>(NxSmallThreatCounter, {}),
      renderEl = rtlRenderElement<Props>(NxSmallThreatCounter, {});

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

  it('adds specified classNames to the element in addition to the defaults', function() {
    const el = renderEl({ criticalCount: 0, className: 'test-class' }),
        defaultEl = renderEl({ criticalCount: 0 })!;

    expect(el).toHaveClass('test-class');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds specified attrs', function() {
    const el = renderEl({ criticalCount: 0, id: 'test-id', lang: 'en' });

    expect(el).toHaveAttribute('id', 'test-id');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('renders a counter with an accessible name of Critical when criticalCount is specified', async function() {
    const component = quickRender({criticalCount: 0});

    await runTimers();

    const counter = component.getByTitle('Critical');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('0');
    expect(counter).toHaveAccessibleName('Critical');
  });

  it('renders a counter with an accessible name of Severe when severeCount is specified', async function() {
    const component = quickRender({severeCount: 1});

    await runTimers();

    const counter = component.getByTitle('Severe');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('1');
    expect(counter).toHaveAccessibleName('Severe');
  });

  it('renders a counter with an accessible name of Moderate when moderateCount is specified', async function() {
    const component = quickRender({moderateCount: 2});

    await runTimers();

    const counter = component.getByTitle('Moderate');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('2');
    expect(counter).toHaveAccessibleName('Moderate');
  });

  it('renders a counter with an accessible name of Low when lowCount is specified', async function() {
    const component = quickRender({lowCount: 3});

    await runTimers();

    const counter = component.getByTitle('Low');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('3');
    expect(counter).toHaveAccessibleName('Low');
  });

  it('renders a counter with an accessible name of None when noneCount is specified', async function() {
    const component = quickRender({noneCount: 4});

    await runTimers();

    const counter = component.getByTitle('None');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('4');
    expect(counter).toHaveAccessibleName('None');
  });

  it('renders a counter with an accessible name of Unspecified when unspecifiedCount is specified', async function() {
    const component = quickRender({unspecifiedCount: 5});

    await runTimers();

    const counter = component.getByTitle('Unspecified');

    expect(counter).toBeInTheDocument();
    expect(counter).toHaveTextContent('5');
    expect(counter).toHaveAccessibleName('Unspecified');
  });

  it('renders all six indicators', async function() {
    const component = quickRender({
      criticalCount: 66,
      severeCount: 55,
      moderateCount: 44,
      lowCount: 33,
      noneCount: 22,
      unspecifiedCount: 11
    });

    await runTimers();

    const criticalCounter = component.getByTitle('Critical'),
        severeCounter = component.getByTitle('Severe'),
        moderateCounter = component.getByTitle('Moderate'),
        lowCounter = component.getByTitle('Low'),
        noneCounter = component.getByTitle('None'),
        unspecifiedCounter = component.getByTitle('Unspecified');

    expect(criticalCounter).toHaveTextContent('66');
    expect(severeCounter).toHaveTextContent('55');
    expect(moderateCounter).toHaveTextContent('44');
    expect(lowCounter).toHaveTextContent('33');
    expect(noneCounter).toHaveTextContent('22');
    expect(unspecifiedCounter).toHaveTextContent('11');
  });

  it('displays maxDigits\' nines and a plus sign for any counts that go over the max when maxDigits is specified. ' +
    'default is three digits', async function() {
    const twoDigitMaxComponent = quickRender({ criticalCount: 100000, maxDigits: 2 }),
        threeDigitDefaultComponent = quickRender({ moderateCount: 10000 });

    await runTimers();

    const twoDigitMaxCounter = twoDigitMaxComponent.getByTitle('Critical'),
        threeDigitDefaultCounter = threeDigitDefaultComponent.getByTitle('Moderate');

    expect(twoDigitMaxCounter).toHaveTextContent('99+');
    expect(threeDigitDefaultCounter).toHaveTextContent('999+');
  });

  it('does not cut off the displayed number when maxDigits is Infinity', async function() {
    const component = quickRender({
      criticalCount: 34592384579138,
      severeCount: 1,
      maxDigits: Infinity
    });

    await runTimers();

    const criticalCounter = component.getByTitle('Critical'),
        severeCounter = component.getByTitle('Severe');

    expect(criticalCounter).toBeInTheDocument();
    expect(criticalCounter).toHaveTextContent('34592384579138');
    expect(severeCounter).toBeInTheDocument();
    expect(severeCounter).toHaveTextContent('1');
  });
});
