/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxBreadcrumbExample from './NxBreadcrumbExample';

const exampleCode = require('./NxBreadcrumbExample?raw');

const NxBreadcrumbPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP />
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxBreadcrumbExample}
                        codeExamples={exampleCode}>
    </GalleryExampleTile>
  </>;

export default NxBreadcrumbPage;
