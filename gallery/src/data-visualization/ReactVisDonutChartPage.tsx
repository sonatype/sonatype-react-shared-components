/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../gallery-components/GalleryTiles';
import ReactVisDonutChartExample from './examples/ReactVisDonutChartExample';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody,
  NxP, NxCode, NxH3, NxTextLink } from '@sonatype/react-shared-components';

const reactVisDonutChartExampleCode = require('./examples/ReactVisDonutChartExample?raw');

const ReactVisDonutChartPage = () =>
  <>
    <GalleryDescriptionTile >
      <NxP>
        Donut charts are a type of <NxCode>{'<RadialChart />'}</NxCode> in React-vis. Both pie charts
        and donut charts are supported by React-vis.
      </NxP>
      <NxP>
        The following documentation only contains basics on how to get started with creating basic donut charts.
        For more details, please see the
        <NxTextLink href="https://uber.github.io/react-vis/documentation/other-charts/radial-chart">
          {' official API documentation.'}
        </NxTextLink>
      </NxP>

      <section className="nx-tile-subsection">
        <header className="nx-tile-subsection__header">
          <NxH3 className="nx-h3">Data Format Reference</NxH3>
        </header>
        <NxP>
          Data points for donut charts utilize the <NxCode>RadialChartPoint</NxCode> interface.
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
              <NxTableCell>angle</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                This determines the angular size of each wedge.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>color</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>yes</NxTableCell>
              <NxTableCell>
                This determines the color of each wedge.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>label</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                The label to show next to the wedge.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>subLabel</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                The subLabel to show next to the wedge. This can be used for annotations to the top label.
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
              <NxTableCell>colorType</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>
                By default the color is interpreted as number to be scaled to a color range.
                By providing the prop <NxCode>colorType="literal"</NxCode> overrides to let React-vis
                know that the colors provided are literal color values.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>innerRadius</NxTableCell>
              <NxTableCell>number (in pixels)</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                If radius is not set on the data then this can be used to set the innerRadius for all of the rows.
                This can be useful for building donut charts.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>labelsRadiusMultiplier</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                How far the labels should be from the center of the chart as a function of the radius of the chart.
                If not specified, the default value of 1.1 is used (slightly outside of the chart).
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onValueMouseOut</NxTableCell>
              <NxTableCell>function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                This handler is triggered when the user's mouse leaves a mark. The handler passes two arguments,
                the corresponding datapoint and the actual event.
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
              <NxTableCell>padAngle</NxTableCell>
              <NxTableCell>number/function</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                The padding to be applied between arcs.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>radius</NxTableCell>
              <NxTableCell>number</NxTableCell>
              <NxTableCell>no</NxTableCell>
              <NxTableCell>
                The distance between the origin and the outside of the arc. This values is scaled linearly by default.
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
          </NxTableBody>
        </NxTable>
      </section>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Bar Graph Example"
                        id="react-vis-bar-graph-example"
                        liveExample={ReactVisDonutChartExample}
                        codeExamples={reactVisDonutChartExampleCode}>
      The following example demonstrates how to generate a simple donut chart
      using <NxCode>{'<RadialChart />'}</NxCode>.
    </GalleryExampleTile>
  </>;

export default ReactVisDonutChartPage;
