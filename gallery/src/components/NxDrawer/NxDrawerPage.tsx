/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import {
  NxTable,
  NxCode,
  NxP,
  NxTextLink,
  NxH3,
  NxTile,
  NxInfoAlert,
  NxH2
} from '@sonatype/react-shared-components';

import CodeExample from '../../CodeExample';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const NxDrawerSourceCode = require('./NxDrawerExample?raw');
const NxDrawerVariantSourceCode = require('./NxDrawerVariantExample?raw');
const NxDrawerWithSubtitleOrDescriptionSourceCode = require('./NxDrawerWithSubtitleOrDescriptionExample?raw');
const NxDrawerEscSourceCode = require('./NxDrawerEscExample?raw');
const NxDrawerWithNxFormSourceCode = require('./NxDrawerWithNxFormExample?raw');

export default function NxDrawerPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          The <NxCode>NxDrawer</NxCode> component implements a dialog sidebar that is fixed to the
          right side of the <NxCode>NxPage</NxCode> layout content. It consists of three
          parts: <NxCode>NxDrawer.Header</NxCode> (required), <NxCode>NxDrawer.Content</NxCode> (required),
          {' '}<NxCode>NxFooter</NxCode> (optional). The <NxCode>NxDrawer</NxCode> is only compatible
          within <NxCode>NxPage</NxCode> layout with global header (it is not supported in legacy layout).
        </NxP>
        <NxTile.Subsection>
          <NxH3>Props</NxH3>
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
                <NxTable.Cell>className</NxTable.Cell>
                <NxTable.Cell>string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  Any <NxCode>className</NxCode> attributes passed in on
                  the <NxCode>NxDrawer</NxCode> will be added to
                  the dialog element.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>onCancel</NxTable.Cell>
                <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  <NxCode>NxDrawer</NxCode>'s callback function. It gets called when the user
                  closes the dialog (when the user clicks outside the drawer, when the user clicks the close button,
                  and when the user presses the Esc key).
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>variant</NxTable.Cell>
                <NxTable.Cell>"narrow" | "normal"</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>"normal"</NxTable.Cell>
                <NxTable.Cell>
                  This prop specifies a style variant for the drawer. Currently, variants only differ in width.
                  "normal" drawers are 520px wide, and "narrow" drawers are 348px wide.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>HTML <NxCode>&lt;dialog&gt;</NxCode> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                    HTML Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  NxDrawer supports any html attribute that's normally supported by
                  {' '}<NxCode>&lt;dialog&gt;</NxCode> elements.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxInfoAlert>
          Note: This component is required to be a direct child of <NxCode>NxPage</NxCode>.
        </NxInfoAlert>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxDrawer.Header (Required)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            The header is placed at the top of the drawer component. It consists of four parts:
            the close button, the title, the subtitle (optional), and the description (optional).
            The title, subtitle, and description can be specified via the convenience components:{' '}
            the <NxCode>NxDrawer.Header.Title</NxCode>, <NxCode>NxDrawer.Header.Subtitle</NxCode>,{' '}
            and <NxCode>NxDrawer.Header.Description</NxCode>, respectively.
          </NxP>
          <NxP>
            If the <NxCode>NxDrawer.Header.Title</NxCode> is too long to be fully seen, it will be truncated.
            A tooltip will be visible when hovering over the title to read the full title.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxDrawer.Content (Required)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            This component specifies the drawer's body content. It is placed
            under the header and extends the full height of the drawer if the footer is not specified.
            If the footer is specified, it occupies the height between the header and the footer.
            The content area will be scrollable if the content overflows.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxFooter (Optional)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            This is an optional component that sets the drawer's footer content. It is placed
            at the bottom and it takes the height of its content.
          </NxP>
          <NxP>
            Alternatively, the &lt;footer&gt; element can be used with the class <NxCode>nx-footer</NxCode>.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Accessibility</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            <NxCode>NxDrawer</NxCode> implements the dialog role, similar to <NxCode>NxModal</NxCode>.
            It is recommended that <NxCode>aria-labelledby</NxCode> or <NxCode>aria-label</NxCode> should be specified.
            Please refer to <NxTextLink href="#/pages/Modal">the Accessibility Section</NxTextLink> of the{' '}
            <NxCode>NxModal</NxCode> documentation.
          </NxP>
        </NxTile.Subsection>
      </GalleryDescriptionTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Simple NxDrawer Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            A basic example of an <NxCode>NxDrawer</NxCode> with and without a footer.
            This example also shows a NxDrawer with overflowing content.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxDrawerSourceCode}/>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer With Subtitle or Description Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of an <NxCode>NxDrawer</NxCode> with subtitle or description in the header.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerWithSubtitleOrDescriptionExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxDrawerWithSubtitleOrDescriptionSourceCode}/>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer Variant Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of a <NxCode>NxDrawer</NxCode> with different variants.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerVariantExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxDrawerVariantSourceCode}/>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer With NxForm Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of a <NxCode>NxDrawer</NxCode> with <NxCode>NxForm</NxCode>. This example
            also shows <NxCode>NxDrawer</NxCode> with overflowing form content.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerWithNxFormExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxDrawerWithNxFormSourceCode}/>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer Esc Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of <NxCode>NxDrawer</NxCode> with <NxCode>NxDropdown</NxCode> nested inside.
            This example demonstrates when the dropdown is in focus and is expanded. Pressing the Esc key collapses
            the dropdown, but not the drawer.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerEscExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
          <CodeExample content={NxDrawerEscSourceCode}/>
        </NxTile.Content>
      </NxTile>
    </>
  );
}
