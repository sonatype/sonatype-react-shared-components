/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxScrollRenderExample from './NxScrollRenderExample';

const NxScrollRenderExampleCode = require('./NxScrollRenderExample?raw');

const NxScrollRenderPage = () =>
  <>
    <GalleryExampleTile title="Simple Scroll Render Example"
                        id="nx-tag-example"
                        liveExample={NxScrollRenderExample}
                        codeExamples={NxScrollRenderExampleCode}>
      Basic tags in all available colors.
    </GalleryExampleTile>
  </>;

export default NxScrollRenderPage;
