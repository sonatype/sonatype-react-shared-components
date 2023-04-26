/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { NIVO_COLORS, NIVO_THEME } from '@sonatype/react-shared-components';
import { pieData } from './pieData';

export default function NivoPieExample() {
  return (
    <>
      <div style={{ height: '400px' }}>
        <ResponsivePie data={pieData}
                       theme={NIVO_THEME}
                       margin={{
                         top: 40,
                         right: 80,
                         bottom: 80,
                         left: 80
                       }}
                       enableArcLabels={false}
                       innerRadius={0.4}
                       isInteractive={true}
                       colors={NIVO_COLORS}
          />
      </div>
    </>
  );
}
