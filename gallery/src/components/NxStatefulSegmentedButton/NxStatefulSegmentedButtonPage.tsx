/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxStatefulSegmentedButtonExample from './NxStatefulSegmentedButtonExample';
import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

const nxStatefulSegmentedButtonCode = require('!!raw-loader!./NxStatefulSegmentedButtonExample').default;

export default function NxStatefulSegmentedButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          Stateful variant of NxSegmentedButton which manages the dropdown open/close state and events internally.
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Default</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>variant</NxTableCell>
              <NxTableCell>'primary' | 'secondary' | 'tertiary'</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>The variant of button. See examples of each variant below.</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>buttonContent</NxTableCell>
              <NxTableCell>ReactNode</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>The content to display within the main button segment.</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>children</NxTableCell>
              <NxTableCell>ReactElement | ReactElement[]</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                The items to display within the dropdown menu. Anything that can appear
                within an <code className="nx-code">NxDropdown</code> is supported.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onClick</NxTableCell>
              <NxTableCell>Function</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                Click handler for the main segment of the button. Does not fire in response to dropdown interactions.
                Receives the click event as a parameter.
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>disabled</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>Disables both segments of the button when true.</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={NxStatefulSegmentedButtonExample}
                          codeExamples={nxStatefulSegmentedButtonCode}>
        Example of an <code className="nx-code">NxStatefulSegmentedButton</code>.
      </GalleryExampleTile>
    </>
  );
}
