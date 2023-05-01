/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxTable,
  NxInfoAlert,
  NxCode,
  NxP,
  NxTextLink,
  NxWarningAlert,
  NxH3
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxModalSimpleExample from './NxModalSimpleExample';
import NxModalAlertExample from './NxModalAlertExample';
import NxModalFormExample from './NxModalFormExample';
import NxModalStackedExample from './NxModalStackedExample';
import NxModalFormErrorExample from './NxModalFormErrorExample';
import NxModalExtraWideExample from './NxModalExtraWideExample';
import NxModalNarrowExample from './NxModalNarrowExample';
import NxModalEscExample from './NxModalEscExample';
import NxModalNestedExample from './NxModalNestedExample';

const NxModalSimpleSourceCode = require('./NxModalSimpleExample?raw');
const NxModalAlertSourceCode = require('./NxModalAlertExample?raw');
const NxModalFormSourceCode = require('./NxModalFormExample?raw');
const NxModalStackedSourceCode = require('./NxModalStackedExample?raw');
const NxModalFormErrorSourceCode = require('./NxModalFormErrorExample?raw');
const NxModalExtraWideSourceCode = require('./NxModalExtraWideExample?raw');
const NxModalNarrowSourceCode = require('./NxModalNarrowExample?raw');
const NxModalEscSourceCode = require('./NxModalEscExample?raw');
const NxModalNestedSourceCode = require('./NxModalNestedExample?raw');

export default function NxModalPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxModal</NxCode> is the preferred way to handle modals. It creates a foreground modal
          window along with a backdrop mask over the rest of the page.
        </NxP>
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
                the <NxCode>NxModal</NxCode> element will be added to
                the <NxCode>nx-modal</NxCode> class on the modal div.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCancel</NxTable.Cell>
              <NxTable.Cell>Function ((Event) =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  A callback to be called when the browser's native <NxCode>cancel</NxCode> event for the
                  modal's <NxCode>HTMLDialogElement</NxCode> is fired. The circumstances which will fire this event
                  depend on the user agent, but typically include when the user presses ESC within the modal.
                </NxP>
                <NxP>
                  It is expected that the handler passed for this prop will typically remove the NxModal from the
                  JSX rendered to the page. If for whatever reason the handler wants to keep the modal open,
                  it <strong>must</strong> call <NxCode>preventDefault</NxCode> on the event argument. This prevents
                  the browser's native dialog closing logic, such as the removal of the <NxCode>open</NxCode> attribute
                  from the dialog element.
                </NxP>
                <NxP>
                  Note that at the time of writing, proper support for <NxCode>HTMLDialogElement</NxCode>, including
                  its <NxCode>cancel</NxCode> event, is limited to Chromium-based browsers. In other
                  browsers, <NxCode>NxModal</NxCode> itself listens for the ESC keypress and synthesizes the event
                  passed to this callback.
                </NxP>
                <NxP>
                  Also note that any components within the modal that have their own ESC handling should
                  call <NxCode>preventDefault</NxCode> on any ESC keydowns that they handle in order to prevent the
                  modal from also handling them. <NxCode>NxDropdown</NxCode> does this automatically.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onClose</NxTable.Cell>
              <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxWarningAlert>
                  Deprecated. Old alias for <NxCode>onCancel</NxCode>. Using both at the same time is not supported.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>variant</NxTable.Cell>
              <NxTable.Cell>"wide" | "narrow" | "normal"</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"normal"</NxTable.Cell>
              <NxTable.Cell>
                This prop specifies a style variant for the modal. Currently, variants only differ in width.
                "wide" modals are 1000px wide, "normal" modals are 800px wide, and "narrow" modals are 600px wide.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                  HTML Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                NxModal supports any html attribute that's normally supported by
                {' '}<NxCode>&lt;div&gt;</NxCode> elements.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxH3>Modal Style Classes</NxH3>
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
              <NxTable.Cell><NxCode>.nx-modal-header</NxCode></NxTable.Cell>
              <NxTable.Cell>HTML <NxCode>header</NxCode> element</NxTable.Cell>
              <NxTable.Cell><NxCode>NxModal.Header</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The <NxCode>NxModal</NxCode> component supports any component that adheres to the
                RSC guidelines for margin and padding. Most commonly, components will be included in
                an <NxCode>H2</NxCode> title tag (with
                the <NxCode>.nx-h2</NxCode> style associated with it)
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-modal-content</NxCode></NxTable.Cell>
              <NxTable.Cell>Wrapping the modal content</NxTable.Cell>
              <NxTable.Cell><NxCode>NxModal.Content</NxCode></NxTable.Cell>
              <NxTable.Cell>
                All content between the header and footer should be wrapped in a div with
                the <NxCode>.nx-modal-content</NxCode> className. This element (and thus the modal
                overall) will shrink to fit the content, or expand vertically until the modal reaches its maximum height
                (determined as a distance from the viewport edges). If the contents of
                the <NxCode>nx-modal-content</NxCode> continue to grow beyond that height, it
                introduces a scrollbar.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-footer</NxCode></NxTable.Cell>
              <NxTable.Cell>HTML <NxCode>footer</NxCode> element</NxTable.Cell>
              <NxTable.Cell><NxCode>NxFooter</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Each modal should contain a footer containing buttons for various actions. At a minimum, there
                should be a button that enables the user to close the modal. Further, the footer may contain
                an <NxCode>NxAlert</NxCode> as would typically be the case after a form submission
                which resulted in an error.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-modal-content--tabs</NxCode></NxTable.Cell>
              <NxTable.Cell>Modifier of <NxCode>.nx-modal-content</NxCode></NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                A modifier class that must be added to <NxCode>.nx-modal-content</NxCode> when
                you want to use tabs within an <NxCode>NxModal</NxCode> as the sole contents of
                the modal body. The modifier keeps the tabs "sticky" while allowing the tab content to scroll.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxInfoAlert>
          Note: Placing content into the modal which exceeds its horizontal bounds is not supported. The resulting
          layout is unspecified.
        </NxInfoAlert>
        <NxH3>Accessibility</NxH3>
        <NxP>
          <NxCode>NxModal</NxCode> uses the <NxCode>dialog</NxCode> role and needs
          to have a label specified by the <NxCode>aria-labelledby</NxCode> or
          {' '}<NxCode>aria-label</NxCode> attribute. Because the value
          of <NxCode>aria-labelledby</NxCode> or <NxCode>aria-label</NxCode> is
          typically the same as the modal header text <NxCode>aria-labelledby</NxCode> is the DRYer
          attribute.
        </NxP>
        <NxWarningAlert>
          Note: While the use of <NxCode>aria-labelledby</NxCode>
          {' '}(or <NxCode>aria-label</NxCode>) is not required by the component it should be
          considered mandatory in order to comply with accessibility guidelines.
        </NxWarningAlert>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Attribute</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>aria-labelledby</NxCode></NxTable.Cell>
              <NxTable.Cell>
                When the <NxCode>aria-labelledby</NxCode> attribute is used an ID is applied to the
                HTML element that will be providing the label information (typically the modal title H3), the ID is
                referenced by <NxCode>aria-labelledby</NxCode>. See examples below.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>aria-label</NxCode></NxTable.Cell>
              <NxTable.Cell>
                When the <NxCode>aria-label</NxCode> attribute is used the text is added directly to the
                attribute. See the NxModal Example with NxAlert example below.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxP>
          Additionally, keep in mind that scrollable content areas should either be focusable or include at least
          one focusable descendant. Therefore, as seen in the first example below, it may be necessary to add
          a <NxCode>tabIndex</NxCode> to the <NxCode>.nx-modal-content</NxCode> when it contains a significant amount
          of exclusively static content.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxModal Example"
                          id="nx-modal-simple-example"
                          liveExample={NxModalSimpleExample}
                          codeExamples={NxModalSimpleSourceCode}>
        A basic example of an <NxCode>NxModal</NxCode>. Click the button to open the modal. Note that
        this modal has sufficient content to induce scrolling (on most monitors). You will see in other examples that
        when modals have smaller contents, the scrollbar does not appear and the modal content area shrinks to fit.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with NxAlert"
                          liveExample={NxModalAlertExample}
                          codeExamples={NxModalAlertSourceCode}>
        An example of an <NxCode>NxModal</NxCode> containing
        an <NxCode>NxAlert</NxCode>. As shown in this example, the most appropriate accessibility role
        in this scenario is <NxCode>alertdialog</NxCode>.  Note that this is actually the only role you'd ever want to
        explicitly add to an <NxCode>NxModal</NxCode>. In non-alert cases, <NxCode>NxModal</NxCode> takes on the
        semantics of the <NxCode>dialog</NxCode> role as one would expect.
        This example uses <NxCode>aria-label</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal example with other ESC-controller elements"
                          id="nx-modal-esc-example"
                          liveExample={NxModalEscExample}
                          codeExamples={NxModalEscSourceCode}>
        <NxCode>NxModal</NxCode> can be used in conjunction with other components that can be closed via the ESC key,
        such as dropdowns. This example demonstrates a convoluted combination of 2 modals, a dropdown, and a custom
        component all working together such that pressing ESC only closes one of them at a time. Note
        that <NxCode>NxDropdown</NxCode> is designed so that pressing ESC when it is open only closes it if it is
        focused.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form"
                          id="nx-modal-form-example"
                          liveExample={NxModalFormExample}
                          codeExamples={NxModalFormSourceCode}>
        <NxCode>NxModal</NxCode> also supports inclusion and styling of form elements.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form and error styling"
                          id="nx-modal-form-with-alert-example"
                          liveExample={NxModalFormErrorExample}
                          codeExamples={NxModalFormErrorSourceCode}>
        This <NxCode>NxModal</NxCode> also contains a form, but additionally demonstrates the typical
        way that an error upon the submission of said form would be handled: with
        an <NxCode>NxErrorAlert</NxCode> in the footer.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Wide NxModal Example"
                          id="nx-modal-wide-example"
                          liveExample={NxModalExtraWideExample}
                          codeExamples={NxModalExtraWideSourceCode}>
        A demonstration of the <NxCode>wide</NxCode> styles
        for <NxCode>NxModal</NxCode>.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Narrow NxModal Example"
                          id="nx-modal-narrow-example"
                          liveExample={NxModalNarrowExample}
                          codeExamples={NxModalNarrowSourceCode}>
        A demonstration of the <NxCode>narrow</NxCode> styles
        for <NxCode>NxModal</NxCode>.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Stacked Example"
                          id="nx-modal-stacked-example"
                          liveExample={NxModalStackedExample}
                          codeExamples={NxModalStackedSourceCode}>
        <NxCode>NxModal</NxCode> also supports stacked modals.
        This example demonstrates a stacked modals that are siblings.
        A second modal can be generated from inside of an <NxCode>NxModal</NxCode>.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Nested Example"
                          id="nx-modal-nested-example"
                          liveExample={NxModalNestedExample}
                          codeExamples={NxModalNestedSourceCode}>
        <NxCode>NxModal</NxCode> also supports nested modals.
        This example demonstrates a stacked modals that are nested.
        This example uses <NxCode>aria-labelledby</NxCode>.
      </GalleryExampleTile>
    </>
  );
}
