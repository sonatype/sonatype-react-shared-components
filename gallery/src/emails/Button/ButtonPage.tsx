/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const buttonCode = require('./ButtonExample.html');

const ButtonPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Buttons for emails. Based off <NxCode>NxButton</NxCode>. Note that each variant must be defined
        separately.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Button Examples"
                        htmlExample={buttonCode}
                        codeExamples={buttonCode}>
    </GalleryExampleTile>
  </>;

export default ButtonPage;
