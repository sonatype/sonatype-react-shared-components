/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisStackedGraphExample from './examples/ReactVisStackedGraphExample';

const reactVisStackedGraphExampleCode = require('./examples/ReactVisStackedGraphExample?raw');

const ReactVisStackedGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <NxP>
        React-vis also supports stacked graphs where two or more graphs can be stacked on top of each other.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Bar Graph Example"
                        id="react-vis-bar-graph-example"
                        liveExample={ReactVisStackedGraphExample}
                        codeExamples={reactVisStackedGraphExampleCode}>
      The following example demonstrates how to stack two line graphs using
      two <NxCode>{'<LineSeries />'}</NxCode> graphs and a <NxCode>{'<MarkSeries />'}</NxCode> graph.
    </GalleryExampleTile>
  </>;

export default ReactVisStackedGraphPage;
