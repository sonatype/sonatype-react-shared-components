/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsiveBar, BarLegendProps } from '@nivo/bar';
import { NIVO_COLORS } from '@sonatype/react-shared-components';

const LEGENDS: BarLegendProps[] = [
  {
    dataFrom: 'indexes',
    anchor: 'bottom-right',
    direction: 'column',
    itemWidth: 100,
    itemHeight: 20,
    translateX: 140
  }
];

const rawBarData: [string, number][] = [
  ['foxes', 10],
  ['wolves', 34],
  ['dogs', 1],
  ['cats', 5],
  ['penguins', 43],
  ['chewbaccas', 89],
  ['weasels', 64],
  ['raccons', 12],
  ['pandas', 98],
  ['deers', 27],
  ['bears', 32]
];

const barData = rawBarData.map(([id, value]) => ({ id, value }));

const MyResponsiveBar = () => (
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
                   legends={LEGENDS}
                   colors={NIVO_COLORS}
         />
  </div>
);

export default function NivoBarExample() {
  return (
    <div style={{ height: 400 }} className="barChart">
      <MyResponsiveBar></MyResponsiveBar>
    </div>
  );
}
