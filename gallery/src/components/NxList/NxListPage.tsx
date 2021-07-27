/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxP, NxTable, NxTableBody, NxTableCell,
  NxTableHead, NxTableRow, NxCode, NxListV2 } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile} from '../../gallery-components/GalleryTiles';
import NxListsExamples from './NxListExamples';

const NxAlertPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Lists take many forms:</NxP>
      <NxListV2 bulleted>
        <NxListV2.Item>Simple data lists</NxListV2.Item>
        <NxListV2.Item>Lists with clickable list items</NxListV2.Item>
        <NxListV2.Item>Lists with bullets</NxListV2.Item>
        <NxListV2.Item>Lists with actions</NxListV2.Item>
        <NxListV2.Item>Lists with items that have multiple lines of text</NxListV2.Item>
      </NxListV2>
      <NxP>Lists can also have modified states depending on their content:</NxP>
      <NxListV2 bulleted>
        <NxListV2.Item>Lists with no data</NxListV2.Item>
        <NxListV2.Item>Error states</NxListV2.Item>
      </NxListV2>
      <NxP>
        There are also lists that are "clickable". The list items in these lists indicate hover and click states and
        when clicked, an event occurs - usually navigation. Clickable lists have hover and disabled states. They share
        error and empty states with default lists.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Component</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>Parent; Top-Level</NxTable.Cell>
            <NxTable.Cell>This is the parent list class. By default, it has no bullets. In order to have a
              bulleted list, the prop <NxCode>bulleted</NxCode> can be provided.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Title</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This is the title of the list.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Item</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This is the standard list element that is not clickable, does not respond to hover events, and
              does not have selected and disabled states.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Button</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This list element that is clickable, responds to hover events, and has selected and disabled states.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Link</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This list element behaves as a link, i.e. an <NxCode>{'<a>'}</NxCode> tag, and requires
              a <NxCode>{'href'}</NxCode> prop. This element is also clickable, responds to hover events,
              and has selected and disabled states.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Text</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList.Item</NxCode>, <NxCode>NxList.Button</NxCode>,
              or <NxCode>NxList.Link</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              The primary text content of the list item, displayed in a heavier font weight.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Subtext</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList.Item</NxCode>, <NxCode>NxList.Button</NxCode>,
              or <NxCode>NxList.Link</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              The secondary text content of the list item displayed as non-bolded text.
              The subtext is displayed below the bolded, main list item text.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Actions</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList.Item</NxCode></NxTable.Cell>
            <NxTable.Cell>A container for buttons inside list items. Use this when you want to have
              a button/buttons on the far right.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Empty</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>Used when there are no list items returned. In this case it's expected that there
              would only be a single list item which contains the empty element.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Error</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This is added to a list item when the list is in an error state. In this case it's expected that there
              would only be a single list item which contains the error element.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>NxList.Loading</NxCode></NxTable.Cell>
            <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
            <NxTable.Cell>Used when list items are being loaded. In this case, it's expected that there
              would only be a single list item which contains the loading element.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__title">
          <h3 className="nx-h3">Description Lists</h3>
        </header>
        <NxP>
          In addition to ordered and unordered lists, <NxCode>nx-list</NxCode> also supports the
          styling of description lists using the following classes. Terms and descriptions are laid out side-by-side
          in rows. Currently only one description per term, and one term per description, are supported – not multiple.
        </NxP>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Class</NxTableCell>
              <NxTableCell>Convenience Component</NxTableCell>
              <NxTableCell>Location</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell><NxCode>.nx-list--description-list</NxCode></NxTableCell>
              <NxTableCell/>
              <NxTableCell>
                <NxCode>&lt;dl&gt;</NxCode> which also
                has <NxCode>.nx-list</NxCode>.
              </NxTableCell>
              <NxTableCell>Root class to apply RSC description list styles</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><NxCode>.nx-list__item</NxCode></NxTableCell>
              <NxTableCell><NxCode>NxList.Item</NxCode></NxTableCell>
              <NxTableCell>
                <NxCode>&lt;div&gt;</NxCode> wrapping <NxCode>&lt;dt&gt;</NxCode>{' '}
                and <NxCode>&lt;dd&gt;</NxCode> elements
              </NxTableCell>
              <NxTableCell>
                Each <NxCode>&lt;dt&gt;</NxCode>/<NxCode>&lt;dd&gt;</NxCode> pairing
                should be wrapped in a div which is styled similarly to an item row in a normal nx-list.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><NxCode>.nx-list__term</NxCode></NxTableCell>
              <NxTableCell><NxCode>NxList.Term</NxCode></NxTableCell>
              <NxTableCell><NxCode>&lt;dt&gt;</NxCode></NxTableCell>
              <NxTableCell>Styles the description term elements</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell><NxCode>.nx-list__description</NxCode></NxTableCell>
              <NxTableCell><NxCode>NxList.Description</NxCode></NxTableCell>
              <NxTableCell><NxCode>&lt;dd&gt;</NxCode></NxTableCell>
              <NxTableCell>Styles the description elements</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
      <NxInfoAlert>
        Note that some of these examples are shown in React as they includes specific icons. When working in
        React, <NxCode>NxFontAwesomeIcon</NxCode> should be used as shown to get these icons.
        When not working in React, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxListsExamples />
  </>;

export default NxAlertPage;
