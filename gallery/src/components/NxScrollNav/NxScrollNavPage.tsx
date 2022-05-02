/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxScrollNavExample from './NxScrollNavExample';
import NxScrollNavNoOverflowExample from './NxScrollNavNoOverflowExample';
import NxScrollNavMayOverflowExample from './NxScrollNavMayOverflowExample';

const nxScrollNavCode = require('./NxScrollNavExample?raw');
const nxScrollNavNoOverflowCode = require('./NxScrollNavNoOverflowExample?raw');
const nxScrollNavMayOverflowCode = require('./NxScrollNavMayOverflowExample?raw');

const NxScrollNavPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxScrollNav</NxCode> represents a series of navigation buttons which are intended to operate an
        automatically scrolling region of content. That is, it is intended to be used along
        with <NxCode>useScrollSpy</NxCode> in such a way that the <NxCode>NxScrollNav</NxCode> buttons trigger the
        scrolling region to scroll to given sections and scrolling the content area manually updates the
        {' '}<NxCode>NxScrollNav</NxCode>'s presentation of which button is active.
      </NxP>
      <NxP>
        The buttons within <NxCode>NxScrollNav</NxCode> are displayed in a single row. If they do not fit, the
        rightmost buttons are moved into a dropdown menu at the right end of the row such that they do fit. This
        overflow behavior is recalculated whenever the component is resized or the <NxCode>scrollSections</NxCode>{' '}
        values change. Note that simply using a new array instance for <NxCode>scrollSections</NxCode> does{' '}
        <em>not</em> trigger this update, of all of the section names within the array are the same (and in the
        same order).
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={NxScrollNavExample}
                        codeExamples={nxScrollNavCode}>
      An <NxCode>NxScrollNav</NxCode> with enough buttons to trigger overflow. Notice that if the viewport is resized,
      the number of buttons that go into the overflow dropdown varies.
    </GalleryExampleTile>

    <GalleryExampleTile title="Non-Overflowing Example"
                        liveExample={NxScrollNavNoOverflowExample}
                        codeExamples={nxScrollNavNoOverflowCode}>
      An <NxCode>NxScrollNav</NxCode> that does not have enough buttons to overflow.
    </GalleryExampleTile>

    <GalleryExampleTile title="Sometimes-Overflowing Example"
                        liveExample={NxScrollNavMayOverflowExample}
                        codeExamples={nxScrollNavMayOverflowCode}>
      An <NxCode>NxScrollNav</NxCode> that does not have enough buttons to overflow.
    </GalleryExampleTile>
  </>;

export default NxScrollNavPage;
