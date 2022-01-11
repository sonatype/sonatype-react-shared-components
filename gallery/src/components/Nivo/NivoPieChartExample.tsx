/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { ResponsivePie } from '@nivo/pie';

import './NivoPieChartExample.scss';

const repositoryData = [
  {
    'id': 'maven',
    'label': 'Maven',
    'value': 410
  },
  {
    'id': 'docker',
    'label': 'Docker',
    'value': 452
  },
  {
    'id': 'npm',
    'label': 'npm',
    'value': 418
  },
  {
    'id': 'raw',
    'label': 'raw',
    'value': 400
  },
  {
    'id': 'nuget',
    'label': 'nuget',
    'value': 526
  },
  {
    'id': 'other',
    'label': 'other',
    'value': 526
  }
];

const ecosystemData = [
  {
    'id': 'blobstore_file',
    'label': 'Blobstore File',
    'value': 320
  },
  {
    'id': 'S3',
    'label': 'S3',
    'value': 452
  }
];

const colors = [
  '#00A1E6',
  '#FFC333',
  '#03C9B8',
  '#FF8098',
  '#9BC5FD',
  '#FF911A',
  '#929BD3',
  '#FF99D5',
  '#BAF8A0',
  '#DD99FF',
  '#AA7FFF'
];

const NIVO_RESPONSIVE_PIE_PROPERTIES = {
  margin: {
    top: 50,
    right: 110,
    bottom: 50,
    left: 60
  },
  colors,
  // padAngle: 3,
  cornerRadius: 0,
  borderWidth: 0,
  enableArcLabels: false,
  activeOuterRadiusOffset: 12
};

const TOP_TEN_DATA = [
  {
    id: 'repo1',
    value: 2500
  },
  {
    id: 'repo2',
    value: 500
  },
  {
    id: 'repo3',
    value: 450
  },
  {
    id: 'repo4',
    value: 200
  },
  {
    id: 'repo5',
    value: 150
  },
  {
    id: 'repo6',
    value: 125
  },
  {
    id: 'repo7',
    value: 112.5
  },
  {
    id: 'repo8',
    value: 111
  },
  {
    id: 'repo9',
    value: 110.5
  },
  {
    id: 'repo10',
    value: 100
  },
  {
    id: 'other',
    value: 650
  }
];

export default function NxAccordionExample() {
  return (
    <div className="charts">
      <div className="chart-container">
        <h2 className="nx-h2">Storage System by Repository</h2>
        <ResponsivePie data={TOP_TEN_DATA}
                       {...NIVO_RESPONSIVE_PIE_PROPERTIES}
                       arcLinkLabel={d => `${d.id} (${d.value})`}
                       legends={[
                         {
                           anchor: 'top-right',
                           direction: 'column',
                           justify: false,
                           translateX: 75,
                           translateY: 15,
                           itemsSpacing: 5,
                           itemWidth: 60,
                           itemHeight: 14,
                           itemTextColor: '#999',
                           itemDirection: 'left-to-right',
                           itemOpacity: 1,
                           symbolSize: 14,
                           symbolShape: 'circle'
                         }
                       ]}
        />
      </div>
      <div className="chart-container">
        <h2 className="nx-h2">Storage System by Repository</h2>
        <ResponsivePie data={repositoryData}
                       {...NIVO_RESPONSIVE_PIE_PROPERTIES}
                       arcLinkLabel={d => `${d.id} (${d.value})`}
                       legends={[
                         {
                           anchor: 'top-right',
                           direction: 'column',
                           justify: false,
                           translateX: 75,
                           translateY: 15,
                           itemsSpacing: 5,
                           itemWidth: 60,
                           itemHeight: 14,
                           itemTextColor: '#999',
                           itemDirection: 'left-to-right',
                           itemOpacity: 1,
                           symbolSize: 14,
                           symbolShape: 'circle'
                         }
                       ]}
        />
      </div>
      <div className="chart-container">
        <h2 className="nx-h2">Storage System by Ecosystem</h2>
        <ResponsivePie data={ecosystemData}
                       {...NIVO_RESPONSIVE_PIE_PROPERTIES}
                       arcLinkLabel={d => `${d.id} (${d.value})`}
                       legends={[
                         {
                           anchor: 'top-right',
                           direction: 'column',
                           justify: false,
                           translateX: 75,
                           translateY: 15,
                           itemsSpacing: 5,
                           itemWidth: 60,
                           itemHeight: 14,
                           itemTextColor: '#999',
                           itemDirection: 'left-to-right',
                           itemOpacity: 1,
                           symbolSize: 14,
                           symbolShape: 'circle'
                         }
                       ]}
        />
      </div>
    </div>
  );
}
