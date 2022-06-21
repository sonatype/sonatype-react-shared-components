/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTextLink, NxP, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const NxTreeViewRadioSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxWarningAlert>
        <NxCode>NxTreeViewRadioSelect</NxCode> has been renamed to <NxCode>NxCollapsibleRadioSelect</NxCode>
        and is now deprecated and will be removed in the future.
        Please use <NxTextLink href="#/pages/Collapsible%20Radio-Select">NxCollapsibleRadioSelect</NxTextLink> instead.
      </NxWarningAlert>

      <NxP>
        A collapsible items radio group component.
      </NxP>
    </GalleryDescriptionTile>
  </>;

export default NxTreeViewRadioSelectPage;
