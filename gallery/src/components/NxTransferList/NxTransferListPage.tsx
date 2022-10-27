/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxP, NxTextLink, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTransferListExample from './NxTransferListExample';
import NxTransferListComplexExample from './NxTransferListComplexExample';
import NxTransferListFullWidthExample from './NxTransferListFullWidthExample';
import NxTransferListWithReorderingExample from './NxTransferListWithReorderingExample';
import NxTransferListCustomTooltipExample from './NxTransferListCustomTooltipExample';

import '../NxTooltip/NxTooltipExample.scss';

const nxTransferListExample = require('./NxTransferListExample?raw'),
    nxTransferListComplexExample = require('./NxTransferListComplexExample?raw'),
    nxTransferListFullWidthExample = require('./NxTransferListFullWidthExample?raw'),
    nxTransferListCustomTooltipExample = require('./NxTransferListCustomTooltipExample?raw'),
    nxTransferListWithReorderingExample = require('./NxTransferListWithReorderingExample?raw'),
    tooltipScss = require('../NxTooltip/NxTooltipExample.scss?raw');

const tooltipExampleCode = [nxTransferListCustomTooltipExample, { language: 'scss', content: tooltipScss }];

const NxTransferListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxTransferList</NxCode> provides multi-select capabilities suitable for large datasets. It consists
        of two columns which together display all (by default) options within the selectable data set. The left
        column displays those options which are not currently selected (and which are thus available for selection),
        while the right column displays the options which are currently selected, and which the user may deselect.
      </NxP>
      <NxP>
        Both columns are independently filterable in order to allow the user to find items within large data sets.
        Optional buttons to move all currently visible items from one column to the other are available as well.
        At the bottom of the component, counts of the available and selected ("transferred") items are visible.
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
              <NxTable.Cell><NxCode>allItems</NxCode></NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The full list of items available for (de)selection within this component. The ordering of this list
                dictates the display order of the items. Each item must have a unique <NxCode>id</NxCode>. See
                below for details on the expected structure of items.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>selectedItems</NxCode></NxTable.Cell>
              <NxTable.Cell>Set | Array</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                A Set, or an Array if <NxCode>allowReordering</NxCode> is set to true, containing the ids of the
                items which are selected – that is, the ones which should
                appear on the right side of the component. Be sure to always provide a
                fresh <NxCode>Set</NxCode> or <NxCode>Array</NxCode> instance
                when updating this prop, rather than mutating the same <NxCode>Set</NxCode> or <NxCode>Array</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>allowReordering</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Allow reordering of selected items.
                When this is enabled, buttons appear next to each selected item, allowing the user to reorder them.
                Additionally, the ordering of the selected list is no longer dictated by
                the order of <NxCode>allItems</NxCode>. Instead, it is determined by the order in which
                the user selects the item. The last selected item appears at the bottom of the selected list.
                Furthermore, if this is set to true, <NxCode>selectedItems</NxCode> must be
                an <NxCode>Array</NxCode> instead of a <NxCode>Set</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>availableItemsLabel</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"Available Items"</NxTable.Cell>
              <NxTable.Cell>
                The header text to display above the column of unselected items
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>selectedItemsLabel</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"Transferred Items"</NxTable.Cell>
              <NxTable.Cell>
                The header text to display above the column of selected items
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>availableItemsCountFormatter</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"x items available"</NxTable.Cell>
              <NxTable.Cell>
                A function which returns the string used to display the count of available items to the user
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>selectedItemsCountFormatter</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"x items transferred"</NxTable.Cell>
              <NxTable.Cell>
                A function which returns the string used to display the count of selected items to the user
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>showMoveAll</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Whether the "Transfer All" and "Remove All" buttons should be displayed
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>availableItemsFilter</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The current filter value for the Available (unselected) items. Impacts both which items are visible
                and which items are moved by the "Transfer All" button.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>selectedItemsFilter</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The current filter value for the Selected (transferred) items. Impacts both which items are visible
                and which items are moved by the "Remove All" button.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onAvailableItemsFilterChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback for when the user changes the value of the Available Items filter. Receives the same
                parameters as the <NxCode>NxFilterInput onChange</NxCode> prop.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSelectedItemsFilterChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback for when the user changes the value of the Selected Items filter. Receives the same
                parameters as the <NxCode>NxFilterInput onChange</NxCode> prop.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback for when the user selects or unselects one or more items. Receives the
                new <NxCode>Set</NxCode>, or <NxCode>Array</NxCode> if <NxCode>allowReordering</NxCode> is true,
                of selected ids as a parameter.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>filterFn</NxCode></NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Case-insensitive substring matching</NxTable.Cell>
              <NxTable.Cell>
                The function to use to determine if a given item matches a given filter string. The default should
                be adequate for most cases but this customization point is provided in case a different strategy is
                desired.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  Div Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxTransferList</NxCode> supports any html attribute that's normally supported by HTML{' '}
                <NxCode>&lt;div&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Data Items</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>Each item in the <NxCode>allItems</NxCode> list is expected to support the following interface:</NxP>
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
                The transfer list will expand or contract to fit the width of its container rather than being
                constrained to a static width as it is by default.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Usage Notes</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxTransferList</NxCode> would typically be used within a form, and should typically be wrapped
          in an <NxCode>NxFieldset</NxCode> in order to provide a label and spacing for the form field represented
          by this component. See the <NxTextLink>Form Layout Page</NxTextLink> for an example.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Example"
                        id="nx-transfer-list-minimal-example"
                        codeExamples={nxTransferListExample}
                        liveExample={NxTransferListExample}>
      Demonstrates an <NxCode>NxTransferList</NxCode> with minimal options.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        id="nx-transfer-list-complex-example"
                        codeExamples={nxTransferListComplexExample}
                        liveExample={NxTransferListComplexExample}>
      Demonstrates an <NxCode>NxTransferList</NxCode> with the "move all" buttons enabled and a
      custom regex-based <NxCode>filterFn</NxCode> defined.
    </GalleryExampleTile>

    <GalleryExampleTile title="Full Width Example"
                        id="nx-transfer-list-full-width-example"
                        codeExamples={nxTransferListFullWidthExample}
                        liveExample={NxTransferListFullWidthExample}>
      Demonstrates an <NxCode>NxTransferList</NxCode> with the "full width" modifier class.
    </GalleryExampleTile>

    <GalleryExampleTile title="Reordering Example"
                        id="nx-transfer-list-with-reordering"
                        codeExamples={nxTransferListWithReorderingExample}
                        liveExample={NxTransferListWithReorderingExample}>
      Demonstrates an <NxCode>NxTransferList</NxCode> with reordering enabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Tooltip Example"
                        id="nx-transfer-list-custom-tooltip-example"
                        codeExamples={tooltipExampleCode}
                        liveExample={NxTransferListCustomTooltipExample}>
      Demonstrates an <NxCode>NxTransferList</NxCode> with custom tooltips on the data items. The first item
      demonstrates how a tooltip props object can be passed as the <NxCode>tooltip</NxCode> parameter, while the
      remaining items demonstrate the shorthand of passing a string as the <NxCode>tooltip</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTransferListPage;
