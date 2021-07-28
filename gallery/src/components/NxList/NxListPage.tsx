/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxListV2, NxTextLink, NxInfoAlert, NxTable } from '@sonatype/react-shared-components';
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

      <section className="nx-tile-subsection">
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>component</NxTable.Cell>
              <NxTable.Cell>prop</NxTable.Cell>
              <NxTable.Cell>type</NxTable.Cell>
              <NxTable.Cell>required</NxTable.Cell>
              <NxTable.Cell>details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>NxList</NxTable.Cell>
              <NxTable.Cell>bulleted</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Used to show a bulleted list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>NxList.Button</NxTable.Cell>
              <NxTable.Cell>selected</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Highlights the row to show that the list item is selected.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell> </NxTable.Cell>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Whether the list item should be rendered as disabled or not.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell> </NxTable.Cell>
              <NxTable.Cell>HTML <NxCode>{'<button>'}</NxCode> attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" external>
                  HTML button attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>NxList.Button supports any HTML attribute that's normally supported
                by <NxCode>{'<button>'}</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>NxList.Link</NxTable.Cell>
              <NxTable.Cell>href</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>yes</NxTable.Cell>
              <NxTable.Cell>Link to the URL provided.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell> </NxTable.Cell>
              <NxTable.Cell>selected</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Highlights the row to show that the list item is selected.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell> </NxTable.Cell>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Whether the list item should be rendered as disabled or not.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>NxList.Text</NxTable.Cell>
              <NxTable.Cell>truncate</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Whether the list item text should be truncated. Displays ellipses
                to cut off text.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>NxList.Subtext</NxTable.Cell>
              <NxTable.Cell>truncate</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Whether the list item text should be truncated. Displays ellipses
                to cut off subtext.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>NxList.Error</NxTable.Cell>
              <NxTable.Cell>errorMessage</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>yes</NxTable.Cell>
              <NxTable.Cell>Error message to display.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell> </NxTable.Cell>
              <NxTable.Cell>onClick</NxTable.Cell>
              <NxTable.Cell>function</NxTable.Cell>
              <NxTable.Cell>yes</NxTable.Cell>
              <NxTable.Cell>Function for retry.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </section>

      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__title">
          <h3 className="nx-h3">Component Breakdown</h3>
        </header>
        <NxP><NxCode>NxList</NxCode> comprises of several children components.
          A reference of each component and where they must be placed is as follows:
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
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__title">
          <h3 className="nx-h3">Description Lists</h3>
        </header>
        <p className="nx-p">
          In addition to ordered and unordered lists, <NxCode>NxList</NxCode> also supports the
          styling of description lists using the following classes. Terms and descriptions are laid out side-by-side
          in rows. Currently only one description per term, and one term per description, are supported – not multiple.
        </p>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Convenience Component</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list--description-list</NxCode></NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                <NxCode>&lt;dl&gt;</NxCode> which also
                has <NxCode>.nx-list</NxCode>.
              </NxTable.Cell>
              <NxTable.Cell>Root class to apply RSC description list styles</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list__item</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>&lt;div&gt;</NxCode> wrapping <NxCode>&lt;dt&gt;</NxCode>{' '}
                and <NxCode>&lt;dd&gt;</NxCode> elements
              </NxTable.Cell>
              <NxTable.Cell>
                Each <NxCode>&lt;dt&gt;</NxCode>/<NxCode>&lt;dd&gt;</NxCode> pairing
                should be wrapped in a div which is styled similarly to an item row in a normal nx-list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list__term</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxList.Term</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>&lt;dt&gt;</NxCode></NxTable.Cell>
              <NxTable.Cell>Styles the description term elements</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-list__description</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxList.Description</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>&lt;dd&gt;</NxCode></NxTable.Cell>
              <NxTable.Cell>Styles the description elements</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
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
