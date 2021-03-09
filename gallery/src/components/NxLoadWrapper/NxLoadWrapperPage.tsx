/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadWrapperErrorRetryExample from './NxLoadWrapperErrorRetryExample';
import NxLoadWrapperLoadingExample from './NxLoadWrapperLoadingExample';
import NxLoadWrapperChildrenExample from './NxLoadWrapperChildrenExample';
import CodeExample from '../../CodeExample';

const childrenSourceCode = require('./NxLoadWrapperChildrenExample?raw');
const pageLevelSourceCode = require('./NxLoadWrapperPageLevelExample?raw');
const loadingSourceCode = require('./NxLoadWrapperLoadingExample?raw');
const errorRetrySourceCode = require('./NxLoadWrapperErrorRetryExample?raw');

const NxLoadWrapperPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A component that will display either a loading spinner, an error message, or the specified child VDOM
      </p>
      <p className="nx-p">Props:</p>
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
            <td className="nx-cell">error</td>
            <td className="nx-cell">string | JSX</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              A message that represents an error that occurred.  If defined, will be rendered via NxLoadError
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">loading</td>
            <td className="nx-cell">boolean</td>
            <td className="nx-cell">No</td>
            <td className="nx-cell">
              If true, and error is unset, a loading spinner will be rendered via NxLoadingSpinner
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">children</td>
            <td className="nx-cell">VDOM</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">VDOM to render if loading is false and error is not set</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">retryHandler</td>
            <td className="nx-cell">Function</td>
            <td className="nx-cell">Yes</td>
            <td className="nx-cell">
              A Retry button will be rendered in the <NxCode>NxLoadError</NxCode> which
              executes this function when clicked.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Renders children when not loading or in error"
                        liveExample={NxLoadWrapperChildrenExample}
                        codeExamples={childrenSourceCode}>
      An <NxCode>NxLoadWrapper</NxCode> in which
      neither <NxCode>loading</NxCode> nor <NxCode>error</NxCode> are
      set. As a result, the children are rendered.
    </GalleryExampleTile>

    <GalleryExampleTile title="Loading"
                        liveExample={NxLoadWrapperLoadingExample}
                        codeExamples={loadingSourceCode}>
      An <NxCode>NxLoadWrapper</NxCode> in which the <NxCode>loading</NxCode> flag is
      set, and thus the loading spinner is visible.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error with retry button"
                        liveExample={NxLoadWrapperErrorRetryExample}
                        codeExamples={errorRetrySourceCode}>
      An <NxCode>NxLoadWrapper</NxCode> in which the <NxCode>error</NxCode> property
      is set along with a <NxCode>retryHandler</NxCode>, and thus
      an <NxCode>NxErrorAlert</NxCode> is rendered.
    </GalleryExampleTile>

    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2"><NxCode>NxLoadWrapper</NxCode> at the page level</h2>
        </div>
      </header>
      <div className="nx-tile-content">
        <p className="nx-p">
          It is frequently the case that the entire content of the page should be wrapped in
          an <NxCode>NxLoadWrapper</NxCode>.
          That is, that a page which would typically include
          an <NxCode>.nx-page-main</NxCode> and perhaps
          an <NxCode>.nx-page-sidebar</NxCode> should instead include only an error alert in the
          event that the data for the page fails to load, or the user does not have permission to access that page,
          or some similar error condition. The RSC styles have specific support for this case:
          an <NxCode>.nx-alert</NxCode> that is the only child of
          the <NxCode>.nx-page-content</NxCode> element will correctly center itself on the page.
          Thus, <NxCode>NxLoadWrapper</NxCode> can be used to wrap
          the <NxCode>.nx-page-main</NxCode> and
          (optional) <NxCode>.nx-page-sidebar</NxCode> elements. See the example below:
        </p>
        <p className="nx-p">
          <a className="nx-text-link" href="#/PageLevelAlertExample">
            Click here to navigate to the live example.
          </a>
        </p>
        <CodeExample content={pageLevelSourceCode} />
      </div>
    </section>
  </>;

export default NxLoadWrapperPage;
