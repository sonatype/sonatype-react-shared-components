/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import NxModalSimpleExample from './NxModalSimpleExample';
import NxModalAlertExample from './NxModalAlertExample';
import NxModalFormExample from './NxModalFormExample';
import NxModalStackedExample from './NxModalStackedExample';
import NxModalFormErrorExample from './NxModalFormErrorExample';
import NxModalExtraWideExample from './NxModalExtraWideExample';
import NxModalNarrowExample from './NxModalNarrowExample';

const NxModalSimpleSourceCode = require('!!raw-loader!./NxModalSimpleExample').default;
const NxModalAlertSourceCode = require('!!raw-loader!./NxModalAlertExample').default;
const NxModalFormSourceCode = require('!!raw-loader!./NxModalFormExample').default;
const NxModalStackedSourceCode = require('!!raw-loader!./NxModalStackedExample').default;
const NxModalFormErrorSourceCode = require('!!raw-loader!./NxModalFormErrorExample').default;
const NxModalExtraWideSourceCode = require('!!raw-loader!./NxModalExtraWideExample').default;
const NxModalNarrowSourceCode = require('!!raw-loader!./NxModalNarrowExample').default;

export default function NxModalPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">NxModal</code> is the preferred way to handle modals. Invoking
          an <code className="nx-code">NxModal</code> will create 2 separate <code className="nx-code">div</code>
          elements. One div will have the <code className="nx-code">nx-modal</code> class, along with any classes passed
          into the <code className="nx-code">NxModal</code> element with the <code className="nx-code">className</code>
          attribute. The other div, the parent of the modal, will have
          the <code className="nx-code">nx-modal-backdrop</code> class applied to it.
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
              <td className="nx-cell"><code className="nx-code">.nx-modal-header</code></td>
              <td className="nx-cell">HTML <code className="nx-code">header</code> element</td>
              <td className="nx-cell">
                The <code className="nx-code">NxModal</code> component supports any component that adheres to the
                RSC guidelines for margin and padding. Most commonly, components will be included in
                an <code className="nx-code">H2</code> title tag (with
                the <code className="nx-code">.nx-h2</code> style associated with it)
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-modal-content</code></td>
              <td className="nx-cell">Wrapping the modal content</td>
              <td className="nx-cell">
                All content between the header and footer should be wrapped in a div with
                the <code className="nx-code">.nx-modal-content</code> className.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-modal-footer</code></td>
              <td className="nx-cell">HTML <code className="nx-code">footer</code> element</td>
              <td className="nx-cell">
                The <code className="nx-code">NxModal</code> component supports
                buttons, <code className="nx-code">nx-error</code> or <code className="nx-code">nx-alert</code> classes
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell"><code className="nx-code">.nx-modal--wide</code></td>
              <td className="nx-cell">The <code className="nx-code">NxModal</code> component</td>
              <td className="nx-cell">
                Applies an extra-wide style, for modals with large contents.
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
              <th className="nx-cell nx-cell--header">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nx-table-row">
              <td className="nx-cell">className</td>
              <td className="nx-cell">string</td>
              <td className="nx-cell">No</td>
              <td className="nx-cell">
                Any <code className="nx-code">className</code> attributes passed in on
                the <code className="nx-code">NxModal</code> element will be added to
                the <code className="nx-code">nx-modal</code> class on the modal div.
              </td>
            </tr>
            <tr className="nx-table-row">
              <td className="nx-cell">onClose</td>
              <td className="nx-cell">Function (() => void)</td>
              <td className="nx-cell">Yes</td>
              <td className="nx-cell">
                The function to be called to close the modal when pressing
                the <code className="nx-code">Escape</code> key.
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
              <td className="nx-cell">NxModal supports any html attribute that's normally supported by Div elements</td>
            </tr>
          </tbody>
        </table>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple NxModal Example"
                          liveExample={NxModalSimpleExample}
                          codeExamples={NxModalSimpleSourceCode}>
        A basic example of an <code className="nx-code">NxModal</code>. Click the button to open the modal. Note that
        this modal has sufficient content to induce scrolling (on most monitors). You will see in other examples that
        when modals have smaller contents, the scrollbar does not appear and the modal content area shrinks to fit.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with NxAlert"
                          liveExample={NxModalAlertExample}
                          codeExamples={NxModalAlertSourceCode}>
        An example of an <code className="nx-code">NxModal</code> containing
        an <code className="nx-code">NxAlert</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal with stacked modal example"
                          liveExample={NxModalStackedExample}
                          codeExamples={NxModalStackedSourceCode}>
        <code className="nx-code">NxModal</code> also supports stacked or nested modals. A second modal can be
        generated from inside of an <code className="nx-code">NxModal</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form"
                          liveExample={NxModalFormExample}
                          codeExamples={NxModalFormSourceCode}>
        <code className="nx-code">NxModal</code> also supports inclusion and styling of form elements.
      </GalleryExampleTile>

      <GalleryExampleTile title="NxModal Example with form and error styling"
                          liveExample={NxModalFormErrorExample}
                          codeExamples={NxModalFormErrorSourceCode}>
        This <code className="nx-code">NxModal</code> also contains a form, but additionally demonstrates the typical
        way that an error upon the submission of said form would be handled: with
        an <code className="nx-code">NxErrorAlert</code> in the footer
      </GalleryExampleTile>

      <GalleryExampleTile title="Wide NxModal Example"
                          liveExample={NxModalExtraWideExample}
                          codeExamples={NxModalExtraWideSourceCode}>
        A demonstration of the <code className="nx-code">wide</code> styles
        for <code className="nx-code">NxModal</code>.
      </GalleryExampleTile>

      <GalleryExampleTile title="Narrow NxModal Example"
                          liveExample={NxModalNarrowExample}
                          codeExamples={NxModalNarrowSourceCode}>
        A demonstration of the <code className="nx-code">narrow</code> styles
        for <code className="nx-code">NxModal</code>.
      </GalleryExampleTile>
    </>
  );
};
