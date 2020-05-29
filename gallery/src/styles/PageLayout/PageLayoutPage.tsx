/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import RawHtmlExample from '../../CodeExample';

const SingleColumnLayoutExampleCode = require('!!raw-loader!./SingleColumnLayoutExample.html').default,
    TwoColumnLayoutExampleCode = require('!!raw-loader!./TwoColumnLayoutExample.html').default,
    ReactRootLayoutExampleCode = require('!!raw-loader!./ReactRootLayoutExample.html').default;

const PageLayoutGuidelinesPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        HTML and SCSS are provided for both single and two column page layouts. We use{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          flexbox
        </a>
        to handle our layouts.
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
        {' '}<code className="nx-code">nx-page-content-main</code> block will expand to fill the available space.
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
      <RawHtmlExample content={TwoColumnLayoutExampleCode} />
      <h3 className="nx-h3">Standard single column layout</h3>
      <p>
        Note that the sidebar element is no longer defined, <code className="nx-code">nx-page-main-content</code> will
        expand to the left to occupy the available space.
      </p>
      <p>
        <img src="../resources/page-layout-mocks/page-layout-1col.png" className="gallery-example-image"/>
      </p>
      <p>The basic HTML for this layout would look like this:</p>
      <RawHtmlExample content={SingleColumnLayoutExampleCode}/>
      <h3 className="nx-h3">React Root Element</h3>
      <p>
        Typically React Root is specified in the upper-level page elements. In the gallery itself, it's applied to
        <code className="nx-code">.nx-page</code> in <code className="nx-code">main.tsx</code>. That element, which
        also has an <code className="nx-code">id</code> of <code className="nx-code">ui</code>, is what we pass to
        ReactDOM. We recommend that other apps use the same pattern.
      </p>
      <RawHtmlExample content={ReactRootLayoutExampleCode}/>
    </GalleryDescriptionTile>
  </>;

export default PageLayoutGuidelinesPage;
