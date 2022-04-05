/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxInfoAlert, NxP, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxToastExample from './NxToastExample';

const NxToastExampleCode = require('./NxToastExample?raw');

const NxToastPage = () =>
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
        <NxCode>NxThreatIndicatorLegend</NxCode> supports displaying the legend for
        'unspecified', 'none', 'low', 'moderate', 'severe', and 'critical' threat levels.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Default</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Toast Example"
                        id="nx-toast-example"
                        liveExample={NxToastExample}
                        codeExamples={NxToastExampleCode}>
      An example of a horizontal <NxCode>NxThreatIndicatorLegend</NxCode> displaying all possible
      category level threats.
    </GalleryExampleTile>
  </>;

export default NxToastPage;
