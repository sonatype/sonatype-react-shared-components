/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';
import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxSegmentedButtonPrimaryExample from './NxSegmentedButtonPrimaryExample';
import NxSegmentedButtonSecondaryExample from './NxSegmentedButtonSecondaryExample';
import NxSegmentedButtonTertiaryExample from './NxSegmentedButtonTertiaryExample';
import NxSegmentedButtonCloseHandlerExample from './NxSegmentedButtonCloseHandlerExample';

const nxSegmentedButtonPrimaryCode = require('./NxSegmentedButtonPrimaryExample?raw'),
    nxSegmentedButtonSecondaryCode = require('./NxSegmentedButtonSecondaryExample?raw'),
    nxSegmentedButtonTertiaryCode = require('./NxSegmentedButtonTertiaryExample?raw'),
    nxSegmentedButtonCloseHandlerExampleCode = require('./NxSegmentedButtonCloseHandlerExample?raw');

export default function NxSegmentedButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxSegmentedButton</NxCode> renders a "segmented" or "split" button - one which
          contains the usual button behavior but in addition has a separate section on the right-hand end which
          opens a dropdown menu.
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
              <NxTable.Cell>isOpen</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>Set to true to have the dropdown menu rendered as open.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onToggleOpen</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback function called when the dropdown toggle segment of the button is activated.
                This activation occurs when the dropdown button
                is clicked and also, if the dropdown is currently open, whenever a click occurs anywhere on the
                screen and any time the ESC key is pressed while focus is within the dropdown.
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
              <NxTable.Cell>onCloseClick</NxTable.Cell>
              <NxTable.Cell>Function (MouseEvent =&lt; void)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                A callback function to execute when a click is detected anywhere on the document which would by
                default close this dropdown (i.e. any click while the dropdown is open). This callback is dispatched
                before the dropdown is closed and is provided with a proxy of the <em>native</em> MouseEvent object.
                Calling <NxCode>preventDefault</NxCode> on this MouseEvent will cause the dropdown
                not to close. Note however that the event is proxied in such a way that
                calling <NxCode>preventDefault</NxCode> <em>will not</em> have any other
                effects – that is, the true native MouseEvent's <NxCode>defaultPrevented</NxCode> flag
                will be untouched, and only the logic within the dropdown will be affected.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onCloseKeyDown</NxTable.Cell>
              <NxTable.Cell>Function (KeyboardEvent =&lt; void)</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                A callback function to execute when a key press is detected which would by
                default close this dropdown (i.e. an ESC keypress occurring within the dropdown while it is open).
                This callback is dispatched before the dropdown is closed and is provided with the React KeyboardEvent
                object.  Calling <NxCode>preventDefault</NxCode> on this event object will cause the
                dropdown not to close.
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
              <NxTable.Cell>N/A</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxSegmentedButton</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;div&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Primary Variant"
                          id="nx-segmented-button-primary-example"
                          liveExample={NxSegmentedButtonPrimaryExample}
                          codeExamples={nxSegmentedButtonPrimaryCode}>
        An <NxCode>NxSegmentedButton</NxCode> using primary styling, a disabled
        primary-styled <NxCode>NxSegmentedButton</NxCode>, and a normal button to demonstrate
        alignment.
      </GalleryExampleTile>

      <GalleryExampleTile title="Secondary Variant"
                          id="nx-segmented-button-secondary-example"
                          liveExample={NxSegmentedButtonSecondaryExample}
                          codeExamples={nxSegmentedButtonSecondaryCode}>
        An <NxCode>NxSegmentedButton</NxCode> using secondary styling, a disabled
        secondary-styled <NxCode>NxSegmentedButton</NxCode>, and a normal button to demonstrate
        alignment.
      </GalleryExampleTile>

      <GalleryExampleTile title="Tertiary Variant"
                          id="nx-segmented-button-tertiary-example"
                          liveExample={NxSegmentedButtonTertiaryExample}
                          codeExamples={nxSegmentedButtonTertiaryCode}>
        An <NxCode>NxSegmentedButton</NxCode> using secondary styling, a disabled
        secondary-styled <NxCode>NxSegmentedButton</NxCode>, and a normal button to demonstrate
        alignment.
      </GalleryExampleTile>

      <GalleryExampleTile title="Example with disabled close handlers"
                          liveExample={NxSegmentedButtonCloseHandlerExample}
                          codeExamples={nxSegmentedButtonCloseHandlerExampleCode}>
        This example demonstrates the usage of the <NxCode>onCloseClick</NxCode>{' '}
        and <NxCode>onCloseKeyDown</NxCode> props. These props can be used to disable the
        close-on-click and close-on-ESC behaviors that the dropdown has by default, by
        calling <NxCode>preventDefault()</NxCode> on the event. This example demonstrates both props
        simulataneously, but either can be used independently if desired.
      </GalleryExampleTile>
    </>
  );
}
