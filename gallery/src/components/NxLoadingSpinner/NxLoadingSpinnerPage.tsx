/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadingSpinnerExample from './NxLoadingSpinnerExample';

const sourceCode = require('./NxLoadingSpinnerExample?raw');

const NxLoadingSpinnerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Loading Spinner with caption</NxP>
      <NxP>Props: none</NxP>
    </GalleryDescriptionTile>
    <GalleryExampleTile title="General Example"
                        codeExamples={sourceCode}
                        liveExample={NxLoadingSpinnerExample}>
      The loading spinner. Not props are necessary - it is a simple, static element.
    </GalleryExampleTile>
  </>;

export default NxLoadingSpinnerPage;
