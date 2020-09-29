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

const nxThreatNumberBasicExampleCode = require('!!raw-loader!./NxThreatNumberBasicExample').default,
    nxThreatNumberListExampleCode = require('!!raw-loader!./NxThreatNumberListExample').default,
    nxThreatNumberTableExampleCode = require('!!raw-loader!./NxThreatNumberTableExample').default;

const NxThreatNumberPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        When an IQ Policy Threat Number is displayed adjacent to an <code className="nx-code">NxThreatIndicator</code>,
        style the number with <code className="nx-code">.nx-threat-number</code>.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-threat-number-basic-example"
                        liveExample={NxThreatNumberBasicExample}
                        codeExamples={nxThreatNumberBasicExampleCode}>
      An example of <code className="nx-code">.nx-threat-number</code> used
      adjacent to an <code className="nx-code">NxThreatIndicator</code> in a simple inline layout.
    </GalleryExampleTile>

    <GalleryExampleTile title="List Example"
                        id="nx-threat-number-list-example"
                        liveExample={NxThreatNumberListExample}
                        codeExamples={nxThreatNumberListExampleCode}>
      An example of <code className="nx-code">.nx-threat-number</code> used
      along with <code className="nx-code">NxThreatIndicator</code> in an <code className="nx-code">.nx-list</code>.
      The layout expectations of <code className="nx-code">.nx-list</code> require a slight customization
      to the way the elements are arranged.
    </GalleryExampleTile>

    <GalleryExampleTile title="Table Example"
                        id="nx-threat-number-table-example"
                        liveExample={NxThreatNumberTableExample}
                        codeExamples={nxThreatNumberTableExampleCode}>
      Since <code className="nx-code">nx-table</code> is one of the primary places
      that <code className="nx-code">NxThreatIndicator</code> is intended to be used, this example demonstrates a
      typical usage of indicators and <code className="nx-code">nx-threat-number</code>s in that context.
      Note that no special classes or placements are needed here, it is essentially just the
      usual inline layout of the threat indicator and adjacent content, within a table cell.
    </GalleryExampleTile>
  </>;

export default NxThreatNumberPage;
