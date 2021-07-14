/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint-disable no-console */
import { NxButton, NxLoadingSpinner } from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { RadialChart } from 'react-vis';
import { randomNumberGenerator } from '../util/jsUtil';
import './ReactVis.scss';

interface ChartData {
  angle: number,
  color: string,
  label: string
}

export default function ReactVisDonutChartExample() {
  const data: ChartData[] = [
    {angle: 1, color: 'red', label: 'Severe'},
    {angle: 5, color: 'yellow', label: 'Moderate'},
    {angle: 2, color: 'green', label: 'Low'}
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
    tempData.push({angle: randomNumberGenerator(1, 5, 0), color: 'red', label: 'Severe'});
    tempData.push({angle: randomNumberGenerator(1, 5, 0), color: 'green', label: 'None'});
    tempData.push({angle: randomNumberGenerator(1, 5, 0), color: 'yellow', label: 'Moderate'});
    setChartData(tempData);
  };

  return (
    <>
      {
        isLoading ? <NxLoadingSpinner /> :
        <>
          {chartData &&
            <RadialChart animation
                         data={chartData}
                         height={400}
                         width={400}
                         innerRadius={100}
                         radius={140}
                         showLabels
                         colorType="literal"
                         labelsRadiusMultiplier={1.25}
            />
          }
          <NxButton onClick={updateData}>Update Data</NxButton>
        </>
      }
    </>
  );
}
