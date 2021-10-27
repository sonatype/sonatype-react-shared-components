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
        <NxCode>NxTreeViewRadioSelect</NxCode> has been renamed to <NxCode>NxCollapsibleItemsRadioSelect</NxCode>
        and is now deprecated and will be removed in the future.
        {/* eslint-disable-next-line max-len */}
        Please use <NxTextLink href="#/pages/NxCollapsibleItemsRadioSelect">NxCollapsibleItemsRadioSelect</NxTextLink> instead.
      </NxWarningAlert>

      <NxP>
        A tree view radio group component.
      </NxP>
    </GalleryDescriptionTile>
  </>;

export default NxTreeViewRadioSelectPage;
