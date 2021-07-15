/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint-disable no-console */
import { NxButton, NxLoadingSpinner } from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { Hint, RadialChart, RadialChartPoint } from 'react-vis';
import { randomNumberGenerator } from '../util/jsUtil';
import './ReactVis.scss';

export default function ReactVisDonutChartExample() {
  const data: RadialChartPoint[] = [
    {angle: 1, color: 'red', label: 'Severe', subLabel: '1'},
    {angle: 5, color: 'yellow', label: 'Moderate', subLabel: '5'},
    {angle: 2, color: 'green', label: 'Low', subLabel: '2'}
  ];

  const [chartData, setChartData] = useState<RadialChartPoint[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hintValue, setHintValue] = useState<RadialChartPoint | null>(null);

  // Simulate an async data load task
  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setIsLoading(false);
    }, 3000);
  }, []);

  //Creates random datapoints
  const updateData = () => {
    const tempData: RadialChartPoint[] = [];
    let randomNum = randomNumberGenerator(1, 10, 0);
    tempData.push({angle: randomNum, color: 'red', label: 'Severe', subLabel: String(randomNum)});
    randomNum = randomNumberGenerator(1, 10, 0);
    tempData.push({angle: randomNum, color: 'green', label: 'Low', subLabel: String(randomNum)});
    randomNum = randomNumberGenerator(1, 10, 0);
    tempData.push({angle: randomNum, color: 'yellow', label: 'Moderate', subLabel: String(randomNum)});
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
            <RadialChart animation
                         data={chartData}
                         height={400}
                         width={400}
                         innerRadius={100}
                         radius={140}
                         showLabels
                         padAngle={0.05}
                         colorType="literal"
                         labelsRadiusMultiplier={1.25}
                         onValueMouseOver={val => setHintValue(val)}
                         onValueMouseOut={() => setHintValue(null)}
            >
              {
                hintValue &&
                //Illustrates how Hints are stylistically customizable
                <Hint value={hintValue}>
                  <p className="nx-donut-hint">
                    {hintValue.label}: {hintValue.subLabel}
                  </p>
                </Hint>
              }
            </RadialChart>
          }
          <NxButton onClick={updateData}>Update Data</NxButton>
        </>
      }
    </>
  );
}
