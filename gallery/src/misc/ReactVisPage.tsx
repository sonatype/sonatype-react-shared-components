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
import ReactVisStackedGraphExample from './ReactVisStackedGraphExample';
import { NxTable, NxTableBody, NxTableCell, NxTableHead, NxTableRow,
  NxWarningAlert } from '@sonatype/react-shared-components';

const reactVisLineGraphExampleCode = require('./ReactVisLineGraphExample?raw'),
    reactVisBarGraphExampleCode = require('./ReactVisBarGraphExample?raw'),
    reactVisDonutChartExampleCode = require('./ReactVisDonutChartExample?raw'),
    reactVisStackedGraphExampleCode = require('./ReactVisStackedGraphExample?raw')
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
        Every series chart that React-vis generates (excludes RadialChart, Sankey, Sunburst and Treemap)
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

      <h3 className="nx-h3">Colors</h3>
      <p className="nx-p">
        Colors can be set in many ways in React-vis. Without even providing any specific color values,
        React-vis generates default colors that look good on charts.
      </p>

      <p className="nx-p">
        <code className="nx-code">{'<LineSeries />'}</code> charts use the <code className="nx-code">stroke</code>
        {' '} prop to determine colors of the lines.
      </p>

      <p className="nx-p">
        <code className="nx-code">{'<BarSeries />'}</code> charts use the <code className="nx-code">color</code>
        {' '} prop to determine colors of the bars.
      </p>

      <p className="nx-p">
        <code className="nx-code">{'<RadialChart />'}</code> uses the <code className="nx-code">color</code>
        {' '} property on the <code className="nx-code">data</code> object to determine colors of the bars.
      </p>

      <p className="nx-p">
        RSC's <code className="nx-code">{'selectableColors'}</code> array can be used seamlessly to provide
        pre-approved colors to color the charts. Usage is quite simple. Simply import the
        <code className="nx-code">{'selectableColors'}</code> array and pass it on the
        <code className="nx-code">stroke</code> or the <code className="nx-code">color</code> prop. An example
        of passing the color to be purple (<code className="nx-code">selectableColors[0]</code>) is shown below.
      </p>

      <p className="nx-p">
        <code className="nx-code">{'<LineSeries data={chartData} stroke={selectableColors[0]}/>'}</code>
      </p>

      <NxWarningAlert>
        Although React-vis supports custom colors, it is highly recommended to follow RSC design guidelines
        for colors. Please check the Color Palettes and Selectable Colors section for approved colors.
      </NxWarningAlert>

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
                boolean: if <code className="nx-code">true</code> is present then React-vis will use the no-wobble
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
              <NxTableCell>color</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Assigns the specified color to the series.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>colorType</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Override to let React-vis know that the colors provided are literal color values
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
              <NxTableCell>onMouseLeave</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                This event handler is triggered whenever the mouse of the user exits the plot area.
                It passes a mouse event.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onNearestXY</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                This handler fires when the user moves their mouse or touch point somewhere on the plot.
                It returns the datapoint corresponding to the mark closest to the cursor or touch point.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onValueMouseOver</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                This handler is triggered either when the user's mouse enters a mark. The handler passes two arguments,
                the corresponding datapoint and the actual event.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onValueMouseOut</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                This handler is triggered either when the user's mouse leaves a mark. The handler passes two arguments,
                the corresponding datapoint and the actual event.
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
              <NxTableCell>stroke</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                In LineSeries, stroke is used instead of color to specify the color of the lines.
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

    <GalleryExampleTile title="Stacked Graph Example"
                        id="react-vis-stacked-graph-example"
                        liveExample={ReactVisStackedGraphExample}
                        codeExamples={reactVisStackedGraphExampleCode}>
    </GalleryExampleTile>
  </>;

export default ReactVisPage;
