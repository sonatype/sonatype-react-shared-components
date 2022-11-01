/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { NIVO_COLORS } from '@sonatype/react-shared-components';
import { rawBarData } from './data';

const barData = rawBarData.map(([id, value]) => ({ id, value }));

export default function NivoBarExample() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveBar data={barData}
                     layout="vertical"
                     colorBy="indexValue"
                     enableLabel={false}
                     margin={{
                       top: 80,
                       left: 60,
                       bottom: 60,
                       right: 140
                     }}
                     label={d => `${d.id}: ${d.value}`}
                     padding={0.15}
                     tooltipLabel={({ id }) => `${id}`}
                     axisBottom={{
                       legend: 'animals',
                       legendPosition: 'middle',
                       legendOffset: 40
                     }}
                     axisLeft={{
                       legend: 'extinct (%)',
                       legendPosition: 'middle',
                       legendOffset: -40
                     }}
                     axisTop={{
                       legend: 'Animals Extinction Rates',
                       legendOffset: -40,
                       legendPosition: 'middle'
                     }}
                     colors={NIVO_COLORS}
        />
    </div>
  );
}
