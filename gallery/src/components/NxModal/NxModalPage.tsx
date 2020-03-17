/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';
import NxModalSimpleExample from './NxModalSimpleExample';
import NxModalAlertExample from './NxModalAlertExample';
import NxModalFormExample from './NxModalFormExample';
import NxModalStackedExample from './NxModalStackedExample';
import NxModalFormErrorExample from './NxModalFormErrorExample';
import NxModalExtraWideExample from './NxModalExtraWideExample';

const NxModalSimpleSourceCode = require('!!raw-loader!./NxModalSimpleExample').default;
const NxModalAlertSourceCode = require('!!raw-loader!./NxModalAlertExample').default;
const NxModalFormSourceCode = require('!!raw-loader!./NxModalFormExample').default;
const NxModalStackedSourceCode = require('!!raw-loader!./NxModalStackedExample').default;
const NxModalFormErrorSourceCode = require('!!raw-loader!./NxModalFormErrorExample').default;
const NxModalExtraWideSourceCode = require('!!raw-loader!./NxModalExtraWideExample').default;

export default function NxModalPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p>
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
                <p>
                  Applies an extra-wide style, for modals with large contents.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Props</h3>
        <p>
          <code className="nx-code">NxModal</code> has no required properties or attributes; instead it accepts any HTML
          attributes that are allowed on <code className="nx-code">div</code> elements. Additionally,
          any <code className="nx-code">className</code> attributes passed in on
          the <code className="nx-code">NxModal</code> element will be added to
          the <code className="nx-code">nx-modal</code> class on the modal div.
        </p>
      </GalleryDescriptionTile>

      <GalleryTile title="Simple NxModal Example">
        <NxModalSimpleExample/>
        <CodeExample content={NxModalSimpleSourceCode}/>
      </GalleryTile>
      <GalleryTile title="NxModal Example with NxAlert">
        <NxModalAlertExample/>
        <CodeExample content={NxModalAlertSourceCode}/>
      </GalleryTile>
      <GalleryTile title="NxModal with stacked modal example">
        <p>
          <code>NxModal</code> also supports stacked or nested modals. A second modal can be generated from inside of
          an <code>NxModal</code>.
        </p>
        <NxModalStackedExample/>
        <CodeExample content={NxModalStackedSourceCode}/>
      </GalleryTile>
      <GalleryTile title="NxModal Example with form">
        <p>
          <code>NxModal</code> also supports inclusion and styling of form elements
        </p>
        <NxModalFormExample/>
        <CodeExample content={NxModalFormSourceCode}/>
      </GalleryTile>
      <GalleryTile title="NxModal Example with form and error styling">
        <NxModalFormErrorExample/>
        <CodeExample content={NxModalFormErrorSourceCode}/>
      </GalleryTile>
      <GalleryTile title="Extra Wide NxModal Example">
        <NxModalExtraWideExample/>
        <CodeExample content={NxModalExtraWideSourceCode}/>
      </GalleryTile>
    </>
  );
};
