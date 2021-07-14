/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxButton, NxLoadingSpinner } from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, LineSeries } from 'react-vis';
import { randomNumberGenerator } from '../util/jsUtil';
import './ReactVis.scss';

interface ChartData {
  x: number,
  y: number
}

export default function ReactVisLineGraphExample() {
  const data: ChartData[] = [
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

  const [chartData, setChartData] = useState<ChartData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an async data load task
  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setIsLoading(false);
    }, 3000);
  }, []);

  const updateData = () => {
    const tempData: ChartData[] = [];
    for (let i = 0; i < 9; i++) {
      tempData.push({x: i, y: randomNumberGenerator(0, 10, 1)});
    }
    setChartData(tempData);
  };

  return (
    <>
      {
        isLoading ? <NxLoadingSpinner /> :
        <>
          {chartData &&
            <XYPlot width={400} height={300} animation>
              <XAxis/>
              <YAxis/>
              <HorizontalGridLines />
              <VerticalGridLines />
              <LineSeries data={chartData} />
            </XYPlot>
          }
          <NxButton onClick={updateData}>Update Data</NxButton>
        </>
      }
    </>
  );
}
