/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisBarGraphExample from './examples/ReactVisBarGraphExample';
import { NxTable, NxTableBody, NxTableCell, NxTableHead, NxTableRow } from '@sonatype/react-shared-components';

const reactVisBarGraphExampleCode = require('./examples/ReactVisBarGraphExample?raw');

const ReactVisBarGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <p className="nx-p">
        Bar graphs are part of <code className="nx-code">{'<BarSeries />'}</code> in React-vis. Both vertical and
        horizontal bar graphs are supported by React-vis.
      </p>
      <p className="nx-p">
        The following documentation only contains basics on how to get started with creating basic bar graphs. <br />
        For the full, official API documentation, please click {' '}
        <a href="https://uber.github.io/react-vis/documentation/series-reference/bar-series" target="_blank">here.</a>
      </p>

      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Data Format Reference</h3>
        </header>

        <p className="nx-p">
          Data points for vertical bar graphs utilize the <code className="nx-code">VerticalBarSeriesPoint</code>
          {' '} interface.
          Data points for horizontal bar graphs utilize the <code className="nx-code">HorizontalBarSeriesPoint</code>
          {' '} interface.
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
              <NxTableCell>x</NxTableCell>
              <NxTableCell>VerticalBarSeries: string/number <br /> HorizontalBarSeries: number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                The x position in coordinates of the box to be used.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>y</NxTableCell>
              <NxTableCell>VerticalBarSeries: number <br /> HorizontalBarSeries: string/number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                The y position in coordinates of the box to be used.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Basic API Reference</h3>
        </header>
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
              <NxTableCell>title</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Shows the title for the axis.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Bar Graph Example"
                        id="react-vis-bar-graph-example"
                        liveExample={ReactVisBarGraphExample}
                        codeExamples={reactVisBarGraphExampleCode}>
      The following example demonstrates how to generate a simple vertical bar graph using
      {' '} <code className="nx-code">{'<VerticalBarSeries />'}</code> <br />
      The example also simulates an async data load task. Clicking on the Update Data button demonstrates how
      React-vis seamlessly renders new data-points on the chart based on new data load.
    </GalleryExampleTile>
  </>;

export default ReactVisBarGraphPage;
