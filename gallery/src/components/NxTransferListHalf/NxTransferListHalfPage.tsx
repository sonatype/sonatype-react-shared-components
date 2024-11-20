/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode } from '@sonatype/react-shared-components';

import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTransferListHalfExample from './NxTransferListHalfExample';

import '../NxTooltip/NxTooltipExample.scss';

const nxTransferListHalfExample = require('./NxTransferListHalfExample?raw');


const NxTransferListPage = () =>
  <>

    <GalleryExampleTile title="Minimal Example"
                        id="nx-transfer-list-half-example"
                        codeExamples={nxTransferListHalfExample}
                        liveExample={NxTransferListHalfExample}>
      Demonstrates an <NxCode>NxTransferListHalf</NxCode> without reordering. Note that one of the items uses
      JSX to include an icon within its omars.
    </GalleryExampleTile>
  </>;

export default NxTransferListPage;
