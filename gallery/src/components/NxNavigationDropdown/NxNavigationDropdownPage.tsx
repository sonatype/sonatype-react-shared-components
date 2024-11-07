/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxNavigationDropdownExample from './NxNavigationDropdownExample';
import NxNavigationDropdownHeaderExample from './NxNavigationDropdownHeaderExample';

const nxNavigationDropdownExampleCode = require('./NxNavigationDropdownExample?raw'),
    nxNavigationDropdownHeaderExampleCode = require('./NxNavigationDropdownHeaderExample?raw');

const NxNavigationDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A variation of <NxCode>NxIconDropdown</NxCode> intended for use within <NxCode>NxGlobalHeader2</NxCode>. It
        takes the same props as <NxCode>NxIconDropdown</NxCode>. The menu
        within <NxCode>NxNavigationDropdown</NxCode> may contain a header section comprised of
        a <NxCode>NxNavigationDropdown.MenuHeader</NxCode>, an <NxCode>NxH4</NxCode>, and
        an <NxCode>NxP</NxCode>.
      </NxP>
      <NxP>
        Aside from the optional header, only simple dividers (<NxCode>NxDropdown.Divider</NxCode>), links (with
        the <NxCode>nx-dropdown-link</NxCode> class), and buttons (with the <NxCode>nx-dropdown-button</NxCode> class)
        are allowed within the menu.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-navigation-dropdown-simple-example"
                        liveExample={NxNavigationDropdownExample}
                        codeExamples={nxNavigationDropdownExampleCode}>
      An example of an <NxCode>NxNavigationDropdown</NxCode> with links and <NxCode>&lt;button&gt;</NxCode>s.
    </GalleryExampleTile>

    <GalleryExampleTile title="Header Example"
                        id="nx-navigation-dropdown-header-example"
                        liveExample={NxNavigationDropdownHeaderExample}
                        codeExamples={nxNavigationDropdownHeaderExampleCode}>
      An example of an <NxCode>NxNavigationDropdown</NxCode> with a header inside of the dropdown menu.
    </GalleryExampleTile>
  </>;

export default NxNavigationDropdownPage;
