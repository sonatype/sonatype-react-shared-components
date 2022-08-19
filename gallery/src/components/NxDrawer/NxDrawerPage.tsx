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
  NxTile
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxDrawerExample from './NxDrawerExample';
import NxDrawerWithSubtitleOrDescriptionExample from './NxDrawerWithSubtitleOrDescriptionExample';
import NxDrawerNarrowExample from './NxDrawerNarrowExample';
import NxDrawerWithFooterExample from './NxDrawerWithFooterExample';
import NxDrawerEscExample from './NxDrawerEscExample';
import NxDrawerWithNxFormExample from './NxDrawerWithNxFormExample';

const NxDrawerSourceCode = require('./NxDrawerExample?raw');
const NxDrawerVariantSourceCode = require('./NxDrawerVariantExample?raw');
const NxDrawerWithSubtitleOrDescriptionSourceCode = require('./NxDrawerWithSubtitleOrDescriptionExample?raw');
const NxDrawerNarrowSourceCode = require('./NxDrawerNarrowExample?raw');
const NxDrawerWithFooterSourceCode = require('./NxDrawerWithFooterExample?raw');
const NxDrawerEscSourceCode = require('./NxDrawerEscExample?raw');
const NxDrawerWithNxFormSourceCode = require('./NxDrawerWithNxFormExample?raw');

export default function NxDrawerPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          The <NxCode>NxDrawer</NxCode> component implements a dialog sidebar that is fixed to the
          right side of the viewport. Inside it consists of three parts: the header (built-in),{' '}
          <NxCode>NxDrawer.Content</NxCode> (required), <NxCode>NxDrawer.Footer</NxCode> (optional).
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
                <NxTable.Cell>Function ((Event) =&gt; void)</NxTable.Cell>
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
                <NxTable.Cell>headerTitle</NxTable.Cell>
                <NxTable.Cell>ReactNode | string</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  This prop specifies the header title content placed at the top, next to the close button.
                  The text is truncated when it overflows.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>headerSubtitle</NxTable.Cell>
                <NxTable.Cell>ReactNode | string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  This prop specifies the header subtitle content placed under the header title.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>headerDescription</NxTable.Cell>
                <NxTable.Cell>ReactNode | string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  This prop sets the header description content under the subtitle if the subtitle is specified.
                  If it's not specified, it will be placed under the header title.
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
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Using NxDrawer with nx-global-header</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            When using <NxCode>NxDrawer</NxCode> with <NxCode>nx-global-header</NxCode>,{' '}
            <NxCode>nx-drawer--with-global-header</NxCode> className must be applied so the
            drawer does not overlap with the global header.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Built-in Header</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            The header is placed at the top of the drawer component. It consists of four parts:
            the close button, the title, the subtitle (optional), and the description (optional).
            The title, subtitle, and description can be specified via the <NxCode>headerTitle</NxCode>,{' '}
            <NxCode>headerSubtitle</NxCode>, and <NxCode>headerDescription</NxCode> props respectively.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxDrawer.Content (Required)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            This component specifies the drawer's body content. It is placed
            under the header and extends the full height of the drawer, unless the footer is specified, in which
            case it occupies the height between the header and the footer. If there is overflowing content,
            the content area will be scrollable.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxDrawer.Footer (Optional)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            This is an optional convenient component that sets the drawer's footer content. It is placed
            at the bottom of the drawer, and it takes the height of its content.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Accessibility</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            <NxCode>NxDrawer</NxCode> implements the dialog role, similar to <NxCode>NxModal</NxCode>.
            It is recommended that <NxCode>aria-labeledby</NxCode> or <NxCode>aria-label</NxCode> should be specified.
            Please refer to <NxTextLink href="#/pages/Modal">the Accessibility Section</NxTextLink> of the{' '}
            <NxCode>NxModal</NxCode> documentation.
          </NxP>
        </NxTile.Subsection>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxDrawer Example"
                          id="nx-drawer-simple-example"
                          liveExample={NxDrawerExample}
                          codeExamples={NxDrawerSourceCode}>
        A basic example of an <NxCode>NxDrawer</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxDrawer With Subtitle or Description Example"
                          id="nx-drawer-with-subtitle-or-description-example"
                          liveExample={NxDrawerWithSubtitleOrDescriptionExample}
                          codeExamples={NxDrawerWithSubtitleOrDescriptionSourceCode}>
        An example of a <NxCode>NxDrawer</NxCode> with subtitle or description in the header.
      </GalleryExampleTile>

      <GalleryExampleTile title="Narrow NxDrawer Example"
                          id="nx-drawer-narrow-example"
                          liveExample={NxDrawerNarrowExample}
                          codeExamples={NxDrawerNarrowSourceCode}>
        An example of <NxCode>NxDrawer</NxCode> with "narrow" variant.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxDrawer With Footer Example"
                          id="nx-drawer-with-footer-example"
                          liveExample={NxDrawerWithFooterExample}
                          codeExamples={NxDrawerWithFooterSourceCode}>
        An example of <NxCode>NxDrawer</NxCode> with <NxCode>NxDrawer.Footer</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxDrawer Variant Example"
                          id="nx-drawer-variant-example"
                          codeExamples={NxDrawerVariantSourceCode}>
        An example of a <NxCode>NxDrawer</NxCode> with different variants.
        <br/>
        <NxTextLink href="#/NxDrawerVariantExample">
          Click here to navigate to the live example.
        </NxTextLink>
      </GalleryExampleTile>

      <GalleryExampleTile title="NxDrawer Esc Example"
                          id="nx-drawer-esc-example"
                          liveExample={NxDrawerEscExample}
                          codeExamples={NxDrawerEscSourceCode}>
        An example of <NxCode>NxDrawer</NxCode> with <NxCode>NxDropdown</NxCode> nested inside.
        This example demonstrates when the dropdown is in focus and is expanded. Pressing the Esc key collapses
        the dropdown, but not the drawer.
        collapses the dropdown, but not the drawer.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxDrawer With NxForm Example"
                          id="nx-drawer-with-nx-form"
                          codeExamples={NxDrawerWithNxFormSourceCode}>
        An example of a <NxCode>NxDrawer</NxCode> with <NxCode>NxFrom</NxCode>.
        <NxTextLink href="#/NxDrawerWithNxFormExample">
          Click here to navigate to the live example.
        </NxTextLink>
      </GalleryExampleTile>
    </>
  );
}
