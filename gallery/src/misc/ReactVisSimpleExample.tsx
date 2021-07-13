/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis';
import './ReactVis.scss';

export default function ReactVisSimpleExample() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  return (
    <XYPlot width={400} height={300}>
      <XAxis/>
      <YAxis/>
      <HorizontalGridLines />
      <VerticalGridLines />
      <LineSeries data={data} />
    </XYPlot>
  );
}
