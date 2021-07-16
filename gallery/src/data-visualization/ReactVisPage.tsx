/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile } from '../gallery-components/GalleryTiles';
import { NxTable, NxTableBody, NxTableCell, NxTableHead, NxTableRow,
  NxWarningAlert } from '@sonatype/react-shared-components';

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
        Colors are assigned to charts by passing in the <code className="nx-code">color</code> or the
        <code className="nx-code">stroke</code> prop depending on the type of chart being used.
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
        RSC's <code className="nx-code">{'selectableColors'}</code> array provides a seamlessly way of
        assigning colors based on RSC color guidelines. Usage is quite simple. Simply import the
        <code className="nx-code">{'selectableColors'}</code> array and pass it on the
        <code className="nx-code">stroke</code> or the <code className="nx-code">color</code> prop. An example
        of using the color purple (<code className="nx-code">selectableColors[0]</code>) is shown below:
      </p>
      <p className="nx-p">
        <code className="nx-code">{'<LineSeries data={chartData} stroke={selectableColors[0]}/>'}</code>
      </p>
      <NxWarningAlert>
        When assigning colors to charts, it is critical to choose colors from RSC's
        {' '} <code className="nx-code">{'selectableColors'}</code> array.
        For more details on colors, please check the Color Palettes and Selectable Colors section.
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
  </>;

export default ReactVisPage;
