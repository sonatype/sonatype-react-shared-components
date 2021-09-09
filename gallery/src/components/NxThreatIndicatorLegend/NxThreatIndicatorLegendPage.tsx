/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxInfoAlert, NxP, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxThreatIndicatorLegendHorizontalExample from './NxThreatIndicatorLegendHorizontalExample';
import NxThreatIndicatorLegendVerticalExample from './NxThreatIndicatorLegendVerticalExample';

const NxThreatIndicatorLegendHorizontalExampleCode = require('./NxThreatIndicatorLegendHorizontalExample?raw'),
    NxThreatIndicatorLegendVerticalExampleCode = require('./NxThreatIndicatorLegendVerticalExample?raw');

const NxThreatIndicatorLegendPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxThreatIndicatorLegend</NxCode> is an element to display the legend for
        various threat levels. The legend can be in two formats: horizontal and vertical.
      </NxP>
      <NxInfoAlert>
        By default, <NxCode>NxThreatIndicatorLegend</NxCode> renders a horizontal legend.
        To render a vertical legend, the prop <NxCode>vertical</NxCode> needs to be provided.
      </NxInfoAlert>
      <NxP>
        <NxCode>NxThreatIndicatorLegend</NxCode> supports displaying the legend for one of
        'unspecified', 'none', 'low', 'moderate', 'severe', or 'critical' threat levels.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>header</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>
              Sets the legend header title. If not provided, displays "Legend" as the default header title.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>vertical</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays a vertical legend.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>critical</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays the legend item for critical threat items.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>severe</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays the legend item for severe threat items.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>moderate</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays the legend item for moderate threat items.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>low</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays the legend item for low threat items.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>none</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays the legend item for none threat items.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>unspecified</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>no</NxTable.Cell>
            <NxTable.Cell>Displays the legend item for unspecified threat items.</NxTable.Cell>
          </NxTable.Row>

        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Horizontal Example"
                        id="nx-threat-indicator-legend-example"
                        liveExample={NxThreatIndicatorLegendHorizontalExample}
                        codeExamples={NxThreatIndicatorLegendHorizontalExampleCode}>
      An example of a horizontal <NxCode>NxThreatIndicatorLegend</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Vertical Example"
                        id="nx-threat-indicator-legend-vertical-example"
                        liveExample={NxThreatIndicatorLegendVerticalExample}
                        codeExamples={NxThreatIndicatorLegendVerticalExampleCode}>
      An example of a vertical <NxCode>NxThreatIndicatorLegend</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxThreatIndicatorLegendPage;
