/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { NxFormSelect } from '@sonatype/react-shared-components';

import { generateData } from './data';

import {
  colors,
  margins,
  style
} from './common';

export default function NivoPieChartExample() {

  const [numberOfPoints, setNumberOfPoints] = useState(12);

  return (
    <>
      <NxFormSelect defaultValue={numberOfPoints}
                    onChange={event => setNumberOfPoints(parseInt(event.target.value))}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="12">12</option>
      </NxFormSelect>

      <div style={{ height: '400px' }}>
        <ResponsivePie data={generateData(numberOfPoints, [1, 100])}
                       margin={margins}
                       colors={colors}
                       {...style}
        />
      </div>
    </>
  );
}
