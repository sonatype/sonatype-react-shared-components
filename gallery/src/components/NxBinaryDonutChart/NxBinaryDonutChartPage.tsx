/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import NxBinaryDonutChartMinimalExample from './NxBinaryDonutChartMinimalExample';
import NxBinaryDonutChartNoHoleExample from './NxBinaryDonutChartNoHoleExample';
import NxBinaryDonutChartLargeHoleExample from './NxBinaryDonutChartLargeHoleExample';

const nxBinaryDonutChartMinimalExampleCode = require('./NxBinaryDonutChartMinimalExample?raw');
const nxBinaryDonutChartNoHoleExample = require('./NxBinaryDonutChartNoHoleExample?raw');
const nxBinaryDonutChartLargeHoleExample = require('./NxBinaryDonutChartLargeHoleExample?raw');

const NxBinaryDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxBinaryDonutChart</NxCode> represents a binary donut chart.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>percent</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              Percentage which this donut represents. E.g. when 0 the donut is empty, and as it increases towards 100
              the amount of the donut which is filled in increases.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>innerRadiusPercent</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The size of the hole in the donut, as a percentage of the donut's overall size.  The default value is 50.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>aria-label</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If the chart is not accompanied by visible text content that contains the same information that the chart
              conveys, then the chart should have an <NxCode>aria-label</NxCode> attribute giving it
              an accessible name which adequately describes its information for non-visual users. If the chart is
              accompanied by a text description however, such a label would be redundant and the chart is considered
              a presentational element.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>SVG <NxCode>&lt;svg&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/SVG/Element/svg">
                SVG Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              NxBinaryDonutChart supports any SVG attribute that's normally supported
              by <NxCode>&lt;svg&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Minimal Examples"
                        id="nx-binary-donut-chart-minimal-examples"
                        codeExamples={nxBinaryDonutChartMinimalExampleCode}
                        liveExample={NxBinaryDonutChartMinimalExample}>
      Minimal examples of <NxCode>NxBinaryDonutChart</NxCode>s with different values.
      Some of these charts demonstrate the usage of <NxCode>aria-label</NxCode> to describe the
      chart contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with no Hole"
                        id="nx-binary-donut-chart-no-hole-example"
                        codeExamples={nxBinaryDonutChartNoHoleExample}
                        liveExample={NxBinaryDonutChartNoHoleExample}>
      An example of a <NxCode>NxBinaryDonutChart</NxCode> without a hole i.e. a pie chart.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with a Large Hole"
                        id="nx-binary-donut-chart-large-hole-example"
                        codeExamples={nxBinaryDonutChartLargeHoleExample}
                        liveExample={NxBinaryDonutChartLargeHoleExample}>
      An example of a <NxCode>NxBinaryDonutChart</NxCode> with a large hole.
    </GalleryExampleTile>
  </>;

export default NxBinaryDonutChartPage;
