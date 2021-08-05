/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxCode, NxP } from '@sonatype/react-shared-components';
import NxStatefulAccordionExample from './NxStatefulAccordionExample';

const NxStatefulAccordionCode = require('./NxStatefulAccordionExample?raw');

const NxStatefulAccordionPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxStatefulAccordion</NxCode> is a wrapper
        around <NxCode>NxAccordion</NxCode> which tracks its own toggle state. It accepts
        the same props as <NxCode>NxAccordion</NxCode>, except that instead
        of <NxCode>open</NxCode>, it accepts <NxCode>defaultOpen</NxCode> which
        provides the initial toggle state.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        defaultCheckeredBackground={true}
                        liveExample={NxStatefulAccordionExample}
                        codeExamples={NxStatefulAccordionCode}>
      A simple example of an <NxCode>NxStatefulAccordion</NxCode> that is initially open.
    </GalleryExampleTile>
  </>;

export default NxStatefulAccordionPage;
