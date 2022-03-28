/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxP, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTransferListHalfExample from './NxTransferListHalfExample';
import NxTransferListHalfOrderingExample from './NxTransferListHalfOrderingExample';

const nxTransferListHalfExample = require('./NxTransferListHalfExample?raw'),
    nxTransferListHalfOrderingExample = require('./NxTransferListHalfOrderingExample?raw');

const NxTransferListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxTransferListHalf</NxCode> is a building block for larger multi-select components such
        as <NxCode>NxTransferList</NxCode> and <NxCode>NxSearchTransferList</NxCode>. It is exposed separately for
        cases where multi-selection workflows require more flexibility and cannot be met by those two components.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell><NxCode>label</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>This is the label to display over the list; it must not be null.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>filterValue</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>This is the current value for the filter box.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onFilterChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>This function fires when the filter value is changed by the user.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>showMoveAll</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>When this prop is true, the "Remove All"/"Transfer All" button is shown.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onMoveAll</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                This function fires when the user activates the "Remove All"/"Transfer All" button.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>items</NxCode></NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>This is the unfiltered list of items to display within the component.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>isSelected</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                This prop specifies whether this component represents selected or unselected items. This affects what 
                icons are used and the wording of the Move All button.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onItemChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                This function fires when the user activates an item in the list. This handler will be passed two
                arguments: whether the item was currently selected (i.e. the value of
                the <NxCode>isSelected</NxCode> prop) and the id of the item.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>footerContent</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                This text is displayed in the footer of the component, typically expressing the number of items in the
                list and potentially a number of possible or available items.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>filterFn</NxCode></NxTable.Cell>
              <NxTable.Cell>Filter</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Case-insensitive substring match</NxTable.Cell>
              <NxTable.Cell>
                This function determines if a given item matches a given filter string. The default should
                be adequate for most cases but this customization point is provided in case a different strategy is
                desired.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onReorderItem</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                This function fires when the user uses the reordering buttons within the list. It receives two
                arguments: the list index of the item being reordered, and the direction in which it is being moved as a
                number (-1 for towards the beginning of the list, 1 for towards the end of the list). While this
                prop is optional, it should be provided when <NxCode>allowReordering</NxCode> is true.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>allowReordering</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>This prop determines whether the reordering buttons are shown.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Data Items</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>Each item in the <NxCode>items</NxCode> list is expected to support the following interface:</NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Property</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>id</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>string | number</NxCode>, or some subclass thereof (<NxCode>string</NxCode> by default)
              </NxTable.Cell>
              <NxTable.Cell>The unique identifier for this item</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>displayName</NxTable.Cell>
              <NxTable.Cell><NxCode>string</NxCode></NxTable.Cell>
              <NxTable.Cell>The text to display in the UI for this item</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Utility Classes</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-transfer-list--full-width</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The transfer list will expand to fit the width of its container rather than being constrained to a
                static width as it is by default.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Example"
                        id="nx-transfer-list-half-example"
                        codeExamples={nxTransferListHalfExample}
                        liveExample={NxTransferListHalfExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> without reordering.
    </GalleryExampleTile>

    <GalleryExampleTile title="Ordering Example"
                        id="nx-transfer-list-half-ordering-example"
                        codeExamples={nxTransferListHalfOrderingExample}
                        liveExample={NxTransferListHalfOrderingExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> with reordering. Additionally
      the <NxCode>isSelected</NxCode> and <NxCode>showMoveAll</NxCode> props demonstrate their opposite values
      compared to the example above, and the filterFn prop is also demonstrated
    </GalleryExampleTile>
  </>;

export default NxTransferListPage;
