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
          Data points for vertical bar graphs utilize the <NxCode>VerticalBarSeriesPoint</NxCode>
          {' '} interface.
          Data points for horizontal bar graphs utilize the <NxCode>HorizontalBarSeriesPoint</NxCode>
          {' '} interface.
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
              <NxTableCell>tickFormat</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Format function for the tick label. Typically used to transform ticks to show addtional information.
                For example, <NxCode>{'tickFormat={val => `$${val}`}'}</NxCode> adds a $ before
                the tick label.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>title</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                Shows the title for the respective axis for which the prop is provided.
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
