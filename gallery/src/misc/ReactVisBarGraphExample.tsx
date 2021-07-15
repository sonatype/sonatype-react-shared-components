/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxButton, NxLoadingSpinner } from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries,
  Hint, VerticalBarSeriesPoint } from 'react-vis';
import { randomNumberGenerator } from '../util/jsUtil';
import './ReactVis.scss';

export default function ReactVisBarGraphExample() {
  const data: VerticalBarSeriesPoint[] = [
    {x: 'Q1', y: 2.8},
    {x: 'Q2', y: 3.2},
    {x: 'Q3', y: 2.5},
    {x: 'Q4', y: 3.5}
  ];

  const [chartData, setChartData] = useState<VerticalBarSeriesPoint[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hintValue, setHintValue] = useState<VerticalBarSeriesPoint | null>(null);

  // Simulate an async data load task
  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setIsLoading(false);
    }, 3000);
  }, []);

  const updateData = () => {
    const tempData: VerticalBarSeriesPoint[] = [];
    for (let i = 1; i < 5; i++) {
      tempData.push({x: `Q${i}`, y: randomNumberGenerator(0, 5, 1)});
    }
    setChartData(tempData);
    setHintValue(null);
  };

  return (
    <>
      {
        isLoading ? <NxLoadingSpinner /> :
        <>
          {
            chartData &&
            <XYPlot xType="ordinal" width={600} height={300} animation onMouseLeave={() => setHintValue(null)}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <VerticalBarSeries data={chartData}
                                 barWidth={0.3}
                                 onNearestXY={v => setHintValue(v)}
              />
              {hintValue && <Hint value={hintValue} />}
              <XAxis />
              <YAxis tickFormat={val => `$${val}`} title="Revenue (in millions)"/>
            </XYPlot>
          }
          <NxButton onClick={updateData}>Update Data</NxButton>
        </>
      }
    </>
  );
}
