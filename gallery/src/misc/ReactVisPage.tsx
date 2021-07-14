/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile, GalleryTile } from '../gallery-components/GalleryTiles';
import ReactVisLineGraphExample from './ReactVisLineGraphExample';
import ReactVisBarGraphExample from './ReactVisBarGraphExample';
import ReactVisDonutChartExample from './ReactVisDonutChartExample';

const reactVisLineGraphExampleCode = require('./ReactVisLineGraphExample?raw'),
    reactVisBarGraphExampleCode = require('./ReactVisBarGraphExample?raw'),
    reactVisDonutChartExampleCode = require('./ReactVisDonutChartExample?raw')
;

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
        Every series chart that react-vis generates (excludes RadialChart, Sankey, Sunburst and Treemap)
        is inside a parent component called <code className="nx-code">XYPlot</code>
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

      <h3 className="nx-h3">Data</h3>
      <p className="nx-p">
        React-vis charts are made up of chart components, like
        <code className="nx-code">{'<LineSeries />, <VerticalBarSeries />, <HorizontalBarSeries />'}</code> etc.
        Each of these components require a <code className="nx-code">data</code> prop through which we pass an
        array of objects.
      </p>
      <p className="nx-p">
        These properties correspond to various visual characteristics of the corresponding marks. For example, x and y,
        which are required for most series types, affect the position of each mark.
      </p>
    </GalleryTile>

    <GalleryExampleTile title="Line Graph Example"
                        id="react-vis-line-graph-example"
                        liveExample={ReactVisLineGraphExample}
                        codeExamples={reactVisLineGraphExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Bar Graph Example"
                        id="react-vis-bar-graph-example"
                        liveExample={ReactVisBarGraphExample}
                        codeExamples={reactVisBarGraphExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="Donut Chart Example"
                        id="react-vis-donut-chart-example"
                        liveExample={ReactVisDonutChartExample}
                        codeExamples={reactVisDonutChartExampleCode}>
    </GalleryExampleTile>
  </>;

export default ReactVisPage;
