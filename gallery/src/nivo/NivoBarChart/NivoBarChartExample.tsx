/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulAccordion, NxAccordion } from '@sonatype/react-shared-components';

import { data } from './data';

import { ResponsiveBar, BarLegendProps } from '@nivo/bar';

const colors = [
  '#008FCC',
  '#99005A',
  '#3BA60C',
  '#650099',
  '#CC6A00',
  '#02306D',
  '#FF6685',
  '#664800',
  '#02978B',
  '#99001E',
  '#6D7AC5',
  '#005A80'
];

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

export default function NivoBarChartExample() {
  return (
    <div>
      <div style={{ height: '400px' }}>
        <ResponsiveBar data={data}
                       colors={colors}
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
        />
      </div>
      <NxStatefulAccordion defaultOpen={false}>
        <NxAccordion.Header>
          <NxAccordion.Title>Data</NxAccordion.Title>
        </NxAccordion.Header>
      </NxStatefulAccordion>
    </div>
  );
}
