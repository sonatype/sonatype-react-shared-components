/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxTableDefault from './NxTableDefaultExample';
import NxTableClickable from './NxTableClickableExample';
import NxTableEmpty from './NxTableEmptyExample';
import NxTableErrorState from './NxTableErrorStateExample';

const NxTableSimpleCode = require('!!raw-loader!./NxTableDefaultExample').default,
    NxTableClickableCode = require('!!raw-loader!./NxTableClickableExample').default,
    NxTableEmptyCode = require('!!raw-loader!./NxTableEmptyExample').default,
    NxTableErrorStateCode = require('!!raw-loader!./NxTableErrorStateExample').default;

const NxTablesExamples = () =>
  <>
    <GalleryTile title="NX Simple Table Example">
      <NxTableDefault />
      <CodeExample content={NxTableSimpleCode}/>
    </GalleryTile>

    <GalleryTile title="NX Table with Clickable Rows Example">
      <NxTableClickable />
      <CodeExample content={NxTableClickableCode}/>
    </GalleryTile>

    <GalleryTile title="NX Table Empty Example">
      <NxTableEmpty />
      <CodeExample content={NxTableEmptyCode}/>
    </GalleryTile>

    <GalleryTile title="NX Table with Error Message Example">
      <NxTableErrorState />
      <CodeExample content={NxTableErrorStateCode}/>
    </GalleryTile>
  </>;

export default NxTablesExamples;
