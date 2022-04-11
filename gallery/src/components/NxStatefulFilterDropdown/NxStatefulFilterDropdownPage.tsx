/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxTile, NxH3 } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulFilterDropdownExample from './NxStatefulFilterDropdownExample';

const nxStatefulFilterDropdownExampleCode = require('./NxStatefulFilterDropdownExample?raw');

const NxStatefulFilterDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A stateful version of <NxCode>NxFilterDropdown</NxCode> which manages the open/close state of the dropdown
        menu internally.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulFilterDropdown</NxCode> supports all props
          from <NxCode>NxFilterDropdown</NxCode> except for <NxCode>isOpen</NxCode>{' '}
          and <NxCode>onToggleCollapse</NxCode>.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulFilterDropdownExampleCode}
                        liveExample={NxStatefulFilterDropdownExample}>
      This example demonstrates a simple NxStatefulFilterDropdown, showing that it tracks
      its own open/closed state with no need for support from the surrounding code.
    </GalleryExampleTile>
  </>;

export default NxStatefulFilterDropdownPage;
