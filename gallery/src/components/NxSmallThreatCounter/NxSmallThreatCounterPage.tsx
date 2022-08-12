/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTextLink, NxTable, NxP, NxCode } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxSmallThreatCounterExample from './NxSmallThreatCounterExample';
import NxSmallThreatCounterCustomExample from './NxSmallThreatCounterCustomExample';
import NxSmallThreatCounterInfiniteMaxDigitsExample from './NxSmallThreatCounterInfiniteMaxDigitsExample';

const NxSmallThreatCounterCode = require('./NxSmallThreatCounterExample?raw');
const NxSmallThreatCounterCustomCode = require('./NxSmallThreatCounterCustomExample?raw');
const NxSmallThreatCounterInfiniteMaxDigitsCode = require('./NxSmallThreatCounterInfiniteMaxDigitsExample?raw');

const NxSmallThreatCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Similar to <NxCode>NxThreatCounter</NxCode>, <NxCode>NxSmallThreatCounter</NxCode> displays a series of
        counts of "threats" in different severity categories. This component is more compact than the
        regular <NxCode>NxThreatCounter</NxCode> and is suitable for use within table rows where alignment of counters
        from one row to the next is important.  While <NxCode>NxThreatCounter</NxCode> statically displays the name of
        each threat level category, <NxCode>NxSmallThreatCounter</NxCode> initially displays only the count itself
        within a colored background. Tooltips and accessibility labels are provided to give the user more information
        on the category for each count when they inspect (via hover or screenreader) each count.
      </NxP>
      <NxP>
        Each count is optional. If no value is provided for a given count, then the indicator for that severity level
        will not be rendered and no space for it will be allotted. It is intended that within a table using this
        component, each row would define the same categories, thus getting the same indicators with the same spacing,
        visually resulting in a grid-like appearance across all of the rows.
      </NxP>
      <NxP>
        In order to accomodate consistent sizing of the counters even across separate instances of the component
        in separate table rows, the component will by default only render values up to a certain number of digits.
        The number of digits to render is configurable, and each counter will be sized as needed for that number.
        It is also possible to disable this sizing consistency for cases where there are not multiple instances
        requiring mutual consistency and where showing the exact values, no matter how large, is more important.
        See the <NxCode>maxDigits</NxCode> prop below for details.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Default</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>criticalCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of critical threats. If no value is provided, then the count will be
              hidden and no space allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>severeCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of severe threats. If no value is provided, then the count will be
              hidden and no space allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>moderateCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of moderate threats. If no value is provided, then the count will be
              hidden and no space allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>lowCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of low threats. If no value is provided, then the count will be
              hidden and no space allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>noneCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of threats of severity "none". If no value is provided, then the count
              will be hidden and no space allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>unspecifiedCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of unspecfied threats. If no value is provided, then the count
              will be hidden and no space allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>maxDigits</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>3</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                The maximum number of digits to display within the counter. This value is used to make all counters
                across an entire table consistent in width. Each count is given space for this number of digits along
                with a plus sign for rendering values that go over the maximum.  For instance, if this prop is set to
                2, then the counters will display only one or two digits numbers. If any count in that case is greater
                than two digits, the counter will display "99+". The counters will be exactly wide enough to display
                "99+" regardless of their actual content. Note that since the default for this prop is 3, by default
                counters will be wide enough to display "999+".
              </NxP>
              <NxP>
                If <NxCode>maxDigits</NxCode> is set to <NxCode>Infinity</NxCode>, then a different behavior is
                activated: all counters within this instance of <NxCode>NxSmallThreatCounter</NxCode> will be as
                wide as needed to display the largest number in any one of them. That is, within the component instance,
                all of the counters will be the same width, and that width will depend on the data present. However,
                when compared to another instance that uses different data, the widths may not be the same.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              <NxCode>NxSmallThreatCounter</NxCode> supports any HTML attribute that's normally
              supported by <NxCode>&lt;div&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxSmallThreatCounter Table Example"
                        id="nx-small-threat-counter-example"
                        liveExample={NxSmallThreatCounterExample}
                        codeExamples={NxSmallThreatCounterCode}>
      A table containing an <NxCode>NxSmallThreatCounter</NxCode> in each row. Note that tables are the only intended
      use case for this component.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxSmallThreatCounter Custom Example"
                        id="nx-small-threat-counter-max-digits-example"
                        liveExample={NxSmallThreatCounterCustomExample}
                        codeExamples={NxSmallThreatCounterCustomCode}>
      This table of <NxCode>NxSmallThreatCounter</NxCode>s demonstrates the rendering without some categories and with
      a custom <NxCode>maxDigits</NxCode>. Adjacent text is also shown to demonstrate
      how <NxCode>NxSmallThreatCounter</NxCode> spaces out relative to other content.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxSmallThreatCounter Infinite Max Digits Example"
                        id="nx-small-threat-counter-infinite-max-digits-example"
                        liveExample={NxSmallThreatCounterInfiniteMaxDigitsExample}
                        codeExamples={NxSmallThreatCounterInfiniteMaxDigitsCode}>
      This example demonstrates two <NxCode>NxSmallThreatCounter</NxCode>s using the
      infinite <NxCode>maxDigits</NxCode> configuration. Note that each instance is capable of showing the full values
      of its data, but also that the two instances, with different data, are different sizes. This configuration should
      typically only be used in situations where there is a single <NxCode>NxSmallThreatCounter</NxCode>, so that the
      lack of alignment becomes moot.
    </GalleryExampleTile>
  </>;

export default NxSmallThreatCounterPage;
