/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxAccordionExample from './NxAccordionExample';

const NxAccordionSimpleCode = require('!!raw-loader!./NxAccordionExample').default;

const NxTilePage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">...</p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        id="nx-accordion-simple-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxAccordionExample}
                        codeExamples={NxAccordionSimpleCode}>
      A simple example of an <code className="nx-code">nx-accordion</code>.
    </GalleryExampleTile>
  </>;

export default NxTilePage;
