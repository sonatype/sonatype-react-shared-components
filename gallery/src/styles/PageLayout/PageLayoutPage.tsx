/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
// import CodeExample from '../../CodeExample';
// import NxTwoColumnLayoutExample from './TwoColumnLayoutExample';
// import NxSingleColumnLayoutExample from './SingleColumnLayoutExample';

// const nxSingleColumnLayoutExample = require('!!raw-loader!./SingleColumnLayoutExample').default,
//     nxTwoColumnLayoutExample = require('!!raw-loader!./TwoColumnLayoutExample').default;

const PageLayoutGuidelinesPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        HTML and SCSS are provided for both single and two column page layouts. We use
        {' '}<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
        flexbox</a> to handle our layouts.
      </p>
      <p>
        One challenge of flexbox layouts is that the order and nesting of the tags that make up the layouts
        must be nested consistently or the layout will break. This often makes flexbox layouts challenging with
        frameworks which insert <code className="nx-code">&lt;div&gt;</code>'s into the DOM structure (like Angular)
        which can effect the order and/or nesting of the blocks. If your layout isn't working the way you expect this
        is the first thing you should check.
      </p>
      <p>
        Our single and double column layouts are essentially the same except that the single column layout omits the
        sidebar element. When the sidebar element is not present the
        {' '}<code className="nx-code">nx-page-main-content</code> block will expand to fill the available space.
      </p>
      <h2 className="nx-h2">Page layout illustrations</h2>
      <h3 className="nx-h3">Standard two column layout</h3>
      <p>
        Our standard two column layout consists of a page header area, a page sidebar, main content area, and a page
        footer. Many of our apps do not use a page footer and this can be safely omitted.
      </p>
      <p>
        <img src="../resources/page-layout-mocks/page-layout-2col.png" className="gallery-example-image"/>
      </p>
      <p>The basic HTML for this layout would look like this:</p>
      <pre className="nx-code nx-code--pre-block">
      {`
      <div className="nx-page">

        <div className="nx-page-header">
        </div>

        <div className="nx-page-content">

          <aside className="nx-page-content-sidebar">
          </aside>

          <main className="nx-page-content-main">
          </main>

        </div>

        <div className="nx-page-footer">
        </div>

      </div>
      `}
      </pre>
      <h3 className="nx-h3">Standard single column layout</h3>
      <p>
        Note that the sidebar element is no longer defined, <code className="nx-code">nx-page-main-content</code> will
        expand to the left to occupy the available space.
      </p>
      <p>
        <img src="../resources/page-layout-mocks/page-layout-1col.png" className="gallery-example-image"/>
      </p>
      <p>The basic HTML for this layout would look like this:</p>
      <pre className="nx-code nx-code--pre-block">
      {`
      <div className="nx-page">

        <div className="nx-page-header"></div>

        <div className="nx-page-content">

          <main className="nx-page-content-main"></main>

        </div>

        <div className="nx-page-footer"></div>

      </div>
      `}
      </pre>
    </GalleryDescriptionTile>
  </>;

export default PageLayoutGuidelinesPage;
