/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries } from 'react-vis';
import './ReactVis.scss';

export default function ReactVisBarGraphExample() {
  const data = [
    {x: 'Q1', y: 2.8},
    {x: 'Q2', y: 3.2},
    {x: 'Q3', y: 2.5},
    {x: 'Q4', y: 3.5}
  ];
  return (
    <XYPlot xType="ordinal" width={600} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <VerticalBarSeries data={data} barWidth={0.3}/>
      <XAxis />
      <YAxis tickFormat={val => `$${val}`} tickSize={4} marginRight={10} title="Revenue (in millions)"/>
    </XYPlot>
  );
}
