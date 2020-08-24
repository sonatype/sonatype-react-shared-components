/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxScrollableExampleCode = require('!!raw-loader!./NxScrollableExample.html').default,
    nxScrollableTableCode = require('!!raw-loader!./NxScrollableTableExample.html').default;

const NxScrollablePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">.nx-scrollable</code> is a class that turns any block level element into a scrolling
        container. It has a default max-height of 400px so in most instances you're going to want to create a modifier
        class (e.g. <code className="nx-code">.nx-scrollable--my-box</code>) to adjust the height to suit your needs.
      </p>
      <p className="nx-p">
        Generally <code className="nx-code">.nx-scrollable</code> is applied to blocks like
        {' '}<code className="nx-code">.nx-tile-content</code> or <code className="nx-code">.nx-modal-content</code>.
      </p>
      <p className="nx-p">
        <code className="nx-code">.nx-scrollable</code> should <strong>not</strong> be used to replicate page or browser
        scrolling, refer instead to the <a href="#Pages/Page Layout/">page layout templates</a>.
      </p>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="General Example"
                        codeExamples={nxScrollableExampleCode}
                        htmlExample={nxScrollableExampleCode}>
      In this instance the max-height has been left at its default value of 400px.
    </GalleryExampleTile>

    <GalleryExampleTile title="Table Example"
                        htmlExample={nxScrollableTableCode}
                        codeExamples={nxScrollableTableCode}>
      A demonstration of a table that scrolls due to the presence of a height-constrained, scrolling wrapper element.
      The headers stay stationary as the rows scroll. All tables that scroll "by themselves" (as opposed to being
      part of some broader section of the page that scrolls) should be implemented in this manner in order to get
      the sticky header behavior. For scrollable containers which, on the other hand, contain more content in addition
      to a scrolling table, sticky headers should not be used and therefore
      the <code className="nx-code">nx-scrollable__table</code> class should not be used on the table.
    </GalleryExampleTile>
  </>;

export default NxScrollablePage;
