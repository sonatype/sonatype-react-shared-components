/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxTable, NxTableBody, NxTableCell,
  NxTableHead, NxTableRow } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisStackedGraphExample from './examples/ReactVisStackedGraphExample';

const reactVisStackedGraphExampleCode = require('./examples/ReactVisStackedGraphExample?raw');

const ReactVisStackedGraphPage = () =>
  <>
    <GalleryDescriptionTile >
      <NxP>
        React-vis also supports stacked graphs where two or more graphs can be stacked on top of each other.
      </NxP>
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
              <NxTableCell>onNearestXY</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                The handler fires a function that takes two argument: the datapoint which is closest to the cursor or
                touch point, and a second object containing:
                the <NxCode>innerX</NxCode> and <NxCode>innerY</NxCode> value(x, y coordinates of the cursor or touch
                point relative to the top left of the plot), <NxCode>index</NxCode> (position of this datapoint in the
                dataset, where 0 is the first datapoint, 1 is the second, etc) plus the actual event
                as <NxCode>event</NxCode>.
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

    <GalleryExampleTile title="Stacked Graph Example"
                        id="react-vis-stacked-graph-example"
                        liveExample={ReactVisStackedGraphExample}
                        codeExamples={reactVisStackedGraphExampleCode}>
      The following example demonstrates how to stack two line graphs using
      two <NxCode>{'<LineSeries />'}</NxCode> graphs and a <NxCode>{'<MarkSeries />'}</NxCode> graph.
    </GalleryExampleTile>
  </>;

export default ReactVisStackedGraphPage;
