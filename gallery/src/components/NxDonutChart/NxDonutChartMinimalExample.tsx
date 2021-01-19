/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxDonutChart} from '@sonatype/react-shared-components';

export default function NxDonutChartMinimalExample() {

  const dataPoints = [
    {
      value: 50,
      severity: 'critical',
      label: 'label 1'
    },
    {
      value: 10,
      severity: 'moderate',
      label: 'label 2'
    }
  ];

  const dataPoints2 = [
    {
      value: 33,
      severity: 'no-threat',
      label: 'label 1'
    },
    {
      value: 33,
      severity: 'critical',
      label: 'label 2'
    },
    {
      value: 33,
      severity: 'low',
      label: 'label 2'
    }
  ];

  return (
    <>
      <NxDonutChart dataPoints={dataPoints} />
      <NxDonutChart dataPoints={dataPoints2} />
    </>
  );
}
