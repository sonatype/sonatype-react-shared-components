/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisBarGraphExample from './examples/ReactVisBarGraphExample';
import { NxCode, NxH3, NxP, NxTable, NxTableBody, NxTableCell, NxTableHead,
  NxTableRow,
  NxTextLink} from '@sonatype/react-shared-components';

const reactVisBarGraphExampleCode = require('./examples/ReactVisBarGraphExample?raw');

const ReactVisBarGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <NxP>
        Bar graphs are part of <NxCode>{'<BarSeries />'}</NxCode> in React-vis. Both vertical and
        horizontal bar graphs are supported by React-vis.
      </NxP>
      <NxP>
        The following documentation only contains basics on how to get started with creating basic bar graphs.
        For more details, please see the
        <NxTextLink href="https://uber.github.io/react-vis/documentation/series-reference/bar-series">
          {' official API documentation.'}
        </NxTextLink>
      </NxP>

      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <NxH3 className="nx-h3">Data Format Reference</NxH3>
        </header>
        <NxP>
          Data points for vertical bar graphs utilize the <NxCode>VerticalBarSeriesPoint</NxCode> interface.
          Data points for horizontal bar graphs utilize the <NxCode>HorizontalBarSeriesPoint</NxCode> interface.
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
              <NxTableCell>x</NxTableCell>
              <NxTableCell>VerticalBarSeries: string/number <br /> HorizontalBarSeries: number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                The x position in coordinates of the box to be used. In VerticalBarSeries, if the value provided
                is a string, this quantity is treated as a category for the x-axis.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>y</NxTableCell>
              <NxTableCell>VerticalBarSeries: number <br /> HorizontalBarSeries: string/number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                The y position in coordinates of the box to be used. In HorizontalBarSeries, if the value provided
                is a string, this quantity is treated as a category for the y-axis.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </section>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <NxH3 className="nx-h3">Basic API Reference</NxH3>
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
              <NxTableCell>number</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                The percentage for which each bar fills the designated bucket. 1.0 means that the bar fills the whole
                bucket (no padding between bars), while a smaller percentage means more whitespace between the bars.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>className</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                DOM classNames to be added to the wrapper component.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>data</NxTableCell>
              <NxTableCell>object array</NxTableCell>
              <NxTableCell>yes</NxTableCell>
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
              <NxTableCell>yes</NxTableCell>
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
              <NxTableCell>onNearestX</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                This handler fires when the user moves their mouse or touches point somewhere on the plot.
                The handler fires a function that takes two arguments: the datapoint with the x value closest to the
                cursor or touch point, and a second object containing: the <NxCode>innerX</NxCode> value (x
                coordinates of the cursor relative to the left of the plot), <NxCode>index</NxCode> (position
                of this datapoint in the dataset, where 0 is the first datapoint, 1 is the second, etc)
                plus the actual event as <NxCode>event</NxCode>.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>tickFormat</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Ticks are the values used to show specific points on the axes. This function is typically used to
                transform the labels for the ticks to show addtional information.
                For example, <NxCode>{'tickFormat={val => `$${val}`}'}</NxCode> adds a $ before the tick label.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>title</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                Shows the title for the respective axis for which the prop is provided.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>width</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                The width of the chart to be generated.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>xType</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                Specifices if the x-axis is to be of the ordinal or category type. Typically, for vertical bar
                graphs, <NxCode>xType="ordinal"</NxCode> is set on the <NxCode>XYPlot</NxCode>.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>yType</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                Specifices if the y-axis is to be of the ordinal or category type. Typically, for horizontal bar
                graphs, <NxCode>yType="ordinal"</NxCode> is set on the <NxCode>XYPlot</NxCode>.
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
      The following example demonstrates how to generate a simple vertical bar graph
      using <NxCode>{'<VerticalBarSeries />'}</NxCode>.
    </GalleryExampleTile>
  </>;

export default ReactVisBarGraphPage;
