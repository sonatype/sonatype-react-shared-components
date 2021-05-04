/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxDonutChart} from '@sonatype/react-shared-components';

export default function NxDonutChartArbitraryColorExample() {

  const dataPoints1 = [
    {
      value: 25,
      severity: 'red',
      label: 'label 1'
    },
    {
      value: 25,
      severity: 'black',
      label: 'label 2'
    },
    {
      value: 25,
      severity: 'green',
      label: 'label 3'
    },
    {
      value: 25,
      severity: 'cyan',
      label: 'label 4'
    }
  ];

  return (
    <>
      <NxDonutChart dataPoints={dataPoints1} />
    </>
  );
}
