/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxInfoAlert, NxTable, NxP, NxCode } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxTooltipExample from './NxTooltipExample';
import NxTooltipWrappingExample from './NxTooltipWrappingExample';
import NxTooltipPlacementExample from './NxTooltipPlacementExample';
import NxTooltipNameExample from './NxTooltipNameExample';

const tooltipsExampleCode = require('./NxTooltipExample?raw'),
    wrappingTooltipsExampleCode = require('./NxTooltipWrappingExample?raw'),
    placementTooltipsExampleCode = require('./NxTooltipPlacementExample?raw'),
    nameTooltipsExampleCode = require('./NxTooltipNameExample?raw'),
    tooltipsExampleStyles = require('./NxTooltipExample.scss?raw');

export default function NxTooltipPage() {
  const codeExamples = [tooltipsExampleCode, { content: tooltipsExampleStyles, language: 'scss' }];

  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          A tooltip component that can wrap other components in order to apply a tooltip to them. The wrapped component
          must be able to receive a ref which it must forward to its top-most native DOM element.
        </NxP>
        <NxInfoAlert>
          Tooltips that are open at page load appear to exhibit a race condition in regards to their positioning.
          Use the <NxCode>open</NxCode> prop with caution
        </NxInfoAlert>
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
              <NxTable.Cell>title</NxTable.Cell>
              <NxTable.Cell>React Node (e.g. VDOM or string)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The tooltip content. If empty, the tooltip is not shown.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>placement</NxTable.Cell>
              <NxTable.Cell>
                "top" | "bottom" | "left" | "right" | "top-middle" | "bottom-middle" | "top-end" | "bottom-end"
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Which side of the element the tooltip should render on. Defaults to top. "top" and "bottom" position
                the tooltip flush to the left edge of the element, "top-middle" and "bottom-middle" center the tooltip,
                while "top-end" and "bottom-end" position it flush to the right edge.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                A CSS class to apply to the tooltip element, to be used for customized styling
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>open</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>Whether the tooltip should be open initially. Defaults to false</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isName</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                Whether the tooltip title should be configured as the accessible name of the element. If false, the
                tooltip title is instead set as the accessible description. Note that when the tooltip is set as
                the accessible name, on many types of elements it will mask whatever other content would have
                been the accessible name, such as the text content of a button. For this reason this prop should
                generally only be set to true on tooltips for elements which would otherwise have no accessible name.
                Defaults to false.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onOpen</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>A callback function executed when the tooltip opens</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onClose</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>A callback function executed when the tooltip closes</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          id="nx-tooltip-example"
                          codeExamples={codeExamples}
                          liveExample={NxTooltipExample}>
        This example demonstrates a series of components with tooltips using various
        configuration options.
      </GalleryExampleTile>
      <GalleryExampleTile title="Wrapping Example"
                          id="nx-tooltip-wrapping-example"
                          codeExamples={wrappingTooltipsExampleCode}
                          liveExample={NxTooltipWrappingExample}>
        This example demonstrates a tooltip who's content is long enough to wrap. Wrapping occurs at 600px.
      </GalleryExampleTile>
      <GalleryExampleTile title="Placement Example"
                          id="nx-tooltip-placement-example"
                          codeExamples={placementTooltipsExampleCode}
                          liveExample={NxTooltipPlacementExample}>
        This example shows all possible placements for tooltips
      </GalleryExampleTile>

      <GalleryExampleTile title="Accessible Name Example"
                          id="nx-tooltip-placement-example"
                          codeExamples={nameTooltipsExampleCode}
                          liveExample={NxTooltipNameExample}>
        This example shows two tooltips attached to SVG elements. One sets the <NxCode>isName</NxCode> prop while the
        other does not, demonstrating the difference between the two.
      </GalleryExampleTile>
    </>
  );
}
