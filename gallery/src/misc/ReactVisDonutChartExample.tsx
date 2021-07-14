/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint-disable no-console */
import React from 'react';
import { DiscreteColorLegend, RadialChart } from 'react-vis';
import './ReactVis.scss';

export default function ReactVisDonutChartExample() {
  const data = [
    {angle: 1, color: 'red', label: 'Severe'},
    {angle: 5, color: 'yellow', label: 'Moderate'},
    {angle: 2, color: 'green', label: 'Low'}
  ];

  const legendItems = [
    {
      title: 'Severe',
      color: 'red'
    },
    {
      title: 'Moderate',
      color: 'yellow'
    },
    {
      title: 'Low',
      color: 'green'
    }
  ];

  return (
    <RadialChart data={data}
                 height={400}
                 width={400}
                 innerRadius={100}
                 radius={140}
                 showLabels
                 colorType="literal"
                 labelsRadiusMultiplier={1.25}
                 labelsStyle={{color: 'red'}}
    >
      <DiscreteColorLegend items={legendItems} orientation="horizontal" />
    </RadialChart>
  );
}
