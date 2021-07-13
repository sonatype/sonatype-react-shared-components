/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { RadialChart } from 'react-vis';
import './ReactVis.scss';

export default function ReactVisDonutChartExample() {
  const data = [
    {angle: 1, label: 'Critical', color: 'red'},
    {angle: 5, label: 'Moderate', color: 'yellow'},
    {angle: 2, label: 'Severe', color: 'green'}
  ];

  return (
    <RadialChart data={data}
                 height={400}
                 width={400}
                 innerRadius={100}
                 radius={140}
                 showLabels
                 colorType="literal"
                 labelsRadiusMultiplier={1.35}
                 labelsStyle={{color: 'red'}}
    />
  );
}
