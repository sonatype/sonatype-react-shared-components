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
    itemsSpacing: 0,
    translateX: 140
  }
];

const rawBarData: [string, number][] = [
  ['foxes', 102],
  ['wolves', 134],
  ['dogs', 24],
  ['cats', 502],
  ['penguins', 53],
  ['chewbaccas', 1],
  ['weasels', 164],
  ['raccons', 12],
  ['pandas', 124],
  ['deers', 332],
  ['bears', 231]
];

const barData = rawBarData.map(([id, value]) => ({ id, value }));

const MyResponsiveBar = () => (
  <div style={{ height: '400px' }}>
    <ResponsiveBar data={barData}
                   layout="vertical"
                   colorBy="indexValue"
                   groupMode="grouped"
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
