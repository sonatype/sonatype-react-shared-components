/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxScrollReuserExample from './NxScrollReuserExample';

const NxScrollReuserExampleCode = require('./NxScrollReuserExample?raw');

const NxScrollReuserPage = () =>
  <>
    <GalleryExampleTile title="Simple Scroll Reuser Example"
                        id="nx-tag-example"
                        liveExample={NxScrollReuserExample}
                        codeExamples={NxScrollReuserExampleCode}>
      Basic tags in all available colors.
    </GalleryExampleTile>
  </>;

export default NxScrollReuserPage;
