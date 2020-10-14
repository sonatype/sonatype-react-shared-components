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
import NxCardVerticalAltExample from './NxCardVerticalAlternateExample';

const nxCardVerticalCode = require('!!raw-loader!./NxCardVerticalExample').default,
    nxCardHorizontalCode = require('!!raw-loader!./NxCardHorizontalExample').default,
    nxCardVerticalAltCode = require('!!raw-loader!./NxCardVerticalAlternateExample').default;

const NxCardPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Cards can be displayed in two orientations, horizontal and vertical.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Vertical Card"
                        liveExample={NxCardVerticalExample}
                        codeExamples={nxCardVerticalCode}
                        defaultCheckeredBackground={true}>
      Cards shown in vertical orientation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Horizontal Card"
                        liveExample={NxCardHorizontalExample}
                        codeExamples={nxCardHorizontalCode}
                        defaultCheckeredBackground={true}>
      Cards shown in horizontal orientation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Alternate Vertical Card"
                        liveExample={NxCardVerticalAltExample}
                        codeExamples={nxCardVerticalAltCode}
                        defaultCheckeredBackground={true}>
      This variation of the vertical cards has the callout and the description text side-by-side (when content allows).
      It cannot be transformed into a horizontal card with a simple class change.
    </GalleryExampleTile>

  </>;

export default NxCardPage;
