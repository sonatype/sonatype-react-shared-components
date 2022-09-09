/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxTextLink, NxP, NxWarningAlert } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxButtonDefaultExample from './NxButtonDefaultExample';
import NxButtonPrimaryExample from './NxButtonPrimaryExample';
import NxButtonTertiaryExample from './NxButtonTertiaryExample';
import NxButtonErrorExample from './NxButtonErrorExample';
import NxButtonIconExample from './NxButtonIconExample';
import NxButtonIconOnlyExample from './NxButtonIconOnlyExample';

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
        <NxP>
          <NxCode>NxButton</NxCode> is a react wrapper around
          HTML <NxCode>&lt;button&gt;</NxCode> elements using
          the <NxCode>.nx-btn</NxCode> CSS class.
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
              <NxTable.Cell>'primary' | 'secondary' | 'tertiary' | 'icon-only' | 'error'</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>secondary</NxTable.Cell>
              <NxTable.Cell>The variant of button. See examples of each variant below.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>title</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Required on icon-only buttons</NxTable.Cell>
              <NxTable.Cell>Empty</NxTable.Cell>
              <NxTable.Cell>
                A string to render as a tooltip and accessibility label for the button. This is generally not necessary
                for buttons that include text content, but icon-only buttons should use this to make the button's
                meaning clear in all contexts. Omitting this prop when using an icon-only button is deprecated and will
                become unsupported in a future release.
                <NxWarningAlert>
                  Warning: If <NxCode>NxButton</NxCode> contains both <NxCode>title</NxCode> and
                  {' '}<NxCode>disabled</NxCode> props, <NxCode>NxButton</NxCode> will throw an error.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;button&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/button">
                  HTML button Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxButton</NxCode> supports any html attribute that's normally supported by the
                {' '}<NxCode>&lt;button&gt;</NxCode> element.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxP>
          <NxCode>NxButton</NxCode>s are often used within an <NxCode>NxButtonBar</NxCode> wrapper. See the
          documentation of the{' '}
          <NxTextLink href="#/pages/Button%20(HTML)">raw <NxCode>nx-btn</NxCode> styles</NxTextLink> for details.
        </NxP>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Secondary (Default)"
                          id="nx-button-default-example"
                          liveExample={NxButtonDefaultExample}
                          codeExamples={NxButtonDefaultCode}>
        An example of an <NxCode>NxButton</NxCode> using the default styling, also known as the
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
        An example using the "error" button styles. Commonly seen in <NxCode>NxErrorAlert</NxCode>s.
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
        An example of buttons containing only an icon. When disabling icon only buttons, use the
        {' '}<NxCode>disabled</NxCode> class instead of the <NxCode>disabled</NxCode> prop. Creating a button
        containing both the <NxCode>disabled</NxCode> and <NxCode>title</NxCode> props will throw an error. Buttons
        using the <NxCode>disabled</NxCode> class will have tooltips enabled. For accessibility purposes, it is
        important to use the title prop on all icon-only buttons so a screen reader can interpret the content
        correctly.
      </GalleryExampleTile>
    </>
  );
}
