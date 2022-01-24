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

const NxSmallThreatCounterCode = require('./NxSmallThreatCounterExample?raw');
const NxSmallThreatCounterCustomCode = require('./NxSmallThreatCounterCustomExample?raw');

const NxSmallThreatCounterPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Similar to <NxCode>NxThreatCounter</NxCode>, <NxCode>NxSmallThreatCounter</NxCode> displays a series of
        counts of "threats" in different severity categories. This component is more compact than the
        regular <NxCode>NxThreatCounter</NxCode> and is specifically intended for use within table rows.
        While <NxCode>NxThreatCounter</NxCode> statically displays the name of each threat level
        category, <NxCode>NxSmallThreatCounter</NxCode> initially displays only the count itself within a colored
        background. Tooltips and accessibility labels are provided to give the user more information on the category
        for each count when they inspect (via hover or screenreader) each count.
      </NxP>
      <NxP>
        Each count is optional. If no value is provided for a given count, then the indicator for that severity level
        will not be rendered and no space for it will be allotted. In addition, indicators for counts of zero are
        invisible - the space for them is still allotted but they do not render. It is intended that within a
        table using this component, each row would define the same categories, thus getting the same indicators
        with the same spacing, visually resulting in a grid-like appearance across all of the rows.
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
              hidden and no space allotted. If zero is provided, then the count will be hidden but space for it
              will be allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>severeCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of severe threats. If no value is provided, then the count will be
              hidden and no space allotted. If zero is provided, then the count will be hidden but space for it
              will be allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>moderateCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of moderate threats. If no value is provided, then the count will be
              hidden and no space allotted. If zero is provided, then the count will be hidden but space for it
              will be allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>lowCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of low threats. If no value is provided, then the count will be
              hidden and no space allotted. If zero is provided, then the count will be hidden but space for it
              will be allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>noneCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of threats of severity "none". If no value is provided, then the count
              will be hidden and no space allotted. If zero is provided, then the count will be hidden but space for
              it will be allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>unspecifiedCount</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell />
            <NxTable.Cell>
              A numerical value, the number of unspecfied threats. If no value is provided, then the count
              will be hidden and no space allotted. If zero is provided, then the count will be hidden but space for
              it will be allotted.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>maxDigits</NxTable.Cell>
            <NxTable.Cell>number</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>3</NxTable.Cell>
            <NxTable.Cell>
              The maximum number of digits to display within the counter. This value is used to make all counters
              across an entire table consistent in width. Each count is given space for this number of digits along
              with a plus sign for rendering values that go over the maximum.  For instance, if this prop is set to
              2, then the counters will display only one or two digits numbers. If any count in that case is greater
              than two digits, the counter will display "99+". The counters will be exactly wide enough to display
              "99+" regardless of their actual content. Note that since the default for this prop is 3, by default
              counters will be wide enough to display "999+".
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
  </>;

export default NxSmallThreatCounterPage;
