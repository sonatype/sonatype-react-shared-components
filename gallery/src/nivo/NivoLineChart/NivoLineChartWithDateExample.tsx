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
  axisBottomDate,
  axisLeft,
  baseProps,
  colors,
  dateXScale,
  legendBottom,
  marginsLegendBottom,
  marginsNoLegend,
  marginsLegendRight,
  legendRight,
  yScaleStacked,
  yScaleNotStacked,
  styleNoPoints
} from './common';
import { generateDateData, generateSpecialData } from './data';

export default function LineChartExample() {
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [data, setData] = useState(generateDateData(3, 12, [0, 100]));
  const [isStacked, setIsStacked] = useState(true);
  const [showPoints, setShowPoints] = useState(true);

  const updateData = (lineAndPoints: string) => {
    const [lines, points] = lineAndPoints.split(',').map(value => parseInt(value));
    setNumberOfLines(lines);
    setData(generateDateData(lines, points, [0, 100]));
  };

  const margins = numberOfLines === 1 ?
    marginsNoLegend : numberOfLines > 5 ?
      marginsLegendRight : marginsLegendBottom;

  const legends = numberOfLines === 1 ?
    [] : numberOfLines > 5 ?
      legendRight : legendBottom;

  const style = showPoints ? {
    ...baseProps
  } : {
    ...baseProps,
    ...styleNoPoints
  };

  return (
    <>
      <div>
        <NxFormSelect onChange={(event) => updateData(event.target.value)} defaultValue="3, 12">
          <option value="1, 12">1 Line, 12 Points</option>
          <option value="1, 30">1 Line, 30 Points</option>
          <option value="1, 90">1 Line, 90 Points</option>
          <option value="3, 12">3 Lines, 12 Points</option>
          <option value="3, 30">3 Lines, 30 Points</option>
          <option value="3, 90">3 Lines, 90 Points (Not Recommended)</option>
          <option value="6, 12">6 Lines (Not Recommended), 12 Points</option>
          <option value="6, 12">6 Lines (Not Recommended), 30 Points</option>
          <option value="8, 12">8 lines (Not Recommended), 12 Points</option>
          <option value="10, 12">10 lines (Maximum, Not Recommended), 12 Points</option>
        </NxFormSelect>

        <NxStatefulToggle defaultChecked={isStacked}
                          onChange={(boolean) => setIsStacked(boolean)}>
          Stacked
        </NxStatefulToggle>

        <NxStatefulToggle defaultChecked={showPoints}
                          onChange={(boolean) => setShowPoints(boolean)}>
          Points
        </NxStatefulToggle>
      </div>
      <div style={{ height: '400px' }}>
        <ResponsiveLine data={generateSpecialData([0, 100])}
                        colors={colors}

                        xScale={dateXScale}
                        xFormat="time:%Y-%m-%d"
                        yScale={isStacked ? yScaleStacked : yScaleNotStacked}

                        axisTop={null}
                        axisBottom={axisBottomDate}
                        axisRight={null}
                        axisLeft={axisLeft}

                        legends={legends}
                        margin={margins}

                        { ...style }
        />
      </div>
    </>
  );
}
