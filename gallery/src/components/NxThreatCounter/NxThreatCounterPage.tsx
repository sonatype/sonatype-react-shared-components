/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTextLink, NxTable, NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxThreatCounterExample from './NxThreatCounterExample';
import NxThreatCounterWrappingExample from './NxThreatCounterWrappingExample';
import NxThreatCounterSmallExample from './NxThreatCounterSmallExample';
import NxThreatCounterColumnExample from './NxThreatCounterColumnExample';
import NxThreatCounterSmallColumnExample from './NxThreatCounterSmallColumnExample';
import NxThreatCounterGridExample from './NxThreatCounterGridExample';
import NxThreatCounterSmallGridExample from './NxThreatCounterSmallGridExample';

const NxThreatCounterCode = require('./NxThreatCounterExample?raw'),
    NxThreatCounterWrappingCode = require('./NxThreatCounterWrappingExample?raw'),
    NxThreatCounterSmallCode = require('./NxThreatCounterSmallExample?raw'),
    NxThreatCounterColumnCode = require('./NxThreatCounterColumnExample?raw'),
    NxThreatCounterSmallColumnCode = require('./NxThreatCounterSmallColumnExample?raw'),
    NxThreatCounterGridCode = require('./NxThreatCounterGridExample?raw'),
    NxThreatCounterSmallGridCode = require('./NxThreatCounterSmallGridExample?raw');

const NxThreatCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Component for a series of small counters which display a number representing a count of threats/violations,
        and a short pre-set text string which displays the severity (critical, severe, moderate, low, and none).
      </NxP>
      <NxP>
        Each count is optional. If no value is provided for a given count, then the indicator for that severity level
        will not be rendered.
      </NxP>
      <NxP>
        Three basic layouts have been demonstrated below. It is expected that one of these should satisfy any
        requirement.
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
            <NxTable.Cell>criticalCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A numerical value, the number of critical threats. If no value is provided, then the count will be hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>severeCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A numerical value, the number of severe threats. If no value is provided, then the count will be hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>moderateCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A numerical value, the number of moderate threats. If no value is provided, then the count will be hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>lowCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A numerical value, the number of low threats. If no value is provided, then the count will be hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>noneCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A numerical value, the number of counted items posing no threat. If no value is provided, then the count
              will be hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>unspecifiedCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A numerical value, the number of unspecified threats. If no value is provided, then the count
              will be hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>layout</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Sets the layout of the counters. If no value is provided then "row" layout will be specified. The other
              options are <NxCode>column</NxCode> and <NxCode>grid</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;dl&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/dl">
                HTML dl Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxThreatCounter</NxCode> supports any HTML attribute that's normally
              supported by <NxCode>&lt;dl&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxThreatCounter Default Example"
                        id="nx-threat-counter-row"
                        liveExample={NxThreatCounterExample}
                        codeExamples={NxThreatCounterCode}>
      <NxCode>nx-threat-counter</NxCode>s in the default (row) layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Default Wrapping Example"
                        id="nx-threat-counter-row-wrapping"
                        liveExample={NxThreatCounterWrappingExample}
                        codeExamples={NxThreatCounterWrappingCode}>
      <NxCode>nx-threat-counter</NxCode>s in the default (row) layout wrapping example.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Small Default Example"
                        id="nx-threat-counter-small-row"
                        liveExample={NxThreatCounterSmallExample}
                        codeExamples={NxThreatCounterSmallCode}>
      <NxCode>nx-threat-counter</NxCode>s in the default (row) layout with only two counts.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Column Example"
                        id="nx-threat-counter-column"
                        liveExample={NxThreatCounterColumnExample}
                        codeExamples={NxThreatCounterColumnCode}>
      <NxCode>nx-threat-counter</NxCode>s in column layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Small Column Example"
                        id="nx-threat-counter-small-column"
                        liveExample={NxThreatCounterSmallColumnExample}
                        codeExamples={NxThreatCounterSmallColumnCode}>
      <NxCode>nx-threat-counter</NxCode>s in column layout with only two counts.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Grid Example"
                        id="nx-threat-counter-grid"
                        liveExample={NxThreatCounterGridExample}
                        codeExamples={NxThreatCounterGridCode}>
      <NxCode>nx-threat-counter</NxCode>s in a 3x2 "grid" layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxThreatCounter Small Grid Example"
                        id="nx-threat-counter-small-grid"
                        liveExample={NxThreatCounterSmallGridExample}
                        codeExamples={NxThreatCounterSmallGridCode}>
      <NxCode>nx-threat-counter</NxCode>s in a 1x2 "grid" layout.
    </GalleryExampleTile>
  </>;

export default NxThreatCounterPage;
