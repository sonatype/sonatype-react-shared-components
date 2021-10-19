/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { selectableColorValues } from '@sonatype/react-shared-components';
import { ResponsiveBar } from '@nivo/bar';

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
  value: 20
}, {
  id: 'none',
  label: 'None',
  value: 0
}];

export default function NivoBarChartExample() {
  const [colors, setColors] = useState<string[] | undefined>(undefined);

  useEffect(function() {
    selectableColorValues.then(({ dark }) => setColors(dark));
  }, []);

  if (colors) {
    return (
      <div style={{ height: '500px' }}>
        <ResponsiveBar data={data}
                       keys={['value']}
                       indexBy="label"
                       valueScale={{ type: 'linear' }}
                       indexScale={{ type: 'band', round: true }}
                       colors={colors}
                       enableGridY={true}
                       colorBy="indexValue"
                       margin={{
                         left: 48,
                         bottom: 48,
                         top: 24
                       }}
                       axisTop={null}
                       axisRight={null}
                       labelSkipWidth={12}
                       labelSkipHeight={12}
                       role="application"
                       enableLabel={true}
                       label="label"
                       axisLeft={{
                         legend: 'Threat Count',
                         legendOffset: -40,
                         legendPosition: 'middle'
                       }}
                       axisBottom={{
                         legend: 'Threat Levels',
                         legendOffset: 40,
                         legendPosition: 'middle'
                       }}
        />
      </div>
    );
  }
  else {
    return null;
  }
}
