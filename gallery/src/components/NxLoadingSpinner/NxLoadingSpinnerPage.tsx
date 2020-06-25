/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadingSpinnerExample from './NxLoadingSpinnerExample';

const sourceCode = require('!!raw-loader!./NxLoadingSpinnerExample').default;

const NxLoadingSpinnerPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">Loading Spinner with caption</p>
      <p className="nx-p">Props: none</p>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="General Example"
                        codeExamples={sourceCode}
                        liveExample={NxLoadingSpinnerExample}>
      The loading spinner. Not props are necessary - it is a simple, static element.
    </GalleryExampleTile>
  </>;

export default NxLoadingSpinnerPage;
