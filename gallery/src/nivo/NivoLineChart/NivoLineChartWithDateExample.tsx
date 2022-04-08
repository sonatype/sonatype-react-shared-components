/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  colors,
  legendBottom,
  marginsLegendBottom,
  baseProps,
  axisLeft,
  axisBottomDate,
  dateXScale,
  yScale
} from './common';
import { DATA_WITH_DATE } from './data';

import { ResponsiveLine } from '@nivo/line';

export default function LineChartExample() {
  return (
    <>
      <div style={{ height: '400px' }}>
        <ResponsiveLine data={DATA_WITH_DATE}
                        colors={colors}

                        xScale={dateXScale}
                        xFormat="time:%Y-%m-%d"
                        yScale={yScale}

                        axisTop={null}
                        axisBottom={axisBottomDate}
                        axisRight={null}
                        axisLeft={axisLeft}

                        legends={legendBottom}

                        margin={marginsLegendBottom}

                        { ...baseProps }
        />
      </div>
    </>
  );
}
