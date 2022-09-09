/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxCode,
  NxP,
  NxTextLink,
  NxWarningAlert
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const NxStatefulTreeViewMultiSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxWarningAlert>
        <NxCode>NxStatefulTreeViewMultiSelect</NxCode> has been renamed
        to <NxCode>NxCollapsibleMultiSelect</NxCode>.
        Please use <NxTextLink href="#/pages/Collapsible%20Multi-Select">NxCollapsibleMultiSelect</NxTextLink> instead.
      </NxWarningAlert>

      <NxP>
        Stateful Multi select component using collapsible items with checkboxes.
        It handles collapsible items toggling and filter state.
      </NxP>
    </GalleryDescriptionTile>
  </>;

export default NxStatefulTreeViewMultiSelectPage;
