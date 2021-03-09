/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxStatefulAccordionExample from './NxStatefulAccordionExample';

const NxStatefulAccordionCode = require('./NxStatefulAccordionExample?raw');

const NxStatefulAccordionPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxStatefulAccordion</code> is a wrapper
        around <code className="nx-code">NxAccordion</code> which tracks its own toggle state. It accepts
        the same props as <code className="nx-code">NxAccordion</code>, except that instead
        of <code className="nx-code">open</code>, it accepts <code className="nx-code">defaultOpen</code> which
        provides the initial toggle state.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        defaultCheckeredBackground={true}
                        liveExample={NxStatefulAccordionExample}
                        codeExamples={NxStatefulAccordionCode}>
      A simple example of an <code className="nx-code">NxStatefulAccordion</code> that is initially open.
    </GalleryExampleTile>
  </>;

export default NxStatefulAccordionPage;
