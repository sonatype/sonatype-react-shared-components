/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxH3, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxBinaryDonutChartMinimalExample from './NxBinaryDonutChartMinimalExample';
import NxBinaryDonutChartNoHoleExample from './NxBinaryDonutChartNoHoleExample';
import NxBinaryDonutChartLargeHoleExample from './NxBinaryDonutChartLargeHoleExample';
import NxBinaryDonutChartBackgroundColorExample from './NxBinaryDonutChartBackgroundColorExample';
import NxBinaryDonutChartCustomExample from './NxBinaryDonutChartCustomExample';

import './NxBinaryDonutChartBackgroundColorExample.scss';
import './NxBinaryDonutChartCustomExample.scss';

const nxBinaryDonutChartMinimalExampleCode = require('./NxBinaryDonutChartMinimalExample?raw');
const nxBinaryDonutChartNoHoleExample = require('./NxBinaryDonutChartNoHoleExample?raw');
const nxBinaryDonutChartLargeHoleExample = require('./NxBinaryDonutChartLargeHoleExample?raw');
const nxBinaryDonutChartBackgroundColorExample = require('./NxBinaryDonutChartBackgroundColorExample?raw');
const nxBinaryDonutChartCustomExample = require('./NxBinaryDonutChartCustomExample?raw');
const nxBinaryDonutChartCustomExampleScss = require('./NxBinaryDonutChartCustomExample.scss?raw');

const NxBinaryDonutChartPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxBinaryDonutChart</NxCode> represents a binary donut chart.
      </NxP>
      <NxP>
        The <NxCode>NxBinaryDonutChart</NxCode> accepts a default height of 30px (without padding or margin), which
        can be modified by applying a new class to the element with the height property and preferred value defined.
      </NxP>
      <NxP>
        By default the CSS display property of <NxCode>NxBinaryDonutChart</NxCode> is set to a value of
        inline. <NxCode>display:inline</NxCode> will not generate any line breaks to maintain the flow of the
        container, and situate preceding / proceeding elements of the same display property next to one another. The
        chart's display property can be overridden to block, which will generate a line break both before and after
        the element to create vertical stacking within the parent container. This can be done by applying a new class
        to the element with the display property's value set to block.
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
            <NxTable.Cell>value</NxTable.Cell>
            <NxTable.Cell>0 &le; number &le; <NxCode>maxVal</NxCode></NxTable.Cell>
            <NxTable.Cell>Yes, unless <NxCode>percent</NxCode> is specified</NxTable.Cell>
            <NxTable.Cell>
              Defines current value for the binary donut chart. A number from 0 to <NxCode>maxVal</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>percent</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Percentage which this donut represents. E.g. when 0 the donut is empty, and as it increases towards 100
              the amount of the donut which is filled in increases.
              <NxWarningAlert>
                Deprecated: With the introduction of the <NxCode>value</NxCode> prop, you can now define
                current value, and the percent will be calculated based on the <NxCode>value</NxCode> prop
                and the <NxCode>maxVal</NxCode> prop.
              </NxWarningAlert>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>maxVal</NxTable.Cell>
            <NxTable.Cell>number &gt; 0 and number &ge; <NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Defines the maximum value for the binary donut chart. The default value is set to 100.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>innerRadiusPercent</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              The size of the hole in the donut, as a percentage of the donut's overall size.  The default value is 50.
              The computation and use of this prop ignores the 1px white borders on the inside and outside of the donut.
              That is, when the component is rendered at its default 30px width, a value of 50 on this prop corresponds
              to 14px (<NxCode>((30px - (1px * 2)) * 50%)</NxCode>). That 14px is the radius of the inside of the actual
              donut value arc and background, with the inner border being 1px further inside.
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
      <NxH3>Accessibility</NxH3>
      <NxP>
        <NxCode>NxBinaryDonutChart</NxCode> uses the <NxCode>meter</NxCode> role and must have an
        accessible name. If the meter has a visible label, it should be referenced by
        {' '} <NxCode>aria-labelledby</NxCode> attribute. Otherwise, the element with role meter
        must have a label provided by <NxCode>aria-label</NxCode> attribute.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Attribute</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>aria-labelledby</NxCode></NxTable.Cell>
            <NxTable.Cell>
              When the <NxCode>aria-labelledby</NxCode> attribute is used an ID is applied to the
              HTML element that will be providing the label information, the ID is referenced by
              {' '} <NxCode>aria-labelledby</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>aria-label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              When the <NxCode>aria-label</NxCode> attribute is used the text is added directly to the
              attribute.
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
      These charts demonstrate the usage of <NxCode>aria-label</NxCode> to describe the chart contents.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with no Hole"
                        id="nx-binary-donut-chart-no-hole-example"
                        codeExamples={nxBinaryDonutChartNoHoleExample}
                        liveExample={NxBinaryDonutChartNoHoleExample}>
      An example of a <NxCode>NxBinaryDonutChart</NxCode> without a hole i.e. a pie chart. This chart demonstrates
      the usage of <NxCode>maxVal</NxCode> to define the maximum value.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with a Large Hole"
                        id="nx-binary-donut-chart-large-hole-example"
                        codeExamples={nxBinaryDonutChartLargeHoleExample}
                        liveExample={NxBinaryDonutChartLargeHoleExample}>
      An example of a <NxCode>NxBinaryDonutChart</NxCode> with a large hole.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example on a different colored background"
                        id="nx-binary-donut-chart-colored-background-example"
                        codeExamples={nxBinaryDonutChartBackgroundColorExample}
                        liveExample={NxBinaryDonutChartBackgroundColorExample}>
      Examples of <NxCode>NxBinaryDonutChart</NxCode>s on containers that have background colors which match parts
      of the chart. This example shows that the chart is still discernable in this case due to the white borders
      on the inside and outside of the donut.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Custom CSS Properties"
                        id="nx-binary-donut-chart-custom-examples"
                        codeExamples={[nxBinaryDonutChartCustomExample,
                          { content: nxBinaryDonutChartCustomExampleScss, language: 'scss' }]}
                        liveExample={NxBinaryDonutChartCustomExample}>
      An example of <NxCode>NxBinaryDonutChart</NxCode>s with customized CSS properties. The example shows
      the display property set to block, the height set to 45px, and a custom color.
    </GalleryExampleTile>
  </>;

export default NxBinaryDonutChartPage;
