/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import Example from './NivoExample';

const code = require('./NivoExample?raw');

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxTextLink external href="https://nivo.rocks/#/">Nivo Docs Homepage</NxTextLink>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={Example}
                          codeExamples={code}>
        Example
      </GalleryExampleTile>
    </>
  );
}
