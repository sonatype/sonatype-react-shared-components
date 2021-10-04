/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import Example from './NivoExample';

const code = require('./NivoExample?raw');

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxTextLink external href="https://nivo.rocks/#/">Nivo Docs Homepage</NxTextLink>
        </NxP>
        <NxP>
          I'm fairly happy with this one. While a bit ugly out of the box, it has a wide range of
          options for tweaking the appearance of specific charts (some of which are used here) as well as the ability to
          specify a generic custom <NxTextLink external href="https://nivo.rocks/guides/theming/">theme</NxTextLink>.
          It doesn't seem to be very stylable via CSS, which is a little bit unfortunate but perhaps inevitable.
          Additionally, as seen in this example the radial labels can collide when pie wedges have small values. Note
          that the colors seen here are being pulled in from RSC's selectable colors. Admittedly, you probably
          wouldn't use these colors for this particular data but it's an example. We would probably want to expose the
          threat level color codes in JS similarly to how the selectable color codes are exposed in this branch.
        </NxP>
        <NxP>
          If we went with this library, we might want to make RSC components that wrap some of its charts and provide
          Sonatype-approved styling parameters similar to what I show in this example.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={Example}
                          codeExamples={code}>
        Example
      </GalleryExampleTile>
    </>
  );
}
