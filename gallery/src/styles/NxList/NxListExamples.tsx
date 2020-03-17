/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxListSimple from './NxListDefaultExample';
import NxListClickable from './NxListClickableExample';
import NxListMultiLine from './NxListMultiLineExample';
import NxListBulleted from './NxListBulletedExample';
import NxListWithActions from './NxListWithActionsExample';
import NxListDefinitionList from './NxListDefinitionListExample';
import NxListEmpty from './NxListEmptyExample';
import NxListErrorState from './NxListErrorStateExample';

const NxListSimpleCode = require('!!raw-loader!./NxListDefaultExample').default,
    NxListClickableCode = require('!!raw-loader!./NxListClickableExample').default,
    NxListMultiLineCode = require('!!raw-loader!./NxListMultiLineExample').default,
    NxListBulletedCode = require('!!raw-loader!./NxListBulletedExample').default,
    NxListWithActionsCode = require('!!raw-loader!./NxListWithActionsExample').default,
    NxListDefinitionListCode = require('!!raw-loader!./NxListDefinitionListExample').default,
    NxListEmptyCode = require('!!raw-loader!./NxListEmptyExample').default,
    NxListErrorStateCode = require('!!raw-loader!./NxListErrorStateExample').default;

const NxListsExamples = () =>
  <>
    <GalleryTile title="NX Simple List Example">
      <NxListSimple />
      <CodeExample content={NxListSimpleCode}/>
    </GalleryTile>

    <GalleryTile title="NX Clickable List Example">
      <NxListClickable />
      <CodeExample content={NxListClickableCode}/>
    </GalleryTile>

    <GalleryTile title="NX Bulleted List Example">
      <NxListBulleted />
      <CodeExample content={NxListBulletedCode}/>
    </GalleryTile>

    <GalleryTile title="NX Definition List Example">
      <NxListDefinitionList />
      <CodeExample content={NxListDefinitionListCode}/>
    </GalleryTile>

    <GalleryTile title="NX List with Actions Example">
      <NxListWithActions />
      <CodeExample content={NxListWithActionsCode}/>
    </GalleryTile>

    <GalleryTile title="NX Multi-line Example">
      <NxListMultiLine />
      <CodeExample content={NxListMultiLineCode}/>
    </GalleryTile>

    <GalleryTile title="NX List Empty Example">
      <NxListEmpty />
      <CodeExample content={NxListEmptyCode}/>
    </GalleryTile>

    <GalleryTile title="NX List with Error Message Example">
      <NxListErrorState />
      <CodeExample content={NxListErrorStateCode}/>
    </GalleryTile>
  </>;

export default NxListsExamples;
