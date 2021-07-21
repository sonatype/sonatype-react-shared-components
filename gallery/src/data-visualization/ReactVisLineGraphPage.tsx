/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody,
  NxP, NxH3, NxCode, NxTextLink } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisLineGraphExample from './examples/ReactVisLineGraphExample';

const reactVisLineGraphExampleCode = require('./examples/ReactVisLineGraphExample?raw');

const ReactVisLineGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <NxP>
        Line graphs are part of  <NxCode>{'<LineSeries />'}</NxCode> in React-vis.
      </NxP>
      <NxP>
        The following documentation only contains basics on how to get started with creating basic line graphs.
        For more details, please see the
        <NxTextLink href="https://uber.github.io/react-vis/documentation/series-reference/line-series">
          {' official API documentation.'}
        </NxTextLink>
      </NxP>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <NxH3 className="nx-h3">Data Format Reference</NxH3>
        </header>
        <NxP>
          Data points for line graphs utilize the <NxCode>LineSeriesPoint</NxCode> interface.
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
              <NxTableCell>number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                Left-to-right position of marks in the series.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>y</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                Top-to-bottom position of the top edge of the series.
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
              <NxTableCell>width</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
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
      The following example demonstrates how to generate a simple line graph
      using <NxCode>{'<LineSeries />'}</NxCode>.
    </GalleryExampleTile>
  </>;

export default ReactVisLineGraphPage;
