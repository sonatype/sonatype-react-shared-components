/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import './RechartsBarChartExample.scss';

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
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="id" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}
