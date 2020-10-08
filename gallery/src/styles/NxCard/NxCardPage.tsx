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
        Cards can be displayed in two orientations, horizontal and vertical.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Information alert"
                        liveExample={NxCardVerticalExample}
                        codeExamples={nxCardVerticalCode}
                        defaultCheckeredBackground={true}>
      Cards shown in vertical orientation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Success alert"
                        liveExample={NxCardHorizontalExample}
                        codeExamples={nxCardHorizontalCode}
                        defaultCheckeredBackground={true}>
      Cards shown in horizontal orientation.
    </GalleryExampleTile>

  </>;

export default NxCardPage;
