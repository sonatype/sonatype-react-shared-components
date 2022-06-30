/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxP,
  NxCode,
  NxTextLink,
  NxWarningAlert
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const NxTreeViewPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxWarningAlert>
        <NxCode>NxTreeView</NxCode> has been renamed to <NxCode>NxCollapsibleItems</NxCode>
        and is now deprecated and will be removed in the future.
        Please use <NxTextLink href="#/pages/Collapsible%20Items">NxCollapsibleItems</NxTextLink> instead.
      </NxWarningAlert>

      <NxP>
        A set of default styles for an expandable series of items. Note that the name of this component is
        a misnomer as it no longer supports tree structures.
        For an actual tree component, see <NxTextLink href="#/pages/Tree"><NxCode>NxTree</NxCode></NxTextLink>.
      </NxP>
    </GalleryDescriptionTile>
  </>;

export default NxTreeViewPage;
