/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisLineGraphExample from './ReactVisLineGraphExample';
import ReactVisBarGraphExample from './ReactVisBarGraphExample';
import ReactVisDonutChartExample from './ReactVisDonutChartExample';
import { NxTable, NxTableBody, NxTableCell, NxTableHead, NxTableRow } from '@sonatype/react-shared-components';

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

      <h3 className="nx-h2">React-vis Basics</h3>
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

      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Basic API Reference</h3>
        </header>
        <p className="nx-p">
          Note: The following table only describles the props used for examples on this page.
          For the full official API documentation, please click {' '}
          <a href="https://uber.github.io/react-vis/documentation/welcome-to-react-vis" target="_blank">here.</a>
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Name</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Description</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>animation</NxTableCell>
              <NxTableCell>boolean/string/object</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                React-vis utilizes the react-motion animation system that accepts three types of values.
                boolean: if <code className="nx-code">true</code> is present then react-vis will use the no-wobble
                preset. string: available choices include noWobble, gentle, wobbly, and stiff.
                object: expects an object formatting like
                <code className="nx-code">{'{damping: NUMBER, stiffness: NUMBER}'}</code>
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>barWidth</NxTableCell>
              <NxTableCell>number/string/object</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                The percentage for which each bar fills the designated bucket. 1.0 means that the bar fills the whole
                bucket (no padding between bars), while a smaller percentage means more whitespace between the bars.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>colorType</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Assigns the specified color to the series.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>data</NxTableCell>
              <NxTableCell>object array</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell>
                Each react-vis char components require a   property, through which
                we pass an array of objects. These properties correspond to various visual characteristics of the
                corresponding marks. For example, x and y, which are required for most series types, affect the position
                of each mark.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>height</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell>
                The height of the chart to be generated.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>innerRadius (RadialChart only)</NxTableCell>
              <NxTableCell>number (in pixels)</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                If radius is not set on the data then this can be used to set the innerRadius for all of the rows.
                This can be useful for building donut charts.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>labelsRadiusMultiplier (RadialChart only)</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                How far the labels should be from the center of the chart as a function of the radius of the chart.
                If not specified, the default value of 1.1 is used (slightly outside of the chart).
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>radius (RadialChart only)</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                The distance between the origin and the outside of the arc. This values is scaled linearly by default
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>showLabels</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                Whether or not to show the labels specified in the data
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>tickFormat</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Format function for the tick label. Typically used to transform ticks to show addtional information.
                For example, <code className="nx-code">{'tickFormat={val => `$${val}`}'}</code> adds a $ before
                the tick label.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>tickSize</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Tick size for the axis. Sets both inner and outer sizes of the tick line.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>title</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Shows the title for the axis.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>width</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell>
                The width of the chart to be generated.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
    </GalleryDescriptionTile>

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
