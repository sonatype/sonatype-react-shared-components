/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxButtonDefaultExample from './NxButtonDefaultExample';
import NxButtonPrimaryExample from './NxButtonPrimaryExample';
import NxButtonTertiaryExample from './NxButtonTertiaryExample';
import NxButtonErrorExample from './NxButtonErrorExample';
import NxButtonIconExample from './NxButtonIconExample';
import NxButtonIconOnlyExample from './NxButtonIconOnlyExample';
import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

const NxButtonDefaultCode = require('./NxButtonDefaultExample?raw'),
    nxButtonPrimaryCode = require('./NxButtonPrimaryExample?raw'),
    nxButtonTertiaryCode = require('./NxButtonTertiaryExample?raw'),
    nxButtonErrorCode = require('./NxButtonErrorExample?raw'),
    nxButtonIconCode = require('./NxButtonIconExample?raw'),
    nxButtonIconOnlyCode = require('./NxButtonIconOnlyExample?raw');

export default function NxButtonPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">NxButton</code> is a react wrapper around
          HTML <code className="nx-code">&lt;button&gt;</code> elements using
          the <code className="nx-code">.nx-btn</code> CSS class. It accepts
          any <code className="nx-code">&lt;button&gt;</code> attribute as well as the following props:
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
              <NxTableCell>'primary' | 'secondary' | 'tertiary' | 'icon-only' | 'error'</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>secondary</NxTableCell>
              <NxTableCell>The variant of button. See examples of each variant below.</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>title</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>Required on icon-only buttons</NxTableCell>
              <NxTableCell>Empty</NxTableCell>
              <NxTableCell>
                A string to render as a tooltip and accessibility label for the button. This is generally not necessary
                for buttons that include text content, but icon-only buttons should use this to make the buttons meaning
                clear in all contexts. Omitting this prop when using an icon-only button is deprecated and will become
                unsupported in a future release.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Secondary (Default)"
                          id="nx-button-default-example"
                          liveExample={NxButtonDefaultExample}
                          codeExamples={NxButtonDefaultCode}>
        An example of an <code className="nx-code">NxButton</code> using the default styling, also known as the
        "secondary" styling, along with some other inline content and some disabled buttons. Disabling by class will
        add aria-disabled=true to the button.
      </GalleryExampleTile>

      <GalleryExampleTile title="Primary"
                          id="nx-button-primary-example"
                          liveExample={NxButtonPrimaryExample}
                          codeExamples={nxButtonPrimaryCode}>
        An example using the "primary" button styles.
      </GalleryExampleTile>

      <GalleryExampleTile title="Tertiary"
                          id="nx-button-tertiary-example"
                          liveExample={NxButtonTertiaryExample}
                          codeExamples={nxButtonTertiaryCode}>
        An example using the "tertiary" button styles.
      </GalleryExampleTile>

      <GalleryExampleTile title="Error"
                          id="nx-button-error-example"
                          liveExample={NxButtonErrorExample}
                          codeExamples={nxButtonErrorCode}>
        An example using the "error" button styles. Commonly seen in <code className="nx-code">NxErrorAlert</code>s.
      </GalleryExampleTile>

      <GalleryExampleTile title="Using icons in buttons"
                          id="nx-button-icon-example"
                          liveExample={NxButtonIconExample}
                          codeExamples={nxButtonIconCode}>
        An example of a button containing an icon in addition to text.
      </GalleryExampleTile>

      <GalleryExampleTile title="Icon only buttons"
                          id="nx-button-icon-only-example"
                          liveExample={NxButtonIconOnlyExample}
                          codeExamples={nxButtonIconOnlyCode}>
        An example of a button containing only an icon. For accessibility purposes it is important to use the
        title prop for the screen reader to interpret the content correctly.
      </GalleryExampleTile>
    </>
  );
}
