/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const threatCounterCode = require('./ThreatCounterExample.html');

const ThreatCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Basic Threat Counter, a copy of <NxCode>NxThreatCounter</NxCode>. Note that each variant must be defined
        separately. Layout direction must be set on the <NxCode>&lt;dl&gt;</NxCode>.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Threat Counter Examples"
                        htmlExample={threatCounterCode}
                        codeExamples={threatCounterCode}>
    </GalleryExampleTile>
  </>;

export default ThreatCounterPage;
