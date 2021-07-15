/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxButton, NxLoadingSpinner } from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries,
  Hint, LineSeriesPoint, MarkSeries, MarkSeriesPoint } from 'react-vis';
import { randomNumberGenerator } from '../util/jsUtil';
import './ReactVis.scss';

export default function ReactVisLineGraphExample() {
  const data: LineSeriesPoint[] = [
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

  const data1: LineSeriesPoint[] = [
    {x: 0, y: 4},
    {x: 1, y: 2},
    {x: 2, y: 8},
    {x: 3, y: 6},
    {x: 4, y: 7},
    {x: 5, y: 7},
    {x: 6, y: 5},
    {x: 7, y: 8},
    {x: 8, y: 1},
    {x: 9, y: 7}
  ];

  const [chartData, setChartData] = useState<LineSeriesPoint[] | null>(null);
  const [chartData1, setChartData1] = useState<LineSeriesPoint[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hintValue, setHintValue] = useState<MarkSeriesPoint | null>(null);

  // Simulate an async data load task
  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setChartData1(data1);
      setIsLoading(false);
    }, 3000);
  }, []);

  const updateData = () => {
    const tempData: LineSeriesPoint[] = [];
    const tempData1: LineSeriesPoint[] = [];
    for (let i = 0; i < 9; i++) {
      tempData.push({x: i, y: randomNumberGenerator(0, 10, 1)});
      tempData1.push({x: i, y: randomNumberGenerator(0, 10, 1)});
    }
    setChartData(tempData);
    setChartData1(tempData1);
    setHintValue(null);
  };

  return (
    <>
      {
        isLoading ? <NxLoadingSpinner /> :
        <>
          {
            chartData && chartData1 &&
            <XYPlot width={400} height={300} animation onMouseLeave={() => setHintValue(null)}>
              <XAxis/>
              <YAxis/>
              <HorizontalGridLines />
              <VerticalGridLines />
              <LineSeries data={chartData}/>
              <LineSeries data={chartData1}/>
              <MarkSeries data={[...chartData, ...chartData1]} onNearestXY={v => setHintValue(v)}/>
              {hintValue && <Hint value={hintValue} />}
            </XYPlot>
          }
          <NxButton onClick={updateData}>Update Data</NxButton>
        </>
      }
    </>
  );
}
