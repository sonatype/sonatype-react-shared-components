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

import NxPopOverExample from './NxPopOverExample';
import NxPopOverWithSubtitleOrParagraphExample from './NxPopOverWithSubtitleOrParagraphExample';
import NxPopOverNarrowExample from './NxPopOverNarrowExample';
import NxPopOverWithFooterExample from './NxPopOverWithFooterExample';

const NxPopOverSourceCode = require('./NxPopOverExample?raw');
const NxPopOverWithGlobalHeaderSourceCode = require('./NxPopOverWithGlobalHeaderExample?raw');
const NxPopOverWithSubtitleOrParagraphSourceCode = require('./NxPopOverWithSubtitleOrParagraphExample?raw');
const NxPopOverNarrowSourceCode = require('./NxPopOverNarrowExample?raw');
const NxPopOverWithFooterSourceCode = require('./NxPopOverWithFooterExample?raw');

export default function NxPopOverPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          The <NxCode>NxPopOver</NxCode> component implements a dialog sidebar that is fixed to the
          right side of the viewport. Inside it consists of three parts: the header (built-in),{' '}
          <NxCode>NxPopOver.Content</NxCode> (required), <NxCode>NxPopOver.Footer</NxCode> (optional).
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
                  the <NxCode>NxPopOver</NxCode> will be added to
                  the dialog element.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>onCancel</NxTable.Cell>
                <NxTable.Cell>Function ((Event) =&gt; void)</NxTable.Cell>
                <NxTable.Cell>Yes</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  The callback function passed into <NxCode>NxPopOver</NxCode> that gets called when the user
                  closes the dialog (when the user clicks outside the popover, when the user clicks the close button,
                  and when the user presses the Esc key).
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell>variant</NxTable.Cell>
                <NxTable.Cell>"narrow" | "normal"</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell>"normal"</NxTable.Cell>
                <NxTable.Cell>
                  This prop specifies a style variant for the popover. Currently, variants only differ in width.
                  "normal" popvers are 520px wide, and "narrow" popovers are 348px wide.
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
                <NxTable.Cell>headerParagraph</NxTable.Cell>
                <NxTable.Cell>ReactNode | string</NxTable.Cell>
                <NxTable.Cell>No</NxTable.Cell>
                <NxTable.Cell></NxTable.Cell>
                <NxTable.Cell>
                  This prop specifies the header paragraph content placed under the subtitle if the
                  subtitle is specified, if not, it will be placed under the header title.
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
                  NxPopOver supports any html attribute that's normally supported by
                  {' '}<NxCode>&lt;dialog&gt;</NxCode> elements.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Using NxPopOver with nx-global-header</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            When using <NxCode>NxPopOver</NxCode> with <NxCode>nx-global-header</NxCode>,
            <NxCode>nx-pop-over--with-global-header</NxCode> className must be applied so the
            popover does not overlap with the global header.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Built-in Header</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            The header is placed at the top of the popover component. It consists of four parts:
            the close button, the title, the subtitle (optional), and the paragraph (optional).
            The title, subtitle, and paragraph can be specified via the <NxCode>headerTitle</NxCode>,{' '}
            <NxCode>headerSubtitle</NxCode>, and <NxCode>headerParagraph</NxCode> props respectively.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxPopOver.Content (Required)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            This is a convenient component that specifies the main body content of the popover. It is placed
            under the header and extends the full height of the popover, unless the footer is specified, in which
            case it occupies the height between the header and the footer. If there is over flowing content,
            the content area will be scrollable.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>NxPopOver.Footer (Optional)</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            This is an optional convenient component that specifies the footer of the popover. It is placed
            at the bottom of the popover, and it takes the height of it's content.
          </NxP>
        </NxTile.Subsection>
        <NxTile.Subsection>
          <NxTile.SubsectionHeader>
            <NxH3>Accessibility</NxH3>
          </NxTile.SubsectionHeader>
          <NxP>
            <NxCode>NxPopOver</NxCode> implements the dialog role similar to <NxCode>NxModal</NxCode>.
            It is recommended that <NxCode>aria-labeledby</NxCode> or <NxCode>aria-label</NxCode> should be specified.
            Please refer to <NxTextLink href="#/pages/Modal">the accessibilty section</NxTextLink> of the{' '}
            <NxCode>NxModal</NxCode> documentation.
          </NxP>
        </NxTile.Subsection>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxPopOver Example"
                          id="nx-pop-over-example"
                          liveExample={NxPopOverExample}
                          codeExamples={NxPopOverSourceCode}>
        A basic example of an <NxCode>NxPopOver</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxPopOver With Subtitle or Paragraph Example"
                          id="nx-pop-over-with-subtitle-or-paragraph-example"
                          liveExample={NxPopOverWithSubtitleOrParagraphExample}
                          codeExamples={NxPopOverWithSubtitleOrParagraphSourceCode}>
        An example of a <NxCode>NxPopOver</NxCode> with subtitle or paragraph in the header.
      </GalleryExampleTile>

      <GalleryExampleTile title="Narrow NxPopOver Example"
                          id="nx-pop-over-narrow-example"
                          liveExample={NxPopOverNarrowExample}
                          codeExamples={NxPopOverNarrowSourceCode}>
        An example of <NxCode>NxPopOver</NxCode> with "narrow" variant.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxPopOver With Footer Example"
                          id="nx-pop-over-with-footer-example"
                          liveExample={NxPopOverWithFooterExample}
                          codeExamples={NxPopOverWithFooterSourceCode}>
        An example of a <NxCode>NxPopOver</NxCode> with <NxCode>NxPopOver.Footer</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxPopOver With Global Header Example"
                          id="nx-pop-over-with-global-header-example"
                          codeExamples={NxPopOverWithGlobalHeaderSourceCode}>
        An example of a <NxCode>NxPopOver</NxCode> with a global header.
        <br></br>
        <NxTextLink href="#/NxPopOverWithGlobalHeaderExample">
          Click here to navigate to the live example.
        </NxTextLink>
      </GalleryExampleTile>
    </>
  );
}
