/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxTable, NxP, NxCode, NxTile, NxH3, NxList, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import NxListExamples from './NxListExamples';

const NxListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Lists take many forms:</NxP>
      <NxList className="nx-list--bulleted">
        <NxList.Item>
          <NxList.Text>Simple data lists</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Lists with clickable list items</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Ordered and unordered (bulleted) lists</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Lists with actions</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Lists with items that have multiple lines of text</NxList.Text>
        </NxList.Item>
      </NxList>
      <NxP>Lists can also have modified states depending on their content:</NxP>
      <NxList className="nx-list--bulleted">
        <NxList.Item>
          <NxList.Text>Lists with no data</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Error states</NxList.Text>
        </NxList.Item>
      </NxList>
      <NxP>
        The basic layout is a <NxCode>&lt;ul&gt;</NxCode>. If the list has a title a simple heading
        such as <NxCode>&lt;h3 className="nx-h3"&gt;</NxCode> should be used before the &lt;ul&gt;.
      </NxP>
      <NxP>
        There are also lists that are "clickable", the list items in these lists indicate hover and click states and
        when clicked an event occurs - usually navigation. Clickable lists have hover and disabled states. They share
        error and empty states with default lists.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list</NxCode></NxTable.Cell>
            <NxTable.Cell>Top-Level <NxCode>&lt;ul&gt;</NxCode></NxTable.Cell>
            <NxTable.Cell>The parent list class. It has no bullets.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list--clickable</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-list</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This modifier causes list items to respond to hover events. There is normally a chevron icon on the
              right to make it clear to the user that clicking will navigate away from the page.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list--bulleted</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-list</NxCode></NxTable.Cell>
            <NxTable.Cell>
              If you need a list with bullets. Default styles are provided for three layers of bullets.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list--numbered</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-list</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Used when you need a list that uses numbers/letters for each list item. Default styles are provided for
              three layers: numbers, letters, and roman numerals.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__item</NxCode></NxTable.Cell>
            <NxTable.Cell>The <NxCode>&lt;li&gt;</NxCode> elements within the list</NxTable.Cell>
            <NxTable.Cell>
              This class should be present on all list items within an <NxCode>nx-list</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.selected</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Utility class that goes along with <NxCode>.nx-list__item</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              Use the <NxCode>selected</NxCode> class alongside
              <NxCode>.nx-list__item</NxCode> when a clickable list item is selected
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__text</NxCode></NxTable.Cell>
            <NxTable.Cell>Element within <NxCode>&lt;li&gt;</NxCode></NxTable.Cell>
            <NxTable.Cell>
              The primary text content of the list item, displayed in a heavier font weight.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__subtext</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              When you want a separate section of non-bolded text below the main list item text use
              a <NxCode>&lt;span&gt;</NxCode> with <NxCode>.nx-list__subtext</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__actions</NxCode></NxTable.Cell>
            <NxTable.Cell>A container for buttons inside list items</NxTable.Cell>
            <NxTable.Cell>Use this when you want to have a button on the far right.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__item--empty</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-list__item</NxCode></NxTable.Cell>
            <NxTable.Cell>Used when there are no list items returned.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-list__item--error</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-list__item</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This is added to a list item when the list is in an error state. In this case it's expected that there
              would only be a single list item which contains the error alert.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__item--clickable</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier of <NxCode>.nx-list__item</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Applied to <NxCode>.nx-list__item</NxCode> this allows for the correct styling of
              clickable lists. Ensure that the <NxCode>.nx-list</NxCode> modifier
              {' '}<NxCode>.nx-list--clickable</NxCode> is also used.
              {' '}<NxCode>.nx-list__item--clickable</NxCode> should contain a single button or link as
              children, see below for classes and convenience components.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__btn</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Applied to an <NxCode>&lt;button&gt;</NxCode> used in a clickable list.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-list__link</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Applied to an <NxCode>&lt;a&gt;</NxCode> used in a clickable link list.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Description Lists</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          In addition to ordered and unordered lists, <NxCode>nx-list</NxCode> also supports the
          styling of description lists using the following classes. Terms and descriptions are laid out side-by-side
          in rows. Currently only one description per term, and one term per description, are supported – not multiple.
          For more details see
          the <NxTextLink href="#/pages/Description List">Description List React component page.</NxTextLink>
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Convenience Component</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list--description-list</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;dl&gt;</NxCode> which also
                has <NxCode>.nx-list</NxCode>.
              </NxTable.Cell>
              <NxTable.Cell><NxCode>NxDescriptionList</NxCode></NxTable.Cell>
              <NxTable.Cell>Root class to apply RSC description list styles</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list__item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;div&gt;</NxCode> wrapping <NxCode>&lt;dt&gt;</NxCode>{' '}
                and <NxCode>&lt;dd&gt;</NxCode> elements
              </NxTable.Cell>
              <NxTable.Cell><NxCode>NxDescriptionList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Each <NxCode>&lt;dt&gt;</NxCode>/<NxCode>&lt;dd&gt;</NxCode> pairing
                should be wrapped in a div which is styled similarly to an item row in a normal nx-list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list__term</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>&lt;dt&gt;</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxDescriptionList.Term</NxCode></NxTable.Cell>
              <NxTable.Cell>Styles the description term elements</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list__description</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>&lt;dd&gt;</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxDescriptionList.Description</NxCode></NxTable.Cell>
              <NxTable.Cell>Styles the description elements</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxInfoAlert>
        Note that some of these examples are shown in React as they includes specific icons. When working in
        React, <NxCode>NxFontAwesomeIcon</NxCode> should be used as shown to get these icons.
        When not working in React, check the FontAwesome 5 documentation for alternative ways to include the icons.
      </NxInfoAlert>
    </GalleryDescriptionTile>
    <NxListExamples />
  </>;

export default NxListPage;
