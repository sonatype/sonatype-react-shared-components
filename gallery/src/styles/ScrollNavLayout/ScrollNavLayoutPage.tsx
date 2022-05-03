/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import ScrollNavLayoutExample from './ScrollNavLayoutExample';

const scrollNavLayoutCode = require('./ScrollNavLayoutExample?raw');

const ScrollNavLayoutPage = () =>
  <>
    <GalleryDescriptionTile>
      This page demonstrates how <NxCode>NxScrollNav</NxCode> and <NxCode>useScrollSpy</NxCode> can be used
      together to create a scrolling navigation aide for long scrolling containers with named content areas.
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        defaultCheckeredBackground={true}
                        liveExample={ScrollNavLayoutExample}
                        codeExamples={scrollNavLayoutCode}>
      An example of <NxCode>NxScrollNav</NxCode> and <NxCode>useScrollSpy</NxCode> being used together.
    </GalleryExampleTile>
  </>;

export default ScrollNavLayoutPage;
