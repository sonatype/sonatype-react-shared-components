/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTable, NxTextLink, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import Example from './NxSearchTransferListExample';
import ComplexExample from './NxSearchTransferListComplexExample';
import CustomTooltipExample from './NxSearchTransferListCustomTooltipExample';

import '../NxTooltip/NxTooltipExample.scss';

const exampleCode = require('./NxSearchTransferListExample?raw'),
    customTooltipExample = require('./NxSearchTransferListCustomTooltipExample?raw'),
    complexExampleCode = require('./NxSearchTransferListComplexExample?raw'),
    tooltipScss = require('../NxTooltip/NxTooltipExample.scss?raw');

const tooltipExampleCode = [customTooltipExample, { language: 'scss', content: tooltipScss }];

const NxSearchTransferListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxSearchTransferList</NxCode> provides the ability to repeatedly search an asynchronous data source
        (typically a backend server) and then to multi-select from the search results. A common use-case would be
        selecting users to add to a role. This component is named after the fact that its user interface shares
        parts with <NxCode>NxTransferList</NxCode> – <NxCode>NxSearchTransferList</NxCode> is essentially a
        combination of an <NxCode>NxSearchDropdown</NxCode> with half of an <NxCode>NxTransferList</NxCode>.
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
              <NxTable.Cell><NxCode>searchText</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The text currently entered in the search box.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSearchTextChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (string =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>Callback fired whenver the value in the search box is changed by the user </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSearch</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (string =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback fired whenever a search of the asynchronous data source should be executed. This occurs
                whenever the trimmed search text is changed, whenever the search dropdown's error Retry button
                is clicked, and whenever the search box or dropdown gets focus while in an error state. This callback
                should immediately change the <NxCode>loading</NxCode> prop to true, debounce as described in
                the <NxCode>NxSearchDropdown</NxCode> documentation, and then perform the asynchronous query, updating
                the <NxCode>loading</NxCode>, <NxCode>searchMatches</NxCode>, and
                (if necessary) <NxCode>loadError</NxCode> props after it completes.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>loading</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>Whether the search results are currently loading</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>loadError</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                If defined, specifies an error that occurred while performing the asynchronous search
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>searchMatches</NxCode></NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Results of the asynchronous query, which are to be displayed in the search dropdown
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSearchMatchSelect</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (DataItem =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback for when the user selects a match from the search results. This callback should update
                the <NxCode>addedItems</NxCode> prop to include the selected item.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>addedItemsLabel</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"Items Added"</NxTable.Cell>
              <NxTable.Cell>The label to display above the list of added items</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>addedItemsFilter</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The text on which the list of added items is currently being filtered, user-controllable via the
                filter input that appears just above the list
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onAddedItemsFilterChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (string =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback fired whenver the value in the added items filter box is changed by the user. This callback
                should update the <NxCode>addedItemsFilter</NxCode> prop.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>showRemoveAll</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell>Whether to show the "Remove All" button</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>addedItems</NxCode></NxTable.Cell>
              <NxTable.Cell>DataItem[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The items that have been selected</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onRemove</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (DataItem[] =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback for when one or more items are removed by the user from the added items list
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>addedItemsCountFormatter</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (number =&gt; string)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"x items Added"</NxTable.Cell>
              <NxTable.Cell>
                Function to generate the count text shown at the bottom of the list, given the count as a number
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>filterFn</NxCode></NxTable.Cell>
              <NxTable.Cell>Function ((filterText, itemDisplayName) =&gt; boolean)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Case-insensitive substring match</NxTable.Cell>
              <NxTable.Cell>
                The logic by which to filter the added items list when addedItemsFilter is non-empty
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
                <NxCode>NxSearchTransferList</NxCode> supports any html attribute that's normally supported by{' '}
                HTML <NxCode>&lt;div&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Data Items</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Each item in the <NxCode>searchMatches</NxCode> and <NxCode>addedItems</NxCode> lists is expected to
          support the following interface:
        </NxP>
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
                Normally – when this property is <em>not</em> specified – the display text of a selected data item is
                wrapped in an <NxCode>NxOverflowTooltip</NxCode>, such that if its <NxCode>displayName</NxCode>{' '}
                overflows, it gets a tooltip displaying the full <NxCode>displayName</NxCode>. If
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
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-search-transfer-list-example"
                        liveExample={Example}
                        codeExamples={[exampleCode]}>
      A basic example of an <NxCode>NxSearchTransferList</NxCode> showing usage of the required props.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        id="nx-search-transfer-list-complex-example"
                        liveExample={ComplexExample}
                        codeExamples={[complexExampleCode]}>
      An example of an <NxCode>NxSearchTransferList</NxCode> showing usage of the all props. In this contrived example,
      the asynchronous data store only queries successfully once, and errors out on successive queries.
    </GalleryExampleTile>

    <GalleryExampleTile title="Custom Tooltip Example"
                        id="nx-search-transfer-list-custom-tooltip-example"
                        codeExamples={tooltipExampleCode}
                        liveExample={CustomTooltipExample}>
      Demonstrates an <NxCode>NxSearchTransferList</NxCode> with custom tooltips on the data items. The first item
      demonstrates how a tooltip props object can be passed as the <NxCode>tooltip</NxCode> parameter, while the
      remaining items demonstrate the shorthand of passing a string as the <NxCode>tooltip</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxSearchTransferListPage;
