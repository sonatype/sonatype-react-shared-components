/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulNavigationDropdownExample from './NxStatefulNavigationDropdownExample';

const nxStatefulNavigationDropdownExampleCode = require('./NxStatefulNavigationDropdownExample?raw');

const NxNavigationDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A stateful wrapper around <NxCode>NxNavigationDropdown</NxCode> which manages the open/close state
        of the dropdown menu. Takes the same props as <NxCode>NxNavigationDropdown</NxCode> except
        for <NxCode>isOpen</NxCode> and <NxCode>onToggleCollapse</NxCode>.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-navigation-dropdown-simple-example"
                        liveExample={NxStatefulNavigationDropdownExample}
                        codeExamples={nxStatefulNavigationDropdownExampleCode}>
      An example of an <NxCode>NxStatefulNavigationDropdown</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxNavigationDropdownPage;
