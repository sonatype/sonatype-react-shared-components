/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxCardVerticalExample from './NxCardVerticalExample';
import NxCardHorizontalExample from './NxCardHorizontalExample';

const nxCardVerticalCode = require('!!raw-loader!./NxCardVerticalExample').default,
    nxCardHorizontalCode = require('!!raw-loader!./NxCardHorizontalExample').default;

const NxCardPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Standard name spaced alert styles. Note that these examples are shown in react as each style includes
        specific icons. When working in React, <code className="nx-code">NxFontAwesomeIcon</code> should be used
        as shown to get these icons (or preferably the <code className="nx-code">NxAlert</code> React component and
        its variations should be used). When not working in react, check the FontAwesome 5 documentation for alternative
        ways to include the icons. Alerts should generally include Close buttons or another way to dismiss themselves.
        In this example standard Close button styling is provided by <code className="nx-code">NxCloseButton</code>.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Information alert"
                        liveExample={NxCardVerticalExample}
                        codeExamples={nxCardVerticalCode}>
      An <code className="nx-code">nx-alert</code> demonstrating information styles.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success alert"
                        liveExample={NxCardHorizontalExample}
                        codeExamples={nxCardHorizontalCode}>
      An <code className="nx-code">nx-alert</code> demonstrating success styles.
    </GalleryExampleTile>

  </>;

export default NxCardPage;
