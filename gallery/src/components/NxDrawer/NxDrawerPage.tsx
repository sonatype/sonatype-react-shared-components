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
  NxH2,
  NxStatefulAccordion,
  NxAccordion
} from '@sonatype/react-shared-components';

import CodeExample from '../../CodeExample';
import { GalleryTileFooter } from '../../gallery-components/GalleryTileFooter';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

const NxDrawerConditionalRenderingSourceCode = require('./NxDrawerConditionalRenderingExample?raw');
const NxDrawerSourceCode = require('./NxDrawerExample?raw');
const NxDrawerVariantSourceCode = require('./NxDrawerVariantExample?raw');
const NxDrawerWithSubtitleOrDescriptionSourceCode = require('./NxDrawerWithSubtitleOrDescriptionExample?raw');
const NxDrawerEscSourceCode = require('./NxDrawerEscExample?raw');
const NxDrawerWithNxFormSourceCode = require('./NxDrawerWithNxFormExample?raw');
const NxDrawerWithNxToastSourceCode = require('./NxDrawerWithNxToastExample?raw');
const NxDrawerDisabledFunctionalitySourceCode = require('./NxDrawerDisabledFunctionalityExample?raw');

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
                <NxTable.Cell>open</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  This determines the visibility of <NxCode>NxDrawer</NxCode> (Does not remove it from the DOM),{' '}
                  and controls the <NxCode>NxDrawer</NxCode> sliding in and out animation.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>onClose</NxTable.Cell>
                <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  A callback function which gets called when the user closes the dialog{' '}
                  (When the user clicks outside, clicks the close button, or pressed the Escape).{' '}
                  It is advised that this callback is used to toggle the <NxCode>open</NxCode> attribute.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>onCancel</NxTable.Cell>
                <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  A callback function that gets called only after the <NxCode>open</NxCode> attribute{' '}
                  is set to false, and the slide-out animation is completed.
                  <NxInfoAlert>
                    You can use this callback function to clean up the DOM after the animation is completed{' '}
                    in certain cases (i.e., the content of the <NxCode>NxDrawer</NxCode> is expensive to keep{' '}
                    in the DOM).
                  </NxInfoAlert>
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
                <NxTable.Cell>closeBtnDisabled</NxTable.Cell>
                <NxTable.Cell>boolean</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>false</NxTable.Cell>
                <NxTable.Cell>
                  This prop, when set to true, will disable the close button on the drawer and disable
                  the drawer from being closed.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>closeBtnTooltip</NxTable.Cell>
                <NxTable.Cell>string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>"Close"</NxTable.Cell>
                <NxTable.Cell>
                  This prop, when specified, adds a custom tooltip instead of the default "Close" tooltip on the
                  close button when the <NxCode>closeBtnDisabled</NxCode> prop is set to true. Note that the custom
                  tooltip will only be rendered if the <NxCode>closeBtnDisabled</NxCode> prop is set to true.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>HTML <NxCode>&lt;dialog&gt;</NxCode> Attributes</NxTable.Cell>
                <NxTable.Cell>
                  <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog">
                    HTML Attributes
                  </NxTextLink>
                </NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  NxDrawer supports any html attribute that's normally supported by
                  {' '}<NxCode>&lt;dialog&gt;</NxCode> elements, except <NxCode>open</NxCode> because
                  it is being managed internally.
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
            the <NxCode>NxDrawer.HeaderTitle</NxCode>, <NxCode>NxDrawer.HeaderSubtitle</NxCode>,{' '}
            and <NxCode>NxDrawer.HeaderDescription</NxCode>, respectively.
          </NxP>
          <NxP>
            If the <NxCode>NxDrawer.HeaderTitle</NxCode> is too long to be fully seen, it will be truncated.
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
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerSourceCode}/>
          </NxStatefulAccordion>
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
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerWithSubtitleOrDescriptionSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerWithSubtitleOrDescriptionSourceCode}/>
          </NxStatefulAccordion>
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
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerVariantSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerVariantSourceCode}/>
          </NxStatefulAccordion>
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
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerWithNxFormSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerWithNxFormSourceCode}/>
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer Conditional Rendering Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of a <NxCode>NxDrawer</NxCode> that is unmounted by default{' '}
            and is unmounted when closed after the animation is completed.{' '}
            Notice that it requires two states: one to keep track of the drawer's visibility and animation,
            and another, in conjunction with the <NxCode>onCancel</NxCode> callback, was used to track mounting and
            unmounting after the slide-out animation is completed.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerConditionalRenderingExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerConditionalRenderingSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerConditionalRenderingSourceCode}/>
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer With NxToast Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of <NxCode>NxDrawer</NxCode> with <NxCode>NxToast</NxCode>.
            The toast is always positioned above NxDrawer, no matter the order in which they are opened.
            The drawer stays open if the toast is closed.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerWithNxToastExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerWithNxToastSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerWithNxToastSourceCode}/>
          </NxStatefulAccordion>
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
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerEscSourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerEscSourceCode}/>
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>

      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>NxDrawer With Disabled Functionality Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            An example of <NxCode>NxDrawer</NxCode> where the close button is disabled and the drawer cannot
            be closed.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxDrawerDisabledFunctionalityExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>
        <NxTile.Content className= "nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Example Code</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxDrawerDisabledFunctionalitySourceCode} />
            <GalleryTileFooter clipboardContent={NxDrawerDisabledFunctionalitySourceCode}/>
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>
    </>
  );
}
