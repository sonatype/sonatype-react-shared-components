/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulSearchDropdownExample from './NxStatefulSearchDropdownExample';

const nxStatefulSearchDropdownExampleCode = require('./NxStatefulSearchDropdownExample?raw');

const NxSearchDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulSearchDropdown</NxCode> is a wrapper around <NxCode>NxSearchDropdown</NxCode> that wraps
        the state management of the filter box's contents. Note that it does <em>not</em> manage the loading state,
        as that state is inevitably wrapped up in logic external to the UI component.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxStatefulSearchDropdown</NxCode> takes the same props as <NxCode>NxSearchDropdown</NxCode>,
          with the exception of <NxCode>searchText</NxCode> and <NxCode>onSearchTextChange</NxCode>, since it manages
          those internally.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>defaultSearchText</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>(empty string)</NxTable.Cell>
              <NxTable.Cell>
                The initial value for the search text. Note that if this is provided, the <NxCode>matches</NxCode> and
                <NxCode>loading</NxCode> props should be set to match. That is, if non-empty search text is set by
                default, be sure to actually initiate a search on that text at or before the time the component is
                created. Note that the dropdown with the loading spinner and results will not appear until the user 
                navigates to the component.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        codeExamples={nxStatefulSearchDropdownExampleCode}
                        liveExample={NxStatefulSearchDropdownExample}>
      An example of an <NxCode>NxStatefulSearchDropdown</NxCode> tied to a fake backend.
    </GalleryExampleTile>
  </>;

export default NxSearchDropdownPage;
