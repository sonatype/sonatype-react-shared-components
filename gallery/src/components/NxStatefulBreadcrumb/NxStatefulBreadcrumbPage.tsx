/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { NxCode, NxH3, NxP, NxTile } from '@sonatype/react-shared-components';
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulBreadcrumbExample from './NxStatefulBreadcrumbExample';

const exampleCode = require('./NxStatefulBreadcrumbExample?raw');

const NxStatefulBreadcrumbPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulBreadcrumb</NxCode> is a stateful wrapper around <NxCode>NxBreadcrumb</NxCode> which
        internally manages the open state of the dropdown.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulBreadcrumb</NxCode> takes the same props as <NxCode>NxBreadcrumb</NxCode>, except that
          it does not take <NxCode>isDropdownOpen</NxCode> or <NxCode>toggleIsDropdownOpen</NxCode>.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        liveExample={NxStatefulBreadcrumbExample}
                        codeExamples={exampleCode}>
      An example of <NxCode>NxStatefulBreadcrumb</NxCode> including a dropdown.
    </GalleryExampleTile>
  </>;

export default NxStatefulBreadcrumbPage;
