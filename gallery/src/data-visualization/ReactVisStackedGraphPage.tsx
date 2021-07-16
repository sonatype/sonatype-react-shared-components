/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisStackedGraphExample from './examples/ReactVisStackedGraphExample';

const reactVisStackedGraphExampleCode = require('./examples/ReactVisStackedGraphExample?raw');

const ReactVisStackedGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <p className="nx-p">
        React-vis also supports stacked graphs where two or more graphs can be stacked on top of each other.
      </p>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Bar Graph Example"
                        id="react-vis-bar-graph-example"
                        liveExample={ReactVisStackedGraphExample}
                        codeExamples={reactVisStackedGraphExampleCode}>
      The following example demonstrates how to stack two line graphs using two
      {' '} <code className="nx-code">{'<LineSeries />'}</code> graphs and a
      {' '} <code className="nx-code">{'<MarkSeries />'}</code> graph.
      <br />
      The example also simulates an async data load task. Clicking on the Update Data button demonstrates how
      React-vis seamlessly renders new data-points on the chart based on new data load.
    </GalleryExampleTile>
  </>;

export default ReactVisStackedGraphPage;
