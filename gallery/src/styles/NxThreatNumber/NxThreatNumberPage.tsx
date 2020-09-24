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

const nxThreatNumberBasicExampleCode = require('!!raw-loader!./NxThreatNumberBasicExample').default,
    nxThreatNumberListExampleCode = require('!!raw-loader!./NxThreatNumberListExample').default;

const NxThreatNumberPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        When an IQ Policy Threat Number is displayed adjacent to an <code className="nx-code">NxThreatIndicator</code>,
        style the number with <code className="nx-code">.nx-threat-number</code>
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-threat-number-basic-example"
                        liveExample={NxThreatNumberBasicExample}
                        codeExamples={nxThreatNumberBasicExampleCode}>
      An example of <code className="nx-code">.nx-threat-number</code> used
      adjacent to an <code className="nx-code">NxThreatIndicator</code> in a simple inline layout. This how how the
      two would be used together within a table cell, for instance.
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
  </>;

export default NxThreatNumberPage;
