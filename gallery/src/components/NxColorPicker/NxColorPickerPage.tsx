/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxColorPickerExample from './NxColorPickerExample';

const NxColorPickerExampleCode = require('./NxColorPickerExample?raw');

const NxColorPickerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxColorPicker</NxCode> allows the user to select from a set of nine colors. A typical
        use case would be to select the color to be associated with a colored <NxCode>NxTag</NxCode>.
      </NxP>
      <NxP>
        The colors available in <NxCode>NxColorPicker</NxCode> match those supported
        by <NxCode>NxTag</NxCode>. The list of these colors is available programmatically via
        RSC's <NxCode>selectableColors</NxCode> export. Additionally, a TypeScript type union
        respresenting the color choices is available as <NxCode>SelectableColor</NxCode>.
      </NxP>
      <h3 className="nx-h3">Props</h3>
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
            <NxTable.Cell>label</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              JSX content to render as the label for the picker. Must not be null or undefined.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isRequired</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>false</NxTable.Cell>
            <NxTable.Cell>
              Sets whether the optional flag should be displayed next to the picker label – the flag is present
              by default and setting <NxCode>isRequired</NxCode> to true removes the flag.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>value</NxTable.Cell>
            <NxTable.Cell>
              SelectableColor
              ('light-blue' | 'purple' | 'pink' | 'blue' | 'red' | 'green' | 'orange' | 'yellow' | 'lime')
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              The currently selected color, or null or undefined if no color is currently selected.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>
              Function
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              A callback function to execute whenever the user updates their selection. Receives the name of the
              selected color as an argument.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;fieldset&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset">
                HTML fieldset Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              NxColorPicker supports any html attribute that's normally supported by
              {' '}<NxCode>&lt;fieldset&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example" liveExample={NxColorPickerExample} codeExamples={NxColorPickerExampleCode}>
      An example of an <NxCode>NxColorPicker</NxCode>
    </GalleryExampleTile>
  </>;

export default NxColorPickerPage;
