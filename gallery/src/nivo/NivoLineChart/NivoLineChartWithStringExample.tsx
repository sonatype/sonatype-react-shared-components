/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import {
  colors,
  legendBottom,
  axisBottom,
  axisLeft,
  baseProps,
  yScale,
  stringXScale,
  marginsLegendBottom
} from './common';

import { DATA_WITH_STRING } from './data';

export default function LineChartExample() {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine data={DATA_WITH_STRING}

                      colors={colors}

                      margin={marginsLegendBottom}
                      xScale={stringXScale}
                      yScale={yScale}

                      axisTop={null}
                      axisRight={null}
                      axisBottom={axisBottom}
                      axisLeft={axisLeft}

                      legends={legendBottom}

                      { ...baseProps }
      />
    </div>
  );
}
