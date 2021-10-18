/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxTextLink } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import Example from './VictoryExample';
import VictoryBarChartExample from './VictoryBarChartExample';

const code = require('./VictoryExample?raw');
const VictoryBarChartExampleCode = require('./VictoryBarChartExample?raw');

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxTextLink external href="https://formidable.com/open-source/victory/">Victory Homepage</NxTextLink>
        </NxP>
        <NxP>
          This one seems alright. Again, not stylable via CSS, but seems to have a decent number of configuration
          options for sizing. Labels have a tendency to run together, a common problem among charting libraries it
          seems. Creating custom labels is easy.  Documentation for individual charts is good but not as good as
          nivo. Documentation for creating custom themes is limited.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={Example}
                          codeExamples={code}>
        Example
      </GalleryExampleTile>

      <GalleryDescriptionTile>
        <NxP>
          This one is very limited compared to Nivo. Not a lot of configuration options.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Bar Chart Example"
                          liveExample={VictoryBarChartExample}
                          codeExamples={VictoryBarChartExampleCode}>
        Bar Chart Example
      </GalleryExampleTile>
    </>
  );
}
