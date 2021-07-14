/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxButton, NxLoadingSpinner } from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries } from 'react-vis';
import { randomNumberGenerator } from '../util/jsUtil';
import './ReactVis.scss';

interface ChartData {
  x: string,
  y: number
}

export default function ReactVisBarGraphExample() {
  const data: ChartData[] = [
    {x: 'Q1', y: 2.8},
    {x: 'Q2', y: 3.2},
    {x: 'Q3', y: 2.5},
    {x: 'Q4', y: 3.5}
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
    for (let i = 1; i < 5; i++) {
      tempData.push({x: `Q${i}`, y: randomNumberGenerator(0, 5, 1)});
    }
    setChartData(tempData);
  };

  return (
    <>
      {
        isLoading ? <NxLoadingSpinner /> :
        <>
          {chartData &&
            <XYPlot xType="ordinal" width={600} height={300} animation>
              <VerticalGridLines />
              <HorizontalGridLines />
              <VerticalBarSeries data={chartData} barWidth={0.3}/>
              <XAxis />
              <YAxis tickFormat={val => `$${val}`} tickSize={4} marginRight={10} title="Revenue (in millions)"/>
            </XYPlot>
          }
          <NxButton onClick={updateData}>Update Data</NxButton>
        </>
      }
    </>
  );
}
