/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { selectableColorValues } from '@sonatype/react-shared-components';
import { ResponsivePie } from '@nivo/pie';

const data = [{
  id: 'low',
  label: 'Low',
  value: 12
}, {
  id: 'moderate',
  label: 'Moderate',
  value: 57
}, {
  id: 'severe',
  label: 'Severe',
  value: 121
}, {
  id: 'critical',
  label: 'Critical',
  value: 8
}, {
  id: 'none',
  label: 'None',
  value: 0
}];

export default function NivoExample() {
  const [colors, setColors] = useState<string[] | undefined>(undefined);

  useEffect(function() {
    selectableColorValues.then(({ dark }) => setColors(dark));
  }, []);

  return (
    <div style={{ height: '500px' }}>
      <ResponsivePie data={data}
                     colors={colors}
                     margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
                     padAngle={0.7}
                     cornerRadius={3} />
    </div>
  );
}
