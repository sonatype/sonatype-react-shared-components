/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile } from '../gallery-components/GalleryTiles';
import { NxCode, NxH2, NxH3, NxP, NxTextLink, NxWarningAlert } from '@sonatype/react-shared-components';
import { Link } from 'react-router-dom';

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
        RSC's <NxCode>{'selectableColorClasses'}</NxCode> provides a seamlessly way of assigning colors based on RSC
        guidelines to react-vis charts. Usage is quite simple. Simply import
        the <NxCode>{'selectableColorClasses'}</NxCode> array and provide the desired color
        to the <NxCode>className</NxCode> prop along with the dark or the light variant of the color chosen.
        Details on the available colors and usage are located
        in the <Link to="/pages/Selectable%20Colors">Selectable Colors</Link> section.
      </NxP>
      <NxP>
        For specifying colors to shape based graphs
        like the <NxCode>{'<BarSeries />'}</NxCode>, <NxCode>{'<MarkSeries />'}</NxCode> or
        the <NxCode>{'<RadialChart />'}</NxCode> charts, please provide
        the <NxCode>{'nx-graph-shape-fill-dark'}</NxCode> or <NxCode>{'nx-graph-shape-fill-light'}</NxCode> class
        to the <NxCode>className</NxCode> prop. For example, to use the dark variant of the color purple on a bar graph:
      </NxP>
      <NxP>
        <NxCode>{'<VerticalBarSeries className={`nx-graph-shape-fill-dark ${selectableColorClasses[0]}`}'}</NxCode>
      </NxP>
      <NxP>
        For specifying colors to line based graphs like <NxCode>{'<LineSeries />'}</NxCode> charts, please provide
        the <NxCode>{'nx-graph-line-fill-dark'}</NxCode> or <NxCode>{'nx-graph-line-fill-light'}</NxCode> class to
        the <NxCode>className</NxCode> prop. For example, to use the light variant of the color blue on a line graph:
      </NxP>
      <NxP>
        <NxCode>{'<LineSeries className={`nx-graph-line-fill-light ${selectableColorClasses[2]}`}'}</NxCode>
      </NxP>
      <NxWarningAlert>
        When assigning colors to charts, it is recommended to choose colors from
        RSC's <NxCode>{'selectableColorClasses'}</NxCode> array. For more usage details on colors, please
        check the <Link to="/pages/Selectable%20Colors">Selectable Colors</Link> section.
      </NxWarningAlert>
      <NxH3>Examples</NxH3>
      <NxP>
        A few examples of generating commonly used graphs have been included for your reference. The examples
        include a <Link to="/pages/Line%20Graph#">Line Graph</Link>, <Link to="/pages/Bar%20Graph">Bar Graph</Link>,
        {' '}<Link to="/pages/Donut%20Chart">Donut Chart</Link>,
        and a <Link to="/pages/Stacked%20Graph">Stacked Graph</Link>.
      </NxP>
      <NxH3>API Reference</NxH3>
      <NxP>
        The example pages contain basic API and data format references for generating the corresponding charts.
        For more details, please see the
        <NxTextLink href="https://uber.github.io/react-vis/documentation/welcome-to-react-vis">
          {' official API documentation.'}
        </NxTextLink>
      </NxP>
    </GalleryDescriptionTile>
  </>;

export default ReactVisPage;
