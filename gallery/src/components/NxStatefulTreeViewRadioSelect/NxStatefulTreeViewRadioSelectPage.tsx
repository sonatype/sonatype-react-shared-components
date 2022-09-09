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

const NxStatefulTreeViewRadioSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxWarningAlert>
        <NxCode>NxStatefulTreeViewRadioSelect</NxCode> has been renamed
        to <NxCode>NxStatefulCollapsibleRadioSelect</NxCode> and
        is now deprecated and will be removed in the next major version.
        Please use {' '}
        <NxTextLink href="#/pages/Stateful%20Collapsible%20Radio-Select">
          NxStatefulCollapsibleRadioSelect
        </NxTextLink>
        {' '}instead.
      </NxWarningAlert>

      <NxP>
        Stateful Radio select component using collapsible items with radios.
        It handles collapsible items toggling and filter state.
      </NxP>
    </GalleryDescriptionTile>
  </>;

export default NxStatefulTreeViewRadioSelectPage;
