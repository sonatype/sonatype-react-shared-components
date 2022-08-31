/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode, NxTile, NxH3 } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxColorPickerExample from './NxColorPickerExample';
import NxColorPickerRequiredExample from './NxColorPickerRequiredExample';
import NxColorPickerRequiredPureStateHelperExample from './NxColorPickerRequiredPureStateHelperExample';

const NxColorPickerExampleCode = require('./NxColorPickerExample?raw'),
    NxColorPickerRequiredExampleCode = require('./NxColorPickerRequiredExample?raw'),
    NxColorPickerRequiredPureStateHelperExampleCode = require('./NxColorPickerRequiredPureStateHelperExample?raw');

const NxColorPickerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxColorPicker</NxCode> allows the user to select from a set
        of <NxTextLink href="#/pages/Selectable%20Colors">colors</NxTextLink>. A typical
        use case would be to select the color to be associated with a colored <NxCode>NxTag</NxCode>.
      </NxP>
      <NxP>
        The colors available in <NxCode>NxColorPicker</NxCode> match those supported
        by <NxCode>NxTag</NxCode>. The list of these colors is available programmatically via
        RSC's <NxCode>selectableColors</NxCode> export. Additionally, a TypeScript type union
        respresenting the color choices is available as <NxCode>SelectableColor</NxCode>.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>Sets whether the input should display the red required field asterisk.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isPristine</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Should be set to true when the color picker is capable of showing validation errors but has not yet
                been modified by the user.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>validationErrors</NxTable.Cell>
              <NxTable.Cell>string | string[]</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Validation failure messages.
                Any strings contained by this prop's value are taken to be error messages describing a validation
                failure on the fields within this component.
                These trigger the invalid styling on the component and the first such error message is
                displayed within the component. If this prop's value does not contain any strings (i.e. if it is null,
                undefined, or an empty array), the component value is taken to be valid. On this component, this would
                typically only be used whenever <NxCode>isRequired</NxCode> is set to true, in which case a validation
                error string must be provided whenever no color is selected.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>value</NxTable.Cell>
              <NxTable.Cell>
                SelectableColor
                (Refer to the <NxTextLink href="#/pages/Selectable%20Colors">Selectable Colors Page</NxTextLink> for
                a complete list)
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
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>State Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          When an <NxCode>NxColorPicker</NxCode> is a required field, multiple pieces of state must be managed: the
          actual color picker value and also the <NxCode>isPristine</NxCode> flag. These needs are effectively
          analogous to those of a fieldset full of radio buttons, and as such,
          the <NxCode><NxTextLink href="#/pages/NxFieldset">NxFieldset</NxTextLink></NxCode> radio
          state helper functions can be used to manage the <NxCode>NxColorPicker</NxCode> state.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example" liveExample={NxColorPickerExample} codeExamples={NxColorPickerExampleCode}>
      An example of an <NxCode>NxColorPicker</NxCode>
    </GalleryExampleTile>

    <GalleryExampleTile title="Required Example"
                        liveExample={NxColorPickerRequiredExample}
                        codeExamples={NxColorPickerRequiredExampleCode}>
      An example of an <NxCode>NxColorPicker</NxCode> that is required. In addition to the color picker itself, this
      example includes a button that can clear the color picker value after it has been set in order to demonstrate
      the validation error.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required Example using Pure State Helpers"
                        liveExample={NxColorPickerRequiredPureStateHelperExample}
                        codeExamples={NxColorPickerRequiredPureStateHelperExampleCode}>
      An example of an <NxCode>NxColorPicker</NxCode> that is required. In addition to the color picker itself, this
      example includes a button that can clear the color picker value after it has been set in order to demonstrate
      the validation error. In contrast with the previous example, this example uses the simpler pure-function state
      helpers, as would typically be used in a redux workflow, rather than the React hook state helper.
    </GalleryExampleTile>
  </>;

export default NxColorPickerPage;
