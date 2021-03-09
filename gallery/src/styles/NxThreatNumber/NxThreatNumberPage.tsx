/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxThreatNumberBasicExample from './NxThreatNumberBasicExample';
import NxThreatNumberListExample from './NxThreatNumberListExample';
import NxThreatNumberTableExample from './NxThreatNumberTableExample';

const nxThreatNumberBasicExampleCode = require('./NxThreatNumberBasicExample?raw'),
    nxThreatNumberListExampleCode = require('./NxThreatNumberListExample?raw'),
    nxThreatNumberTableExampleCode = require('./NxThreatNumberTableExample?raw');

const NxThreatNumberPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        When an IQ Policy Threat Number is displayed adjacent to an <NxCode>NxThreatIndicator</NxCode>,
        style the number with <NxCode>.nx-threat-number</NxCode>.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-threat-number-basic-example"
                        liveExample={NxThreatNumberBasicExample}
                        codeExamples={nxThreatNumberBasicExampleCode}>
      An example of <NxCode>.nx-threat-number</NxCode> used
      adjacent to an <NxCode>NxThreatIndicator</NxCode> in a simple inline layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="List Example"
                        id="nx-threat-number-list-example"
                        liveExample={NxThreatNumberListExample}
                        codeExamples={nxThreatNumberListExampleCode}>
      An example of <NxCode>.nx-threat-number</NxCode> used
      along with <NxCode>NxThreatIndicator</NxCode> in an <NxCode>.nx-list</NxCode>.
      The layout expectations of <NxCode>.nx-list</NxCode> require a slight customization
      to the way the elements are arranged.
    </GalleryExampleTile>

    <GalleryExampleTile title="Table Example"
                        id="nx-threat-number-table-example"
                        liveExample={NxThreatNumberTableExample}
                        codeExamples={nxThreatNumberTableExampleCode}>
      Since <NxCode>nx-table</NxCode> is one of the primary places
      that <NxCode>NxThreatIndicator</NxCode> is intended to be used, this example demonstrates a
      typical usage of indicators and <NxCode>nx-threat-number</NxCode>s in that context.
      Note that no special classes or placements are needed here, it is essentially just the
      usual inline layout of the threat indicator and adjacent content, within a table cell.
    </GalleryExampleTile>
  </>;

export default NxThreatNumberPage;
