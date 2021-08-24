/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulIconDropdownExample from './NxStatefulIconDropdownExample';

const nxStatefulIconDropdownExampleCode = require('./NxStatefulIconDropdownExample?raw');

const NxStatefulDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A variation of the stateful dropdown menu component which uses a single icon as its toggle.
        <NxCode>NxStatefulIconDropdown</NxCode> shares all of the same props as{' '}
        <NxTextLink href="#/pages/NxStatefulDropdown">NxStatefulDropdown</NxTextLink>{' '}
        as well as the ones listed below.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>icon</NxTable.Cell>
            <NxTable.Cell>FontAwesome Icon</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The FontAwesome icon to use in the button. The default is <NxCode>faEllipsisV</NxCode>
              {' '} <NxFontAwesomeIcon icon={faEllipsisV}></NxFontAwesomeIcon>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>title</NxTable.Cell>
            <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Describes the text for a tooltip to be placed on the dropdowns' toggle element. For accessibility
              reasons this prop is required on <NxCode>NxIconDropdown</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulIconDropdownExampleCode}
                        liveExample={NxStatefulIconDropdownExample}>
      This example demonstrates a simple NxStatefulDropdown, showing that it tracks
      its own open/closed state with no need for support from the surrounding code.
    </GalleryExampleTile>
  </>;

export default NxStatefulDropdownPage;
