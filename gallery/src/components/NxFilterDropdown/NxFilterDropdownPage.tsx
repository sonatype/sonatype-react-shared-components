/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTable, NxTextLink, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFilterDropdownExample from './NxFilterDropdownExample';
import './NxFilterDropdownExample.scss';

const nxFilterDropdownCode = require('./NxFilterDropdownExample?raw'),
    nxFilterDropdownStyles = require('./NxFilterDropdownExample.scss?raw');

const NxFilterDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        It is sometimes desired to filter a table by a column that has a relatively small set of discrete values,
        where the user may want to filter by more than one of those values at a time. For this scenario, a dropdown of
        checkboxes may be added to the table filter header. <NxCode>NxFilterDropdown</NxCode> implements this type
        of dropdown.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>options</NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>
                List of options to be rendered as checkboxes. Each option is expected to be an object containing
                an <NxCode>id</NxCode> and a <NxCode>displayName</NxCode>. <NxCode>id</NxCode> may be either a string
                or a number.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isOpen</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>Whether the dropdown is currently expanded</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onToggleCollapse</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>
                A function to execute whenever the dropdown is toggled. This toggling occurs when the dropdown button
                is clicked and also, if the dropdown is currently open, whenever a click occurs anywhere outside of the
                dropdown menu and any time the ESC key is pressed while focus is within the dropdown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>selectedIds</NxTable.Cell>
              <NxTable.Cell>Set</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>
                A set containing the ids of all items from the <NxCode>options</NxCode> array which are currently
                selected
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onChange</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>
                A function which is called whenever the user changes their selection. This function is passed two
                arguments: the new <NxCode>Set</NxCode> of selected ids, and, if the user toggled a specific item,
                the id of that item. If the user uses the Reset button to clear their selection, this function is called
                without a second argument.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Filter Dropdown Example"
                        id="nx-filter-dropdown-example"
                        liveExample={NxFilterDropdownExample}
                        codeExamples={[nxFilterDropdownCode, { language: 'scss', content: nxFilterDropdownStyles }]}>
      An example of an <NxCode>NxFilterDropdown</NxCode> displaying the glyphs and unicode{' '}
      <NxTextLink href="https://www.compart.com/en/unicode/category" external>general categories</NxTextLink> of the
      first 128 unicode codepoints.
    </GalleryExampleTile>
  </>;

export default NxFilterDropdownPage;
