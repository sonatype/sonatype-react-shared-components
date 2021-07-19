/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile } from '../gallery-components/GalleryTiles';
import { NxCode, NxH2, NxH3, NxP, NxTable, NxTableBody, NxTableCell, NxTableHead, NxTableRow,
  NxTextLink, NxWarningAlert } from '@sonatype/react-shared-components';

const ReactVisPage = () =>
  <>
    <GalleryDescriptionTile >
      <NxP>
        React-vis is a React-based data visualization library. It is highly customizable, easy-to-use, and very
        React-friendly. The library is composed of React components that are used to render common data visualization
        charts like line/area/bar charts, scatterplots, pie and donut charts etc.
      </NxP>
      <NxH2>React-vis Basics</NxH2>
      <NxH3>XYPlot</NxH3>
      <NxP>
        Every series chart that React-vis generates (excludes RadialChart, Sankey, Sunburst and Treemap)
        is inside a parent component called <NxCode>XYPlot</NxCode> that
        requires two props: <NxCode>height</NxCode> and <NxCode>width</NxCode>.
      </NxP>
      <NxH3>Ordering</NxH3>
      <NxP>
        Similar to traditional React, order matters as components are drawn in order. For example,
        placing <NxCode>{'<VerticalGridLines />'}</NxCode> before <NxCode>{'<LineSeries data={data} />'}</NxCode> will
        draw the chart on top of the gridlines.
      </NxP>
      <NxH3>Colors</NxH3>
      <NxP>
        Colors are assigned to charts by passing in the <NxCode>color</NxCode> or
        the <NxCode>stroke</NxCode> prop depending on the type of chart being used.
      </NxP>
      <NxP>
        <NxCode>{'<LineSeries />'}</NxCode> charts use the <NxCode>stroke</NxCode> prop
        to determine colors of the lines.
      </NxP>
      <NxP>
        <NxCode>{'<BarSeries />'}</NxCode> charts use the <NxCode>color</NxCode> prop to
        determine colors of the bars.
      </NxP>
      <NxP>
        <NxCode>{'<RadialChart />'}</NxCode> uses the <NxCode>color</NxCode> property on
        the <NxCode>data</NxCode> object to determine colors of the bars.
      </NxP>
      <NxP>
        RSC's <NxCode>{'selectableColors'}</NxCode> array provides a seamlessly way of
        assigning colors based on RSC color guidelines. Usage is quite simple. Simply import
        the <NxCode>{'selectableColors'}</NxCode> array and pass it on the <NxCode>stroke</NxCode> or
        the <NxCode>color</NxCode> prop. An example of using the color
        purple (<NxCode>selectableColors[0]</NxCode>) is shown below:
      </NxP>
      <NxP>
        <NxCode>{'<LineSeries data={chartData} stroke={selectableColors[0]}/>'}</NxCode>
      </NxP>
      <NxWarningAlert>
        When assigning colors to charts, it is recommended to choose colors from
        RSC's <NxCode>{'selectableColors'}</NxCode> array. For more details on colors, please
        check the Color Palettes and Selectable Colors section.
      </NxWarningAlert>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <NxH3>Basic API Reference</NxH3>
        </header>
        <NxP>
          Note: The following table only describles the props used for the React-vis examples on the gallery page.
          For more details, please see the
          <NxTextLink href="https://uber.github.io/react-vis/documentation/welcome-to-react-vis">
            {' official API documentation.'}
          </NxTextLink>
        </NxP>
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
                boolean: if <NxCode>true</NxCode> is present then React-vis will use the no-wobble
                preset. string: available choices include noWobble, gentle, wobbly, and stiff.
                object: expects an object formatting like <NxCode>{'{damping: NUMBER, stiffness: NUMBER}'}</NxCode>.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>data</NxTableCell>
              <NxTableCell>object array</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell>
                Each react-vis chart components require a property, through which
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
