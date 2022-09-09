/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxList, NxP, NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulIconDropdownExample from './NxStatefulIconDropdownExample';

const nxStatefulIconDropdownExampleCode = require('./NxStatefulIconDropdownExample?raw');

const NxStatefulIconDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A dropdown menu component which uses a single icon as its toggle and therefore resembles an icon-only
        button. <NxCode>NxStatefulIconDropdown</NxCode> shares all of the same props as{' '}
        <NxTextLink href="#/pages/Icon%20Dropdown">NxIconDropdown</NxTextLink> except the ones listed below.
      </NxP>
      <NxList bulleted>
        <NxList.Item><NxList.Text><NxCode>isOpen</NxCode></NxList.Text></NxList.Item>
        <NxList.Item><NxList.Text><NxCode>onToggleCollapse</NxCode></NxList.Text></NxList.Item>
        <NxList.Item><NxList.Text><NxCode>onCloseKeyDown</NxCode></NxList.Text></NxList.Item>
        <NxList.Item><NxList.Text><NxCode>onCloseClick</NxCode></NxList.Text></NxList.Item>
      </NxList>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulIconDropdownExampleCode}
                        liveExample={NxStatefulIconDropdownExample}>
      This example demonstrates a simple NxStatefulIconDropdown, showing that it tracks
      its own open/closed state with no need for support from the surrounding code.
    </GalleryExampleTile>
  </>;

export default NxStatefulIconDropdownPage;
