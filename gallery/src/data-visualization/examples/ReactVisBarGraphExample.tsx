/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { selectableColorClasses } from '@sonatype/react-shared-components';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries,
  Hint, VerticalBarSeriesPoint } from 'react-vis';
import '../ReactVis.scss';

export default function ReactVisBarGraphExample() {
  const data: VerticalBarSeriesPoint[] = [
    {x: 'Q1', y: 2.8},
    {x: 'Q2', y: 3.2},
    {x: 'Q3', y: 2.5},
    {x: 'Q4', y: 3.5}
  ];

  const [hintValue, setHintValue] = useState<VerticalBarSeriesPoint | null>(null);

  return (
    <XYPlot xType="ordinal" width={600} height={300} onMouseLeave={() => setHintValue(null)}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <VerticalBarSeries data={data}
                         barWidth={0.3}
                         onNearestX={v => setHintValue(v)}
                         className={`nx-graph-shape-fill-dark ${selectableColorClasses[0]}`}
      />
      {hintValue && <Hint value={hintValue} />}
      <XAxis />
      <YAxis tickFormat={val => `$${val}`} title="Revenue (in millions)"/>
    </XYPlot>
  );
}
