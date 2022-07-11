/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTextLink, NxTable, NxH3, NxTile, NxWarningAlert } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile} from '../../gallery-components/GalleryTiles';
import NxListsExamples from './NxListExamples';

const NxListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxList</NxCode> encapsulates the styles defined in the{' '}
        <NxTextLink href="#/pages/List%20(HTML)">List (HTML)</NxTextLink> style page into simple React components. In
        addition, <NxCode>NxList</NxCode> also contains children components that make it easy to customize lists. With
        the help of these components, it is quite simple to create lists that have clickable buttons, links, action
        buttons, multiple lines of text, and even lists with empty and error states.
      </NxP>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Description Lists</NxH3>
        </NxTile.SubsectionHeader>
        <NxWarningAlert>
          Deprecated: Using these child components along with <NxCode>NxList</NxCode> and <NxCode>NxList.Item</NxCode>
          {' '}results in invalid HTML due to the fact that <NxCode>NxList</NxCode> and{' '}
          <NxCode>NxList.Item</NxCode> render a <NxCode>ul</NxCode> and an <NxCode>li</NxCode> respectively rather than
          the necessary <NxCode>dl</NxCode> and <NxCode>div</NxCode> for a description list. Use
          the <NxCode>NxDescriptionList</NxCode> family of convenience components instead. See
          the <NxTextLink href="#/pages/List%20(HTML)">List (HTML)</NxTextLink> page for details.
        </NxWarningAlert>
        <NxP>
          <NxCode>NxList</NxCode> also supports the styling of description lists
          using <NxCode>NxList.DescriptionTerm</NxCode> and <NxCode>NxList.Description</NxCode>. Terms and descriptions
          are laid out side-by-side in rows. Currently only one description per term, and one term per description, are
          supported – not multiple.
        </NxP>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Component Description and Hierarchy</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxList</NxCode> is comprised of several child components.
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
              <NxTable.Cell>This is the parent list class.
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
              <NxTable.Cell><NxCode>NxList.ButtonItem</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This list element that behaves as a button, and is clickable, responds to hover events, and has
                selected and disabled states.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxList.LinkItem</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxList</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This list element behaves as a link, and is clickable, responds to hover events,
                and has selected and disabled states.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxList.Text</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Within <NxCode>NxList.Item</NxCode>, <NxCode>NxList.ButtonItem</NxCode>,
                or <NxCode>NxList.LinkItem</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                The primary text content of the list item, displayed in a heavier font weight.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxList.Subtext</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Within <NxCode>NxList.Item</NxCode>, <NxCode>NxList.ButtonItem</NxCode>,
                or <NxCode>NxList.LinkItem</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                The secondary text content of the list item displayed as non-bolded text.
                The subtext is displayed below the bolded, main list item text.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxList.Actions</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                A container for buttons inside list items. Use this when you want to have
                a button/buttons on the far right.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxList.DescriptionTerm</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxWarningAlert>
                  Deprecated. Use <NxCode>NxDescriptionList.Term</NxCode> within <NxCode>NxDescriptionList.Item</NxCode>
                  {' '}instead.
                </NxWarningAlert>
                <NxP>
                  The content for the first column in a description list.
                  Used for displaying the term element in a description list.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxList.Description</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxWarningAlert>
                  Deprecated. Use <NxCode>NxDescriptionList.Description</NxCode> within{' '}
                  <NxCode>NxDescriptionList.Item</NxCode> instead.
                </NxWarningAlert>
                <NxP>
                  The content for the second column in a description list.
                  Used for displaying the term's description in a description list.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxList</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          This is the parent list class. By default, <NxCode>NxList</NxCode> has no bullets.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>prop</NxTable.Cell>
              <NxTable.Cell>type</NxTable.Cell>
              <NxTable.Cell>required</NxTable.Cell>
              <NxTable.Cell>details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>bulleted</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Used to show a bulleted list.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>emptyMessage</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Used to show a message when the list is otherwise empty (i.e. when it has no externally specified
                list items, is not loading, and is not in an error state.
                If nothing is specified and the list is empty, a default message of "This list is empty." is displayed.
                If the list is not empty, this prop may be specified, having no effect. In essence, the best practice
                is to specify this prop on all lists which may be empty.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>error</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Used to show an error message instead of the list content.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isLoading</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Used to show a loading spinner instead of the list content.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>retryHandler</NxTable.Cell>
              <NxTable.Cell>function</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Used to provide the handler for the Retry button that appears when the error state is active.
                Required when error is present.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxList.ButtonItem</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          This list element is clickable, responds to hover events, and has selected and disabled states.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>prop</NxTable.Cell>
              <NxTable.Cell>type</NxTable.Cell>
              <NxTable.Cell>required</NxTable.Cell>
              <NxTable.Cell>details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>selected</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Highlights the row to show that the list item is selected.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Whether the list item should be rendered as disabled or not.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>
                string
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>li</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>{'<li>'}</NxCode> attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li" external>
                  HTML Li attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxList.ButtonItem</NxCode> supports any HTML attribute that's normally supported
                by <NxCode>{'<li>'}</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>buttonClassName</NxTable.Cell>
              <NxTable.Cell>
                string
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>button</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>buttonAttributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" external>
                  HTML button attributes
                </NxTextLink> wrapped in an object.
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxList.ButtonItem</NxCode> also supports any HTML attribute that's normally supported
                by <NxCode>{'<button>'}</NxCode>. To apply such attributes, simply wrap them in an object and
                provide the object in the <NxCode>buttonAttributes</NxCode> prop. For example:
                <NxP><NxCode>{'buttonAttributes={{value: "testvalue", onClick: () => alert("hi")}}'}</NxCode></NxP>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxList.LinkItem</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          This list element behaves as a link, i.e. an <NxCode>{'<a>'}</NxCode> tag, and requires
          a <NxCode>{'href'}</NxCode> prop. This element is also clickable, responds to hover events,
          and has selected and disabled states.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>prop</NxTable.Cell>
              <NxTable.Cell>type</NxTable.Cell>
              <NxTable.Cell>required</NxTable.Cell>
              <NxTable.Cell>details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>href</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>yes</NxTable.Cell>
              <NxTable.Cell>Link to the URL provided.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>selected</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Highlights the row to show that the list item is selected.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>Whether the list item should be rendered as disabled or not.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>
                string
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>li</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>{'<li>'}</NxCode> attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li" external>
                  HTML Li attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxList.LinkItem</NxCode> supports any HTML attribute that's normally supported
                by <NxCode>{'<li>'}</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>anchorClassName</NxTable.Cell>
              <NxTable.Cell>
                string
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>{'<a>'}</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>anchorAttributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" external>
                  HTML anchor attributes
                </NxTextLink> wrapped in an object.
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxList.LinkItem</NxCode> also supports any HTML attribute that's normally supported
                by <NxCode>{'<a>'}</NxCode>. To apply such attributes, simply wrap them in an object and
                provide the object in the <NxCode>anchorAttributes</NxCode> prop. For example:
                <NxP><NxCode>{'anchorAttributes={{hrefLang: "en", referralPolicy: "origin"}}'}</NxCode></NxP>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>
    <NxListsExamples />
  </>;

export default NxListPage;
