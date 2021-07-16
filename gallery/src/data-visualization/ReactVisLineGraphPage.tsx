/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody } from '@sonatype/react-shared-components';
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisLineGraphExample from './examples/ReactVisLineGraphExample';

const reactVisLineGraphExampleCode = require('./examples/ReactVisLineGraphExample?raw');

const ReactVisLineGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <p className="nx-p">
        Line graphs are part of  <code className="nx-code">{'<LineSeries />'}</code> in React-vis.
      </p>
      <p className="nx-p">
        The following documentation only contains basics on how to get started with creating basic line graphs. <br />
        For the full, official API documentation, please click {' '}
        <a href="https://uber.github.io/react-vis/documentation/series-reference/line-series" target="_blank">here.</a>
      </p>
      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <h3 className="nx-h3">Data Format Reference</h3>
        </header>

        <p className="nx-p">
          Data points for line graphs utilize the <code className="nx-code">LineSeriesPoint</code> interface.
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
              <NxTableCell>stroke</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                In LineSeries, stroke is used instead of color to specify the color of the lines.
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
      The following example demonstrates how to generate a simple line graph using
      {' '} <code className="nx-code">{'<LineSeries />'}</code> <br />
      The example also simulates an async data load task. Clicking on the Update Data button demonstrates how
      React-vis seamlessly renders new data-points on the chart based on new data load.
    </GalleryExampleTile>
  </>;

export default ReactVisLineGraphPage;
