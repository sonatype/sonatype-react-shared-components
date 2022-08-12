/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTextLink, NxTable, NxH3, NxTile } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxDescriptionListNonInteractiveExample from './NxDescriptionListNonInteractiveExample';
import NxDescriptionListButtonExample from './NxDescriptionListButtonExample';
import NxDescriptionListLinkExample from './NxDescriptionListLinkExample';

const nxDescriptionListNonInteractiveCode = require('./NxDescriptionListNonInteractiveExample?raw'),
    nxDescriptionListButtonCode = require('./NxDescriptionListButtonExample?raw'),
    nxDescriptionListLinkCode = require('./NxDescriptionListLinkExample?raw');

const NxDescriptionListPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxDescriptionList</NxCode> creates HTML description lists with styling similar
        to <NxCode>NxList</NxCode>. These lists can support clickable rows implemented as either buttons or links,
        though in its simplest, noninteractive usage the <NxCode>NxDescriptionList</NxCode> family of components is
        simply a convenience wrapper for the <NxCode>nx-list--description-list</NxCode> styles documented on the
        <NxTextLink href="#/pages/List%20(HTML)">List (HTML)</NxTextLink> style page. Creating clickable description
        lists is only supported through this component, and not through the raw styles due to structural complexity
        involved.
      </NxP>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Component Description and Hierarchy</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxDescriptionList</NxCode> is comprised of several child components.
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
              <NxTable.Cell><NxCode>NxDescriptionList</NxCode></NxTable.Cell>
              <NxTable.Cell>Parent; Top-Level</NxTable.Cell>
              <NxTable.Cell>This is the parent list class.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxDescriptionList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxDescriptionList</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This is the noninteractive form of a row within the list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxDescriptionList.ButtonItem</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxDescriptionList</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This list row behaves as a button. It is clickable, responds to hover events, and has
                selected and disabled states.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxDescriptionList.LinkItem</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxDescriptionList</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This list row behaves as a link. It is clickable, responds to hover events,
                and has selected and disabled states.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxDescriptionList.Term</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxDescriptionList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The content for the first column in a description list.
                Used for displaying the term element in a description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxDescriptionList.Description</NxCode></NxTable.Cell>
              <NxTable.Cell>Within <NxCode>NxDescriptionList.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The content for the second column in a description list.
                Used for displaying the term's description.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDescriptionList</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          This is the parent list class. Typically, it renders a <NxCode>&lt;dl&gt;</NxCode> element. However, if
          it has no rendered children, it will instead render a <NxCode>&lt;ul&gt;</NxCode> containing the specified
          <NxCode>emptyMessage</NxCode>, identically to how <NxCode>&lt;NxList&gt;</NxCode> behaves in the same
          situation.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>emptyMessage</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>This list is empty.</NxTable.Cell>
              <NxTable.Cell>Message to display when no real contents are rendered.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Any JSX nodes which ultimately render <NxCode>&lt;div class="nx-list__item"&gt;</NxCode> elements.
                Typically a list of <NxCode>NxDescriptionList.Item</NxCode>,
                <NxCode>NxDescriptionList.ButtonItem</NxCode>, or <NxCode>NxDescriptionList.LinkItem</NxCode> nodes.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML global Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">
                  HTML global Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxDescriptionList</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;ul&gt;</NxCode> and <NxCode>&lt;dl&gt;</NxCode> – effectively, the global
                HTML attributes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDescriptionList.Item</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Convenience component which renders a <NxCode>&lt;div class="nx-list__item"&gt;</NxCode>
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Any JSX nodes which ultimately render one <NxCode>&lt;dt class="nx-list__term"&gt;</NxCode> followed
                by one <NxCode>&lt;dd class="nx-list__description"&gt;</NxCode>.
                Typically, an <NxCode>NxDescriptionList.Term</NxCode> and
                an <NxCode>NxDescriptionList.Description</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML global Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">
                  HTML global Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxDescriptionList.Item</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode> – effectively, the global HTML attributes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDescriptionList.Term</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Convenience component which renders a <NxCode>&lt;dt class="nx-list__term"&gt;</NxCode>
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Content to render as the term for this item in the description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML global Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">
                  HTML global Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxDescriptionList.Term</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;dt&gt;</NxCode> – effectively, the global HTML attributes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDescriptionList.Description</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Convenience component which renders a <NxCode>&lt;dd class="nx-list__description"&gt;</NxCode>
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Content to render as the description for this item in the description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML global Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">
                  HTML global Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxDescriptionList.Description</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;dd&gt;</NxCode> – effectively, the global HTML attributes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDescriptionList.ButtonItem</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Renders the full structure necessary for a clickable description list row which executes a
          JavaScript callback when activated. Note that for optimum accessibility, multiple
          actual <NxCode>&lt;button&gt;</NxCode> elements may be rendered covering different parts of the
          row.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>onClick</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Callback function to execute when the row is clicked. Does not receive any parameters.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>term</NxTable.Cell>
              <NxTable.Cell>JSX</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Content to render as the term for this item in the description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>description</NxTable.Cell>
              <NxTable.Cell>JSX</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Content to render as the description for this item in the description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>selected</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Highlights the row to show that the list item is selected.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Whether the list item should be rendered as disabled or not.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>div</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML global Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">
                  HTML global Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxDescriptionList.ButtonItem</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode> – effectively, the global HTML attributes.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>buttonClassName</NxTable.Cell>
              <NxTable.Cell>
                string
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell />
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
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxList.ButtonItem</NxCode> also supports any HTML attribute that's normally supported
                by <NxCode>{'<button>'}</NxCode>. To apply such attributes, simply wrap them in an object and
                provide the object in the <NxCode>buttonAttributes</NxCode> prop. For example:
                <NxP><NxCode>{'buttonAttributes={{id: "testvalue"}}'}</NxCode></NxP>. Note that attributes
                that would be equivalent to other props on this component or that the component must manage internally
                are ignored. These include <NxCode>className</NxCode>, <NxCode>onClick</NxCode>,{' '}
                <NxCode>disabled</NxCode>, <NxCode>tabIndex</NxCode> and ARIA attributes.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDescriptionList.LinkItem</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Renders the full structure necessary for a clickable description list row which navigates to a given
          hyperlink when activated. Note that for optimum accessibility, multiple
          actual <NxCode>&lt;a&gt;</NxCode> elements may be rendered covering different parts of the
          row.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>href</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                URL to navigate to upon click.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>term</NxTable.Cell>
              <NxTable.Cell>JSX</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Content to render as the term for this item in the description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>description</NxTable.Cell>
              <NxTable.Cell>JSX</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Content to render as the description for this item in the description list.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>selected</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Highlights the row to show that the list item is selected.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Whether the list item should be rendered as disabled or not.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>div</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML global Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes">
                  HTML global Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxDescriptionList.LinkItem</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode> – effectively, the global HTML attributes.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>anchorClassName</NxTable.Cell>
              <NxTable.Cell>
                string
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Class names to be applied to the underlying <NxCode>a</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>anchorAttributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" external>
                  HTML a attributes
                </NxTextLink> wrapped in an object.
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                <NxCode>NxList.LinkItem</NxCode> also supports any HTML attribute that's normally supported
                by <NxCode>{'<a>'}</NxCode>. To apply such attributes, simply wrap them in an object and
                provide the object in the <NxCode>anchorAttributes</NxCode> prop. For example:
                <NxP><NxCode>{'anchorAttributes={{rel: "noreferrer"}}'}</NxCode></NxP>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

    </GalleryDescriptionTile>

    <GalleryExampleTile title="Non-interactive Example"
                        id="nx-description-list-simple-example"
                        liveExample={NxDescriptionListNonInteractiveExample}
                        codeExamples={nxDescriptionListNonInteractiveCode}>
      A simple example of an <NxCode>NxDescriptionList</NxCode>
    </GalleryExampleTile>

    <GalleryExampleTile title="Button Example"
                        id="nx-description-list-button-example"
                        liveExample={NxDescriptionListButtonExample}
                        codeExamples={nxDescriptionListButtonCode}>
      An example of an <NxCode>NxDescriptionList</NxCode> whose rows are clickable buttons.
    </GalleryExampleTile>

    <GalleryExampleTile title="Link Example"
                        id="nx-description-list-link-example"
                        liveExample={NxDescriptionListLinkExample}
                        codeExamples={nxDescriptionListLinkCode}>
      An example of an <NxCode>NxDescriptionList</NxCode> whose rows are clickable links.
    </GalleryExampleTile>
  </>;

export default NxDescriptionListPage;
