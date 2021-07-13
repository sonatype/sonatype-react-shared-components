/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile, GalleryTile } from '../gallery-components/GalleryTiles';
import ReactVisSimpleExample from './ReactVisSimpleExample';

const reactVisSimpleExampleCode = require('./ReactVisSimpleExample?raw');

const ReactVisPage = () =>
  <>
    <GalleryDescriptionTile >
      <p className="nx-p">
        React-vis is a React-based data visualization library. It is highly customizable, easy-to-use, and very
        React-friendly. The library is composed of React components that are used to render common data visualization
        charts like line/area/bar charts, scatterplots, pie and donut charts etc.
      </p>
    </GalleryDescriptionTile>

    <GalleryTile title="React-vis Basics" >
      <h3 className="nx-h3">XYPlot</h3>
      <p className="nx-p">
        Every chart that react-vis generates is inside a parent component called <code className="nx-code">XYPlot</code>
        that requires two props: <code className="nx-code">height</code> and <code className="nx-code">width</code>.
      </p>
      <p className="nx-p">
        <code className="nx-code">{'<XYPlot height={300} width = {300} />'}</code>
      </p>
      <h3 className="nx-h3">Ordering</h3>
      <p className="nx-p">
        Similar to traditional React, order matters as components are drawn in order. For example, placing
        <code className="nx-code">{'<VerticalGridLines />'}</code> before
        <code className="nx-code">{'<LineSeries data={data} />'}</code> will draw the chart on top of the gridlines.
      </p>

    </GalleryTile>

    <GalleryExampleTile title="React-Vis Example"
                        id="nx-alert-custom-example"
                        liveExample={ReactVisSimpleExample}
                        codeExamples={reactVisSimpleExampleCode}>
    </GalleryExampleTile>
  </>;

export default ReactVisPage;
