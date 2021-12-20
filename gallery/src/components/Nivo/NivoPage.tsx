/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NivoPageExample from './NivoPageExample';

const NivoPageExampleCode = require('./NivoPageExample?raw');

const NivoPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Nivo Line Chart
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        defaultCheckeredBackground={false}
                        liveExample={NivoPageExample}
                        codeExamples={NivoPageExampleCode}>
      A simple example of an <NxCode>Nivo</NxCode>.
    </GalleryExampleTile>
  </>;

export default NivoPage;
