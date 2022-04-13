/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { NxFormSelect, NxStatefulToggle } from '@sonatype/react-shared-components';

import {
  axisBottom,
  axisLeft,
  baseProps,
  colors,
  legendBottom,
  legendRight,
  marginsLegendBottom,
  marginsLegendRight,
  marginsNoLegend,
  stringXScale,
  yScaleNotStacked,
  yScaleStacked
} from './common';

import { generateStringData } from './data';

export default function LineChartExample() {
  const [numberOfLines, setNumberOfLine] = useState(3);
  const [data, setData] = useState(generateStringData(numberOfLines, [0, 100]));
  const [isStacked, setIsStacked] = useState(false);

  const updateData = (lines: number) => {
    setNumberOfLine(lines);
    setData(generateStringData(lines, [0, 100]));
  };

  const margins = numberOfLines === 1 ?
    marginsNoLegend : numberOfLines > 5 ?
      marginsLegendRight : marginsLegendBottom;

  const legends = numberOfLines === 1 ?
    [] : numberOfLines > 5 ?
      legendRight : legendBottom;

  return (
    <>
      <div>
        <NxFormSelect onChange={(event) => updateData(parseInt(event.target.value))}>
          <option value="1">1 line</option>
          <option value="3">3 lines</option>
          <option value="6">6 lines</option>
          <option value="8">8 lines (Not Recommended)</option>
          <option value="10">10 lines (Maximum, Not Recommended)</option>
        </NxFormSelect>
        <NxStatefulToggle defaultChecked={isStacked}
                          onChange={(boolean) => setIsStacked(boolean)}>
          Is Stacked
        </NxStatefulToggle>
      </div>
      <div style={{ height: '400px' }}>
        <ResponsiveLine data={data}

                        colors={colors}

                        margin={margins}
                        xScale={stringXScale}
                        yScale={isStacked ? yScaleStacked : yScaleNotStacked}

                        axisTop={null}
                        axisRight={null}
                        axisBottom={axisBottom}
                        axisLeft={axisLeft}

                        legends={legends}

                        { ...baseProps }
        />
      </div>
    </>
  );
}
