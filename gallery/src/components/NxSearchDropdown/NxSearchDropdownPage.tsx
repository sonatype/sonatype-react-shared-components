/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxSearchDropdownExample from './NxSearchDropdownExample';
//import NxSearchDropdownDisabledExample from './NxSearchDropdownDisabledExample';

const nxSearchDropdownExampleCode = require('./NxSearchDropdownExample?raw');//,
    //nxSearchDropdownDisabledExampleCode = require('./NxSearchDropdownDisabledExample?raw');

const NxSearchDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A search text input that shows matching results in a dropdown for the user to select. Most commonly used
        when the search requires a backend query.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxSearchDropdown</NxCode> takes all props that are available on <NxCode>NxFilterInput</NxCode> as
          well as the following:
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
              <NxTable.Cell><NxCode>loading</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Set to true when the search results are currently being loaded</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>matches</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Array of objects containing an <NxCode>id</NxCode> and a <NxCode>displayName</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The results of querying the current filter input value, which are to be displayed in the search
                dropdown for user selection.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSelect</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Function (match =&gt; void)
              </NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The callback function to execute when the user selects one of the matches from the dropdown menu.
                Receives the entire selected item from the <NxCode>matches</NxCode> array as an argument.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-search-dropdown-basic-example"
                        codeExamples={nxSearchDropdownExampleCode}
                        liveExample={NxSearchDropdownExample}>
      An example of an <NxCode>NxSearchDropdown</NxCode> tied to a fake backend.
    </GalleryExampleTile>
  </>;

export default NxSearchDropdownPage;
