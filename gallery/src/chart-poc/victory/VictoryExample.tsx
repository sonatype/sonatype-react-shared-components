/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { selectableColorValues } from '@sonatype/react-shared-components';
import { VictoryPie } from 'victory';

const data = [{
  x: 'Low',
  y: 12
}, {
  x: 'Moderate',
  y: 57
}, {
  x: 'Severe',
  y: 121
}, {
  x: 'Critical',
  y: 8
}, {
  x: 'None',
  y: 0
}];

export default function VictoryExample() {
  const [colors, setColors] = useState<string[] | undefined>(undefined);

  useEffect(function() {
    selectableColorValues.then(({ dark }) => setColors(dark));
  }, []);

  if (colors) {
    return (
      <div style={{ height: '500px' }}>
        <VictoryPie data={data}
                    colorScale={colors}
                    padAngle={0.7}
                    labels={({ datum: { x, y } }) => `${x}: ${y}`}
                    innerRadius={50}
                    cornerRadius={3} />
      </div>
    );
  }
  else {
    return null;
  }
}
