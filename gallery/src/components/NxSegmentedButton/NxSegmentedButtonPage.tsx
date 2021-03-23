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

const nxSegmentedButtonPrimaryCode = require('./NxSegmentedButtonPrimaryExample?raw'),
    nxSegmentedButtonSecondaryCode = require('./NxSegmentedButtonSecondaryExample?raw'),
    nxSegmentedButtonTertiaryCode = require('./NxSegmentedButtonTertiaryExample?raw');

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
                This activation occurs when the dropdown button
                is clicked and also, if the dropdown is currently open, whenever a click occurs anywhere on the
                screen and any time the ESC key is pressed while focus is within the dropdown.
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
            <NxTableRow>
              <NxTableCell>HTML <code className="nx-code">&lt;div&gt;</code> Attributes</NxTableCell>
              <NxTableCell>
                <a target="_blank"
                   rel="noopener"
                   href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  HTML div Attributes
                </a>
              </NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>N/A</NxTableCell>
              <NxTableCell>
                <code className="nx-code">NxSegmentedButton</code> supports any HTML attribute that's normally
                supported by <code className="nx-code">&lt;div&gt;</code>.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Primary Variant"
                          id="nx-segmented-button-primary-example"
                          liveExample={NxSegmentedButtonPrimaryExample}
                          codeExamples={nxSegmentedButtonPrimaryCode}>
        An <code className="nx-code">NxSegmentedButton</code> using primary styling, a disabled
        primary-styled <code className="nx-code">NxSegmentedButton</code>, and a normal button to demonstrate
        alignment.
      </GalleryExampleTile>

      <GalleryExampleTile title="Secondary Variant"
                          id="nx-segmented-button-secondary-example"
                          liveExample={NxSegmentedButtonSecondaryExample}
                          codeExamples={nxSegmentedButtonSecondaryCode}>
        An <code className="nx-code">NxSegmentedButton</code> using secondary styling, a disabled
        secondary-styled <code className="nx-code">NxSegmentedButton</code>, and a normal button to demonstrate
        alignment.
      </GalleryExampleTile>

      <GalleryExampleTile title="Tertiary Variant"
                          id="nx-segmented-button-tertiary-example"
                          liveExample={NxSegmentedButtonTertiaryExample}
                          codeExamples={nxSegmentedButtonTertiaryCode}>
        An <code className="nx-code">NxSegmentedButton</code> using secondary styling, a disabled
        secondary-styled <code className="nx-code">NxSegmentedButton</code>, and a normal button to demonstrate
        alignment.
      </GalleryExampleTile>
    </>
  );
}
