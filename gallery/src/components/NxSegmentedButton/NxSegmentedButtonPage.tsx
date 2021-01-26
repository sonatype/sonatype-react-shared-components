/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxSegmentedButtonPrimaryExample from './NxSegmentedButtonPrimaryExample';
import NxSegmentedButtonSecondaryExample from './NxSegmentedButtonSecondaryExample';
import NxSegmentedButtonTertiaryExample from './NxSegmentedButtonTertiaryExample';
import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

const nxSegmentedButtonPrimaryCode = require('!!raw-loader!./NxSegmentedButtonPrimaryExample').default,
    nxSegmentedButtonSecondaryCode = require('!!raw-loader!./NxSegmentedButtonSecondaryExample').default,
    nxSegmentedButtonTertiaryCode = require('!!raw-loader!./NxSegmentedButtonTertiaryExample').default;

export default function NxSegmentedButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">NxSegmentedButton</code> renders a "segmented" or "split" button - one which
          contains the usual button behavior but in addition has a separate section on the right-hand end which
          opens a dropdown menu.
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
              <NxTableCell>isOpen</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>Set to true to have the dropdown menu rendered as open.</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>onToggleOpen</NxTableCell>
              <NxTableCell>Function</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                Callback function called when the dropdown toggle segment of the button is activated.
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

      <GalleryExampleTile title="Primary Variant"
                          id="nx-segmented-button-primary-example"
                          liveExample={NxSegmentedButtonPrimaryExample}
                          codeExamples={nxSegmentedButtonPrimaryCode}>
        An <code className="nx-code">NxSegmentedButton</code> using primary styling
      </GalleryExampleTile>

      <GalleryExampleTile title="Secondary Variant"
                          id="nx-segmented-button-secondary-example"
                          liveExample={NxSegmentedButtonSecondaryExample}
                          codeExamples={nxSegmentedButtonSecondaryCode}>
        An <code className="nx-code">NxSegmentedButton</code> using secondary styling
      </GalleryExampleTile>

      <GalleryExampleTile title="Tertiary Variant"
                          id="nx-segmented-button-tertiary-example"
                          liveExample={NxSegmentedButtonTertiaryExample}
                          codeExamples={nxSegmentedButtonTertiaryCode}>
        An <code className="nx-code">NxSegmentedButton</code> using tertiary styling
      </GalleryExampleTile>
    </>
  );
}
