/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import MixinExample from './DarkModeMixinExample';
import './DarkModeMixinExample.scss';

const mixinExampleCode = require('./DarkModeMixinExample?raw'),
    mixinExampleScss = require('./DarkModeMixinExample.scss?raw');

const NxDarkModeMixinPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        In order to add dark-mode-specific styles to your application,
        the <NxCode>nx-dark-mode-helpers.dark-mode</NxCode> SCSS mixin can be used. Styles added via this mixin will
        be activated according to the rules documented on
        the <NxTextLink href="#/pages/Dark Mode Activation Classes">Dark Mode Activation Classes</NxTextLink> page.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example"
                        liveExample={MixinExample}
                        codeExamples={[mixinExampleCode, { language: 'scss', content: mixinExampleScss }]}>
      This example demonstrates a simple HTML element with styles for both light and dark mode. The light mode styles
      are applied using a simple CSS selector like usual. The dark mode styles for that same selector are applied
      by invoking the <NxCode>nx-dark-mode-helpers.dark-mode</NxCode> mixin within that selector block and providing
      the desired dark mode styles as its children. Use the "Theme Settings" button at the top of the page to toggle
      between themes and observe the effect.
    </GalleryExampleTile>
  </>;

export default NxDarkModeMixinPage;
