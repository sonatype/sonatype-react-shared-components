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

const childrenSourceCode = require('!!raw-loader!./NxLoadWrapperChildrenExample').default;
const pageLevelSourceCode = require('!!raw-loader!./NxLoadWrapperPageLevelExample').default;
const loadingSourceCode = require('!!raw-loader!./NxLoadWrapperLoadingExample').default;
const errorRetrySourceCode = require('!!raw-loader!./NxLoadWrapperErrorRetryExample').default;

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
              A Retry button will be rendered in the <code className="nx-code">NxLoadError</code> which
              executes this function when clicked.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Renders children when not loading or in error"
                        liveExample={NxLoadWrapperChildrenExample}
                        codeExamples={childrenSourceCode}>
      An <code className="nx-code">NxLoadWrapper</code> in which
      neither <code className="nx-code">loading</code> nor <code className="nx-code">error</code> are
      set. As a result, the children are rendered.
    </GalleryExampleTile>

    <GalleryExampleTile title="Loading"
                        liveExample={NxLoadWrapperLoadingExample}
                        codeExamples={loadingSourceCode}>
      An <code className="nx-code">NxLoadWrapper</code> in which the <code className="nx-code">loading</code> flag is
      set, and thus the loading spinner is visible.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error with retry button"
                        liveExample={NxLoadWrapperErrorRetryExample}
                        codeExamples={errorRetrySourceCode}>
      An <code className="nx-code">NxLoadWrapper</code> in which the <code className="nx-code">error</code> property
      is set along with a <code className="nx-code">retryHandler</code>, and thus
      an <code className="nx-code">NxErrorAlert</code> is rendered.
    </GalleryExampleTile>

    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2"><code className="nx-code">NxLoadWrapper</code> at the page level</h2>
        </div>
      </header>
      <div className="nx-tile-content">
        <p className="nx-p">
          It is frequently the case that the entire content of the page should be wrapped in
          an <code className="nx-code">NxLoadWrapper</code>.
          That is, that a page which would typically include
          an <code className="nx-code">.nx-page-main</code> and perhaps
          an <code className="nx-code">.nx-page-sidebar</code> should instead include only an error alert in the
          event that the data for the page fails to load, or the user does not have permission to access that page,
          or some similar error condition. The RSC styles have specific support for this case:
          an <code className="nx-code">.nx-alert</code> that is the only child of
          the <code className="nx-code">.nx-page-content</code> element will correctly center itself on the page.
          Thus, <code className="nx-code">NxLoadWrapper</code> can be used to wrap
          the <code className="nx-code">.nx-page-main</code> and
          (optional) <code className="nx-code">.nx-page-sidebar</code> elements. See the example below:
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
