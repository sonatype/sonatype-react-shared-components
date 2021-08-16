/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulDropdownExample from './NxStatefulDropdownExample';

const nxStatefulDropdownExampleCode = require('./NxStatefulDropdownExample?raw');

const NxStatefulDropdownPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Dropdown component.</NxP>
      <NxP>Props:</NxP>
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
            <NxTable.Cell>label</NxTable.Cell>
            <NxTable.Cell>string | VDOM</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Content to render in the dropdown's button</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>variant</NxTable.Cell>
            <NxTable.Cell>"primary" | "secondary" | "tertiary"</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              What type of button to render for the dropdown.
              Defaults to <NxCode>"tertiary"</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>className</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>Extra classes to apply to the component</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>disabled</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Controls if the component should be rendered as disabled.
              Defaults to <NxCode>false</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>toggleTooltip</NxTable.Cell>
            <NxTable.Cell>string | NxTooltip Props</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If present, describes a tooltip to be placed on the dropdown's toggle element. There are two ways
              to specify the tooltip: the simpler way is to simply specify the tooltip text as a string. If control
              of more complex tooltip options is desired, an object can be passed which will serve as the props for
              NxTooltip
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              NxStatefulDropdown supports any html attribute that's normally supported by
              {' '}<NxCode>&lt;div&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={nxStatefulDropdownExampleCode}
                        liveExample={NxStatefulDropdownExample}>
      This example demonstrates a simple NxStatefulDropdown, showing that it tracks
      its own open/closed state with no need for support from the surrounding code.
    </GalleryExampleTile>
  </>;

export default NxStatefulDropdownPage;
