/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { PieChart, Pie, Legend } from 'recharts';

import './RechartsExample.scss';

const data = [{
  id: 'low',
  label: 'Low',
  value: 12
}, {
  id: 'moderate',
  label: 'Moderate',
  value: 57
}, {
  id: 'severe',
  label: 'Severe',
  value: 121
}, {
  id: 'critical',
  label: 'Critical',
  value: 8
}, {
  id: 'none',
  label: 'None',
  value: 0
}];

export default function RechartsExample() {
  return (
    <PieChart width={500} height={500}>
      <Pie data={data} dataKey="value" nameKey="label" paddingAngle={0.7} label={true} innerRadius="50%"/>
      <Legend />
    </PieChart>
  );
}
