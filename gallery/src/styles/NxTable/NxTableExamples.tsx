/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTableClickableExample from './NxTableClickableExample';

const NxTableSimpleCode = require('!!raw-loader!./NxTableDefaultExample.html').default,
    NxTableScrollingCode = require('!!raw-loader!./NxTableScrollingExample.html').default,
    NxTableClickableCode = require('!!raw-loader!./NxTableClickableExample').default,
    NxTableEmptyCode = require('!!raw-loader!./NxTableEmptyExample.html').default,
    NxTableErrorStateCode = require('!!raw-loader!./NxTableErrorStateExample.html').default;

const NxTablesExamples = () =>
  <>
    <GalleryExampleTile title="NX Table Simple Example"
                        htmlExample={NxTableSimpleCode}
                        codeExamples={NxTableSimpleCode}>
      A simple, static demonstration of <code className="nx-code">nx-table</code> styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Scrolling Example"
                        htmlExample={NxTableScrollingCode}
                        codeExamples={NxTableScrollingCode}>
      A demonstration of a table that scrolls due to the presence of a height-constrained, scrolling wrapper element.
      The headers stay stationary as the rows scroll. All tables that scroll "by themselves" (as opposed to being
      part of some broader section of the page that scrolls) should be implemented in this manner in order to get
      the sticky header behavior. Tables which, on the other hand, <em>are</em> part of some broader scrolling
      section should not have sticky headers and therefore should not use
      the <code className="nx-code">nx-scrollable__table</code> class.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Clickable Rows Example"
                        liveExample={NxTableClickableExample}
                        codeExamples={NxTableClickableCode}>
      A demonstration of an <code className="nx-code">nx-table</code> with rows that receive clickable styling and
      a chevron column.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Empty Example"
                        htmlExample={NxTableEmptyCode}
                        codeExamples={NxTableEmptyCode}>
      A demonstration of the expected styling and content of an empty <code className="nx-code">nx-table</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table with Error Message Example"
                        htmlExample={NxTableErrorStateCode}
                        codeExamples={NxTableErrorStateCode}>
      A demonstration of the expected styling and content and an <code className="nx-code">nx-table</code> whose
      contents failed to load.
    </GalleryExampleTile>
  </>;

export default NxTablesExamples;
