/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxP, NxCode } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxCounterCode = require('./NxCounterExample.html');

const NxCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Basic style for small indicator token which typically displays a single #, a '# of #' string, or a short text
        string. When working in React, the <NxCode>NxCounter</NxCode> component is available for a more convenient way
        to create these elements.
      </NxP>
      <NxP>
        Some basic positioning CSS examples have been provided. To right justify the counter within its container use
        <NxCode>nx-pull-right</NxCode>.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-counter</NxCode></NxTable.Cell>
            <NxTable.Cell>Top level</NxTable.Cell>
            <NxTable.Cell>Basic counter styling. Supports # of # and text string.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-counter--active</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-counter</NxCode></NxTable.Cell>
            <NxTable.Cell>
              An active state, used in lists or tree-views when the parent also has an active state.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="nx-counter Examples"
                        htmlExample={nxCounterCode}
                        codeExamples={nxCounterCode}>
      Examples of <NxCode>nx-counter</NxCode>s with variations. The first is a basic example. The
      second is an example of the active style. The third and fourth examples demonstrate the addition of the
      <NxCode>nx-pull-right</NxCode> class to put the counter on the right side of the container.
      The fourth example demonstrates this in conjunction with text that is long enough to overflow.
    </GalleryExampleTile>
  </>;

export default NxCounterPage;
