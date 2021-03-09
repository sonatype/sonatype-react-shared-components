/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxModalSimpleExample from './NxModalSimpleExample';
import NxModalAlertExample from './NxModalAlertExample';
import NxModalFormExample from './NxModalFormExample';
import NxModalStackedExample from './NxModalStackedExample';
import NxModalFormErrorExample from './NxModalFormErrorExample';
import NxModalExtraWideExample from './NxModalExtraWideExample';
import NxModalNarrowExample from './NxModalNarrowExample';

const NxModalSimpleSourceCode = require('./NxModalSimpleExample?raw');
const NxModalAlertSourceCode = require('./NxModalAlertExample?raw');
const NxModalFormSourceCode = require('./NxModalFormExample?raw');
const NxModalStackedSourceCode = require('./NxModalStackedExample?raw');
const NxModalFormErrorSourceCode = require('./NxModalFormErrorExample?raw');
const NxModalExtraWideSourceCode = require('./NxModalExtraWideExample?raw');
const NxModalNarrowSourceCode = require('./NxModalNarrowExample?raw');

export default function NxModalPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <NxCode>NxModal</NxCode> is the preferred way to handle modals. Invoking
          an <NxCode>NxModal</NxCode> will create 2 separate <NxCode>div</NxCode>
          elements. One div will have the <NxCode>nx-modal</NxCode> class, along with any classes passed
          into the <NxCode>NxModal</NxCode> element with the <NxCode>className</NxCode>
          attribute. The other div, the parent of the modal, will have
          the <NxCode>nx-modal-backdrop</NxCode> class applied to it.
        </p>
        <h3>Modal Style Classes</h3>
        <table className="nx-table nx-table--gallery-props">
          <thead>
            <tr className="nx-table-row nx-table-row--header">
              <th className="nx-cell nx-cell--header">Class</th>
              <th className="nx-cell nx-cell--header">Location</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-modal-header</NxCode></td>
              <td className="nx-cell">HTML <NxCode>header</NxCode> element</td>
              <td className="nx-cell">
                The <NxCode>NxModal</NxCode> component supports any component that adheres to the
                RSC guidelines for margin and padding. Most commonly, components will be included in
                an <NxCode>H2</NxCode> title tag (with
                the <NxCode>.nx-h2</NxCode> style associated with it)
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-modal-content</NxCode></td>
              <td className="nx-cell">Wrapping the modal content</td>
              <td className="nx-cell">
                All content between the header and footer should be wrapped in a div with
                the <NxCode>.nx-modal-content</NxCode> className. This element (and thus the modal
                overall) will shrink to fit the content, or expand vertically until the modal reaches its maximum height
                (determined as a distance from the viewport edges). If the contents of
                the <NxCode>nx-modal-content</NxCode> continue to grow beyond that height, it
                introduces a scrollbar.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-footer</NxCode></td>
              <td className="nx-cell">HTML <NxCode>footer</NxCode> element</td>
              <td className="nx-cell">
                Each modal should contain a footer containing buttons for various actions. At a minimum, there
                should be a button that enables the user to close the modal. Further, the footer may contain
                an <NxCode>NxAlert</NxCode> as would typically be the case after a form submission
                which resulted in an error.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><NxCode>.nx-modal-content--tabs</NxCode></td>
              <td className="nx-cell">Modifier of <NxCode>.nx-modal-content</NxCode></td>
              <td className="nx-cell">
                A modifier class that must be added to <NxCode>.nx-modal-content</NxCode> when
                you want to use tabs within an <NxCode>NxModal</NxCode> as the sole contents of
                the modal body. The modifier keeps the tabs "sticky" while allowing the tab content to scroll.
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Props</h3>
        <table className="nx-table nx-table--gallery-props">
          <thead>
            <tr className="nx-table-row">
              <th className="nx-cell nx-cell--header">Prop</th>
              <th className="nx-cell nx-cell--header">Type</th>
              <th className="nx-cell nx-cell--header">Required</th>
              <th className="nx-cell nx-cell--header">Default</th>
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">
                Any <NxCode>className</NxCode> attributes passed in on
                the <NxCode>NxModal</NxCode> element will be added to
                the <NxCode>nx-modal</NxCode> class on the modal div.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onClose</td>
              <td className="nx-cell">Function (() =&gt; void)</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">
                The function to be called to close the modal when pressing
                the <NxCode>Escape</NxCode> key.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">variant</td>
              <td className="nx-cell">"wide" | "narrow" | "normal"</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">"normal"</td>
              <td className="nx-cell">
                This prop specifies a style variant for the modal. Currently, variants only differ in width.
                "wide" modals are 1000px wide, "normal" modals are 800px wide, and "narrow" modals are 600px wide.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">Div HTML Attributes</td>
              <td className="nx-cell">
                <a target="_blank"
                   rel="noopener"
                   href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">
                  HTML Attributes
                </a>
              </td>
              <td className="nx-cell">No</td>
              <td className="nx-cell"></td>
              <td className="nx-cell">NxModal supports any html attribute that's normally supported by Div elements</td>
            </tr>
          </tbody>
        </table>
        <NxInfoAlert>
          Note: Placing content into the modal which exceeds its horizontal bounds is not supported. The resulting
          layout is unspecified.
        </NxInfoAlert>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxModal Example"
                          id="nx-modal-simple-example"
                          liveExample={NxModalSimpleExample}
                          codeExamples={NxModalSimpleSourceCode}>
        A basic example of an <NxCode>NxModal</NxCode>. Click the button to open the modal. Note that
        this modal has sufficient content to induce scrolling (on most monitors). You will see in other examples that
        when modals have smaller contents, the scrollbar does not appear and the modal content area shrinks to fit.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with NxAlert"
                          liveExample={NxModalAlertExample}
                          codeExamples={NxModalAlertSourceCode}>
        An example of an <NxCode>NxModal</NxCode> containing
        an <NxCode>NxAlert</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal with stacked modal example"
                          id="nx-modal-stacked-example"
                          liveExample={NxModalStackedExample}
                          codeExamples={NxModalStackedSourceCode}>
        <NxCode>NxModal</NxCode> also supports stacked or nested modals. A second modal can be
        generated from inside of an <NxCode>NxModal</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form"
                          liveExample={NxModalFormExample}
                          codeExamples={NxModalFormSourceCode}>
        <NxCode>NxModal</NxCode> also supports inclusion and styling of form elements.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form and error styling"
                          id="nx-modal-form-with-alert-example"
                          liveExample={NxModalFormErrorExample}
                          codeExamples={NxModalFormErrorSourceCode}>
        This <NxCode>NxModal</NxCode> also contains a form, but additionally demonstrates the typical
        way that an error upon the submission of said form would be handled: with
        an <NxCode>NxErrorAlert</NxCode> in the footer
      </GalleryExampleTile>

      <GalleryExampleTile title="Wide NxModal Example"
                          id="nx-modal-wide-example"
                          liveExample={NxModalExtraWideExample}
                          codeExamples={NxModalExtraWideSourceCode}>
        A demonstration of the <NxCode>wide</NxCode> styles
        for <NxCode>NxModal</NxCode>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Narrow NxModal Example"
                          id="nx-modal-narrow-example"
                          liveExample={NxModalNarrowExample}
                          codeExamples={NxModalNarrowSourceCode}>
        A demonstration of the <NxCode>narrow</NxCode> styles
        for <NxCode>NxModal</NxCode>.
      </GalleryExampleTile>
    </>
  );
}
