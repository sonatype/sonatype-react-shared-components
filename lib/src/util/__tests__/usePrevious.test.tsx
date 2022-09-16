/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender } from '../../__testutils__/rtlUtils';
import usePrevious from '../usePrevious';

describe('usePrevious', function() {
  type FixtureProps = { value: string; otherProp?: number };

  function Fixture({ value }: FixtureProps) {
    const prevValue = usePrevious(value);

    return (
      <>
        <span data-testid="value">{value}</span>
        <span data-testid="prevValue">{prevValue}</span>
        <span data-testid="prevValueIsDefined">{(typeof prevValue !== 'undefined').toString()}</span>
      </>
    );
  }

  const quickRender = rtlRender<FixtureProps>(Fixture, { value: '' });

  it('initially returns undefined', function() {
    expect(quickRender().getByTestId('prevValueIsDefined')).toHaveTextContent('false');
  });

  it('returns the initial value on a second render', function() {
    const { rerender, getByTestId } = quickRender({ value: 'a' });

    rerender(<Fixture value="b" />);

    expect(getByTestId('prevValue')).toHaveTextContent('a');
  });

  it('returns the second value on a third distinct render', function() {
    const { rerender, getByTestId } = quickRender({ value: 'a' });

    rerender(<Fixture value="b" />);
    rerender(<Fixture value="c" />);

    expect(getByTestId('prevValue')).toHaveTextContent('b');
  });

  it('still returns the previous distinct value if only other props change', function() {
    const { rerender, getByTestId } = quickRender({ value: 'a', otherProp: 1 });

    rerender(<Fixture value="b" otherProp={1} />);
    rerender(<Fixture value="b" otherProp={2} />);

    expect(getByTestId('prevValue')).toHaveTextContent('a');
  });

  it('still returns undefined on successive renders with the original value', function() {
    const { rerender, getByTestId } = quickRender({ value: 'a', otherProp: 1 });

    rerender(<Fixture value="a" otherProp={2} />);

    expect(getByTestId('prevValueIsDefined')).toHaveTextContent('false');

    rerender(<Fixture value="b" otherProp={2} />);

    expect(getByTestId('prevValue')).toHaveTextContent('a');
  });
});
