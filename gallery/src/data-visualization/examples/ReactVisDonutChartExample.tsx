/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { selectableColorClasses } from '@sonatype/react-shared-components';
import { Hint, RadialChart, RadialChartPoint } from 'react-vis';
import '../ReactVis.scss';

export default function ReactVisDonutChartExample() {
  const data: RadialChartPoint[] = [
    {
      angle: 1,
      className: selectableColorClasses[3],
      color: 'var(--nx-selectable-color-dark)',
      label: 'Severe',
      subLabel: '1'
    },
    { angle: 5,
      className: selectableColorClasses[6],
      color: 'var(--nx-selectable-color-dark)',
      label: 'Moderate',
      subLabel: '5'
    },
    { angle: 2,
      className: selectableColorClasses[7],
      color: 'var(--nx-selectable-color-dark)',
      label: 'Low',
      subLabel: '2'
    }
  ];

  const [hintValue, setHintValue] = useState<RadialChartPoint | null>(null);

  return (
    <RadialChart data={data}
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
  );
}
