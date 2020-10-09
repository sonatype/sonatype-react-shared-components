/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPaginationExample from './NxPaginationExample';

const nxPaginationCode = require('!!raw-loader!./NxPaginationExample').default;

const NxPaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        Pagination Controls
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Error alert"
                        liveExample={NxPaginationExample}
                        codeExamples={nxPaginationCode}>
      HTML/SCSS for pagination controls.
    </GalleryExampleTile>
  </>;

export default NxPaginationPage;
