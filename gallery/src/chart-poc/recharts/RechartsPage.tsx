/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import Example from './RechartsExample';

const code = require('./RechartsExample?raw');
const scss = require('./RechartsExample.scss?raw');

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxTextLink external href="https://recharts.org/en-US">Recharts Homepage</NxTextLink>
        </NxP>
        <NxP>
          This one has some pros and some cons relative ot Nivo. The main pro is that it adds classnames and
          name attributes to the various SVG elements which make up the chart, allowing for at least some CSS-based
          styling as seen in this example. However that CSS styling doesn't seem to be explicitly supported and doesn't
          really work on things like legend components, which are pretty important. Observe that in this example the
          legend is incorrect - that is because I didn't see a clean way to define it's colors in CSS. It's still
          possible to define them (and the colors for the chart itself) in JS.
        </NxP>
        <NxP>
          The downsides include somewhat more confusing and limited documentation
          (though I wouldn't say documentation is missing; it's all there it's just difficult to understand)
          and mediocre default label rendering that requires a lot of low-level work (e.g. custom SVG) in order to
          customize.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={Example}
                          codeExamples={[code, { language: 'scss', content: scss }]}>
        Example
      </GalleryExampleTile>
    </>
  );
}
