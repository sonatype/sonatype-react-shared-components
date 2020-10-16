/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxBinaryDonutChart from '../NxBinaryDonutChart';

describe('NxBinaryDonutChart', function() {
  const minimalProps = {
    percent: 90
  };
  const getShallowComponent = enzymeUtils.getShallowComponent(NxBinaryDonutChart, minimalProps);

  it('renders an svg with the expected properties', function() {
    expect(getShallowComponent()).toMatchSelector('svg');
    expect(getShallowComponent()).toHaveProp('viewBox', '-100 -100 200 200');
  });

  it('renders circles with the expected properties', function() {
    const strokeDasharray = [(100 - minimalProps.percent), minimalProps.percent];

    const circles = getShallowComponent().find('circle');

    expect(circles.length).toBe(2);
    circles.forEach((circle: object) => {
      expect(circle).toHaveClassName('.nx-binary-donut-chart-circle');
      expect(circle).toHaveProp('strokeWidth', 50);
      expect(circle).toHaveProp('r', 75);
    });
    expect(circles.at(1)).toHaveProp('pathLength', '100');
    expect(circles.at(1)).toHaveProp('strokeDasharray', strokeDasharray.join(' '));
  });
});
