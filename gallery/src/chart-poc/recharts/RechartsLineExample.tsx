/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { LineChart, Line, Legend, CartesianGrid, XAxis, YAxis } from 'recharts';

import './RechartsExample.scss';

const data = [
  {
    'name': 'Critical',
    'Long Story': 264,
    'Later Daters': 117,
    'Song Story': 0,
    'Heart Game': 213,
    'Turtle Crossing': 148
  },
  {
    'name': 'Severe',
    'Long Story': 88,
    'Later Daters': 263,
    'Song Story': 282,
    'Heart Game': 39,
    'Turtle Crossing': 83
  },
  {
    'name': 'Moderate',
    'Long Story': 27,
    'Later Daters': 43,
    'Song Story': 136,
    'Heart Game': 125,
    'Turtle Crossing': 281
  },
  {
    'name': 'Low',
    'Long Story': 17,
    'Later Daters': 238,
    'Song Story': 13,
    'Heart Game': 211,
    'Turtle Crossing': 146
  }
];

export default function RechartsExample() {
  return (
    <LineChart width={730}
               height={250}
               data={data}
               margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Line type="natural" dataKey="Long Story" stroke="var(--nx-swatch-orange-55)" />
      <Line type="natural" dataKey="Later Daters" stroke="var(--nx-swatch-green-60)" />
      <Line type="natural" dataKey="Song Story" stroke="var(--nx-swatch-indigo-80)" />
      <Line type="natural" dataKey="Heart Game" stroke="var(--nx-swatch-red-75)" />
      <Line type="natural" dataKey="Turtle Crossing" stroke="var(--nx-swatch-purple-80)" />
    </LineChart>
  );
}
