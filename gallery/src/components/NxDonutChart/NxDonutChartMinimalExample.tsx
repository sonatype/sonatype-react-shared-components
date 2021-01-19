/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {chartSeverity, NxDonutChartDataPoint} from '../../../../lib/src/components/NxDonutChart/types';
import {NxDonutChart} from '../../../../lib/src';

export default function NxDonutChartMinimalExample() {

  const dataPoints: NxDonutChartDataPoint[] = [
    {
      value: 50,
      severity: chartSeverity.CRITICAL,
      label: 'label 1'
    },
    {
      value: 10,
      severity: chartSeverity.MODERATE,
      label: 'label 2'
    }
  ];

  return (
    <>
      <NxDonutChart dataPoints={dataPoints} />
    </>
  );
}
