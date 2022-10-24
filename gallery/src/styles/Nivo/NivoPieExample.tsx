/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

import { chartColors } from './data';

export const generateData = (numberOfItems: number, range: [number, number]) =>
  Array.from({ length: numberOfItems })
      .map((_, index) => ({
        id: `item-${index}`,
        value: Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0])
      }));

export default function NivoPieExample() {
  return (
    <>
      <div style={{ height: '400px' }}>
        <ResponsivePie data={generateData(8, [1, 100])}
                       margin={{
                         top: 40,
                         right: 80,
                         bottom: 80,
                         left: 80
                       }}
                       colors={chartColors}
          />
      </div>
    </>
  );
}
