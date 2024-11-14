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
import NxTransferListHalfCustomTooltipExample from './NxTransferListHalfCustomTooltipExample';
import NxTransferListHalfOrderingExample from './NxTransferListHalfOrderingExample';
import NxTransferListHalfDisableTransferExample from './NxTransferListHalfDisableTransferExample';
import NxTransferListHalfOrderingWithDisableTransferExample
  from './NxTransferListHalfOrderingWithDisableTransferExample';
import NxTransferListHalfLongListExample from './NxTransferListHalfLongListExample';

import '../NxTooltip/NxTooltipExample.scss';

const nxTransferListHalfExample = require('./NxTransferListHalfExample?raw'),
    nxTransferListHalfCustomTooltipExample = require('./NxTransferListHalfCustomTooltipExample?raw'),
    nxTransferListHalfOrderingExample = require('./NxTransferListHalfOrderingExample?raw'),
    tooltipScss = require('../NxTooltip/NxTooltipExample.scss?raw'),
    nxTransferListHalfDisableTransferExample = require('./NxTransferListHalfDisableTransferExample?raw'),
    nxTransferListHalfOrderingWithDisableTransferExample =
     require('./NxTransferListHalfOrderingWithDisableTransferExample?raw'),
    nxTransferListHalfLongListExample = require('./NxTransferListHalfLongListExample?raw');

const tooltipExampleCode = [nxTransferListHalfCustomTooltipExample, { language: 'scss', content: tooltipScss }];

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
              <NxTable.Cell>The label to display over the list. Must not be null.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>filterValue</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>Current value for the filter box</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onFilterChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>Handler which fires when the filter value is changed by the user</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>showMoveAll</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Whether or not to show the "Remove All"/"Transfer All" button</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onMoveAll</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Handler for the user activating the "Remove All"/"Transfer All" button.
                It should be provided when <NxCode>showMoveAll</NxCode> is true.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>items</NxCode></NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The unfiltered list of items to display within the component</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>isSelected</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell>
                Whether this component represents selected or unselected items. This affects what icons are used and
                the wording of the Move All button. Defaults to true.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onItemChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Handler function for the user activating an item in the list. This handler will be passed two
                arguments: whether the item was currently selected (i.e. the value of
                the <NxCode>isSelected</NxCode> prop) and the id of the item. When not provided, it disables
                the ability to transfer items by hiding the item's icon.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>footerContent</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Text to display in the footer of the component, typically expressing the number of items in the list
                and potentially a number of possible or available items.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>filterFn</NxCode></NxTable.Cell>
              <NxTable.Cell>Filter</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Case-insensitive substring match</NxTable.Cell>
              <NxTable.Cell>
                The function to use to determine if a given item matches a given filter string. The default should
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
                Handler for the user activating the reordering buttons within the list. Receives two arguments:
                the id of the item being reordered, and the direction in which it is being moved as a
                number (-1 for towards the beginning of the list, 1 for towards the end of the list). While this
                prop is optional, it should be provided when <NxCode>allowReordering</NxCode> is true.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>allowReordering</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Whether the reordering buttons should be displayed on each item</NxTable.Cell>
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
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>id</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>string | number</NxCode>, or some subclass thereof (<NxCode>string</NxCode> by default)
              </NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The unique identifier for this item</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>displayName</NxTable.Cell>
              <NxTable.Cell><NxCode>ReactNode</NxCode></NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                The text to display in the UI for this item. In order for filtering to work properly, all text content
                must be immediately present in the JSX itself, and not implemented by child components
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>tooltip</NxTable.Cell>
              <NxTable.Cell>string | TooltipProps</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Normally – when this property is <em>not</em> specified – the display text of the data item is wrapped
                in an <NxCode>NxOverflowTooltip</NxCode>, such that if its <NxCode>displayName</NxCode> overflows,
                it gets a tooltip displaying the full <NxCode>displayName</NxCode>. If
                this <NxCode>tooltip</NxCode> property is specified however, instead of
                an <NxCode>NxOverflowTooltip</NxCode> it gets a regular <NxCode>NxTooltip</NxCode> configured with the
                specified props or, if the value of this property is a string, that string as the tooltip title. The
                effect being that the properties specified here are used to construct a tooltip for the data item which
                is active (on hover) regardless of whether the text is overflowing. Note that this replaces the default
                overflow tooltip, and so must account for the usability that would have been provided by that tooltip as
                well, e.g. it should include the full <NxCode>displayName</NxCode> so that that value is still fully
                visible in the event of overflow.
              </NxTable.Cell>
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
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> without reordering. Note that one of the items uses
      JSX to include an icon within its displayName.
    </GalleryExampleTile>

    <GalleryExampleTile title="Ordering Example"
                        id="nx-transfer-list-half-ordering-example"
                        codeExamples={nxTransferListHalfOrderingExample}
                        liveExample={NxTransferListHalfOrderingExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> with reordering. Additionally
      the <NxCode>isSelected</NxCode> and <NxCode>showMoveAll</NxCode> props demonstrate their opposite values
      compared to the example above, and the filterFn prop is also demonstrated
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Tooltip Example"
                        id="nx-transfer-list-half-custom-tooltip-example"
                        codeExamples={tooltipExampleCode}
                        liveExample={NxTransferListHalfCustomTooltipExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> with custom tooltips on the data items. The first item
      demonstrates how a tooltip props object can be passed as the <NxCode>tooltip</NxCode> parameter, while the
      remaining items demonstrate the shorthand of passing a string as the <NxCode>tooltip</NxCode>.
    </GalleryExampleTile>
    <GalleryExampleTile title="Disable Transfer Example"
                        id="nx-transfer-list-half-disable-transfer-example"
                        codeExamples={nxTransferListHalfDisableTransferExample}
                        liveExample={NxTransferListHalfDisableTransferExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> with transfer feature disabled
      when <NxCode>onItemChange</NxCode> prop is not provided.
    </GalleryExampleTile>
    <GalleryExampleTile title="Ordering with Disable Transfer Example"
                        id="nx-transfer-list-half-ordering-with-disable-transfer-example"
                        codeExamples={nxTransferListHalfOrderingWithDisableTransferExample}
                        liveExample={NxTransferListHalfOrderingWithDisableTransferExample}>
      Demonstrates an ordering <NxCode>NxTransferListHalf</NxCode> with transfer feature disabled.
    </GalleryExampleTile>
    <GalleryExampleTile title="Long List Example"
                        id="nx-transfer-list-half-long-list-example"
                        codeExamples={nxTransferListHalfLongListExample}
                        liveExample={NxTransferListHalfLongListExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> with a long list. Previous versions of this component suffered from performance
      issues when the list is very long. To address this, it has been updated to use <NxCode>NxScrollRender</NxCode> to render
      efficiently. Note that even using a long list, rendering and filtering are not affected.
    </GalleryExampleTile>
  </>;

export default NxTransferListPage;
