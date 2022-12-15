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
import NxFilterDropdownNonDefaultExample from './NxFilterDropdownNonDefaultExample';
import NxFilterDropdownShortExample from './NxFilterDropdownShortExample';
import NxFilterDropdownTableExample from './NxFilterDropdownTableExample';
import './NxFilterDropdownTableExample.scss';

const nxFilterDropdownCode = require('./NxFilterDropdownExample?raw'),
    nxFilterDropdownNonDefaultCode = require('./NxFilterDropdownNonDefaultExample?raw'),
    nxFilterDropdownShortCode = require('./NxFilterDropdownShortExample?raw'),
    nxFilterDropdownTableCode = require('./NxFilterDropdownTableExample?raw'),
    nxFilterDropdownTableStyles = require('./NxFilterDropdownTableExample.scss?raw');

const tableExampleCode = [nxFilterDropdownTableCode, { language: 'scss', content: nxFilterDropdownTableStyles }];

const NxFilterDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxFilterDropdown</NxCode> consists of a dropdown of checkboxes intended to be used as a filter.
        In many ways it is similar to <NxCode>NxCollapsibleMultiSelect</NxCode>, with on major difference being that
        when it is expanded, it opens a floating menu containing the checkboxes rather than expanding the bounding
        box of the overall component in order to make space for them. This makes it a good option for table filter rows,
        where a sizing change due to filter expansion would be undesirable.  This component would be a good option to
        filter a table by a column that has a relatively small set of discrete values, where the user may want to
        filter by more than one of those values at a time. For this scenario, an <NxCode>NxFilterDropdown</NxCode>
        may be added to the table filter header.
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
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>options</NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell/>
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
              <NxTable.Cell/>
              <NxTable.Cell>Whether the dropdown is currently expanded.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onToggleCollapse</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell/>
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
              <NxTable.Cell/>
              <NxTable.Cell>
                A set containing the ids of all items from the <NxCode>options</NxCode> array which are currently
                selected.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onChange</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                A function which is called whenever the user changes their selection. This function is passed two
                arguments: the new <NxCode>Set</NxCode> of selected ids, and, if the user toggled a specific item,
                the id of that item. If the user uses the Reset button to clear their selection, this function is called
                without a second argument.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>showReset</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>
                Whether or not to show the Reset button within the dropdown menu. Defaults to true.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>placeholder</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>"Filter"</NxTable.Cell>
              <NxTable.Cell>
                Text to display in the dropdown toggle box when no filters are active.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Style Variations</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxFilterDropdown</NxCode> is a variation of <NxCode>NxDropdown</NxCode> and as such supports the
          following CSS classes for stylistic variation.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-dropdown--short</NxCode></NxTable.Cell>
              <NxTable.Cell>Renders the component with a width of 150px rather than the default 250px</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Filter Dropdown Simple Example"
                        id="nx-filter-dropdown-example"
                        liveExample={NxFilterDropdownExample}
                        codeExamples={nxFilterDropdownCode}>
      An <NxCode>NxFilterDropdown</NxCode> wrapped in an <NxCode>NxFormGroup</NxCode> in order to render a label.
    </GalleryExampleTile>

    <GalleryExampleTile title="Filter Dropdown Non-default Example"
                        id="nx-filter-dropdown-non-default-example"
                        liveExample={NxFilterDropdownNonDefaultExample}
                        codeExamples={nxFilterDropdownNonDefaultCode}>
      An <NxCode>NxFilterDropdown</NxCode> with non-default values set for
      the <NxCode>placeholder</NxCode> and <NxCode>showReset</NxCode> props.
    </GalleryExampleTile>

    <GalleryExampleTile title="Filter Dropdown Short Example"
                        id="nx-filter-dropdown-short-example"
                        liveExample={NxFilterDropdownShortExample}
                        codeExamples={nxFilterDropdownShortCode}>
      An <NxCode>NxFilterDropdown</NxCode> with the <NxCode>nx-dropdown--short</NxCode> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Filter Dropdown Table Example"
                        id="nx-filter-dropdown-table-example"
                        liveExample={NxFilterDropdownTableExample}
                        codeExamples={tableExampleCode}>
      An example of an <NxCode>NxFilterDropdown</NxCode> within a table displaying the glyphs and unicode{' '}
      <NxTextLink href="https://www.compart.com/en/unicode/category" external>general categories</NxTextLink> of the
      first 128 unicode codepoints. Note that in this example, the dropdown's "label" is effectively the header
      of its table column.
    </GalleryExampleTile>
  </>;

export default NxFilterDropdownPage;
