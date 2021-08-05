/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';
import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';

import NxStatefulSegmentedButtonExample from './NxStatefulSegmentedButtonExample';

const nxStatefulSegmentedButtonCode = require('./NxStatefulSegmentedButtonExample?raw');

export default function NxStatefulSegmentedButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          Stateful variant of NxSegmentedButton which manages the dropdown open/close state and events internally.
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
              <NxTable.Cell>variant</NxTable.Cell>
              <NxTable.Cell>'primary' | 'secondary' | 'tertiary'</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The variant of button. See examples of each variant below.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>buttonContent</NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The content to display within the main button segment.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>children</NxTable.Cell>
              <NxTable.Cell>ReactElement | ReactElement[]</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The items to display within the dropdown menu. Anything that can appear
                within an <NxCode>NxDropdown</NxCode> is supported.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onClick</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Click handler for the main segment of the button. Does not fire in response to dropdown interactions.
                Receives the click event as a parameter.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Disables both segments of the button when true.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  HTML div Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>N/A</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxSegmentedButton</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={NxStatefulSegmentedButtonExample}
                          codeExamples={nxStatefulSegmentedButtonCode}>
        Example of an <NxCode>NxStatefulSegmentedButton</NxCode>.
      </GalleryExampleTile>
    </>
  );
}
