/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxDonutChart from '../NxDonutChart';

describe('NxDonutChart', function() {
  const minimalProps = {
    percent: 90,
    outerRadius: 30,
    innerRadius: 10,
    fillColors: ['#97cbed', '#006bbf']
  };
  const getShallowComponent = enzymeUtils.getShallowComponent(NxDonutChart, minimalProps);

  it('renders an svg with the expected properties', function() {
    const diameter = minimalProps.outerRadius * 2;

    expect(getShallowComponent()).toMatchSelector('svg');
    expect(getShallowComponent()).toHaveProp('width', diameter);
    expect(getShallowComponent()).toHaveProp('height', diameter);
  });

  it('renders circles with the expected properties', function() {
    const decimal = minimalProps.percent / 100;
    const strokeWidth = minimalProps.outerRadius - minimalProps.innerRadius;
    const r = minimalProps.innerRadius + strokeWidth / 2;
    const circumference = 2 * Math.PI * r;
    const strokeDasharray = [decimal * circumference, (1.0 - decimal) * circumference];
    const strokeDashoffset = (0.25 * circumference) - (1.0 - decimal) * circumference;

    const circles = getShallowComponent().find('circle');

    expect(circles.length).toBe(2);
    circles.forEach(circle => {
      expect(circle).toHaveProp('cx', minimalProps.outerRadius);
      expect(circle).toHaveProp('cy', minimalProps.outerRadius);
      expect(circle).toHaveProp('strokeWidth', strokeWidth);
      expect(circle).toHaveProp('r', r);
      expect(circle).toHaveProp('fill', 'transparent');
    });
    // First circle shows the other percent
    expect(circles.at(0)).toHaveProp('stroke', minimalProps.fillColors[0]);
    // Second circle shows the percent
    expect(circles.at(1)).toHaveProp('stroke', minimalProps.fillColors[1]);
    expect(circles.at(1)).toHaveProp('strokeDasharray', strokeDasharray.join(' '));
    expect(circles.at(1)).toHaveProp('strokeDashoffset', strokeDashoffset);
  });
});
