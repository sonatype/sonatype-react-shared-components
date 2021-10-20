/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { selectableColorValues } from '@sonatype/react-shared-components';
import { VictoryChart, VictoryLine } from 'victory';

export default function VictoryExample() {
  const [colors, setColors] = useState<string[] | undefined>(undefined);

  useEffect(function() {
    selectableColorValues.then(({ dark }) => setColors(dark));
  }, []);

  if (colors) {
    return (
      <div style={{ height: '500px' }}>
        <VictoryChart categories={{ x: ['Critical', 'Severe', 'Moderate', 'Low'] }}>
          <VictoryLine style={{
            data: { stroke: 'var(--nx-swatch-orange-55)' }
          }}
                       data={[
                         { x: 1, y: 264 },
                         { x: 2, y: 88 },
                         { x: 3, y: 27 },
                         { x: 4, y: 17 }
                       ]}
                    />
          <VictoryLine style={{
            data: { stroke: 'var(--nx-swatch-indigo-80)' }
          }}
                       data={[
                         { x: 1, y: 117 },
                         { x: 2, y: 263 },
                         { x: 3, y: 43 },
                         { x: 4, y: 238 }
                       ]}
                    />
          <VictoryLine style={{
            data: { stroke: 'var(--nx-swatch-green-60)' }
          }}
                       data={[
                         { x: 1, y: 0 },
                         { x: 2, y: 282 },
                         { x: 3, y: 136 },
                         { x: 4, y: 13 }
                       ]}
                    />
        </VictoryChart>
      </div>
    );
  }
  else {
    return null;
  }
}
