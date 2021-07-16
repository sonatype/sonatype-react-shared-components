/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { NxButton, NxLoadingSpinner, selectableColors } from '@sonatype/react-shared-components';
import { Hint, RadialChart, RadialChartPoint } from 'react-vis';
import { randomNumberGenerator } from '../../util/jsUtil';
import '../ReactVis.scss';

export default function ReactVisDonutChartExample() {
  const data: RadialChartPoint[] = [
    {angle: 1, color: selectableColors[3], label: 'Severe', subLabel: '1'},
    {angle: 5, color: selectableColors[6], label: 'Moderate', subLabel: '5'},
    {angle: 2, color: selectableColors[4], label: 'Low', subLabel: '2'}
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState<RadialChartPoint[] | null>(null);
  const [hintValue, setHintValue] = useState<RadialChartPoint | null>(null);

  // Simulate an async data load task
  useEffect(() => {
    setTimeout(() => {
      setChartData(data);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Simulate new data load on button click
  const updateData = () => {
    const tempData: RadialChartPoint[] = [];
    let randomNum = randomNumberGenerator(1, 10, 0);
    tempData.push({angle: randomNum, color: selectableColors[3], label: 'Severe', subLabel: String(randomNum)});
    randomNum = randomNumberGenerator(1, 10, 0);
    tempData.push({angle: randomNum, color: selectableColors[4], label: 'Low', subLabel: String(randomNum)});
    randomNum = randomNumberGenerator(1, 10, 0);
    tempData.push({angle: randomNum, color: selectableColors[6], label: 'Moderate', subLabel: String(randomNum)});
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
