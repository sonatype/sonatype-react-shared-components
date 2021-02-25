/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';
import NxColorPickerExample from './NxColorPickerExample';

const NxColorPickerExampleCode = require('./NxColorPickerExample?raw');

const NxColorPickerPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">NxColorPicker</code> allows the user to select from a set of nine colors. A typical
        use case would be to select the color to be associated with a colored <code className="nx-code">NxTag</code>.
      </p>
      <p className="nx-p">
        The colors available in <code className="nx-code">NxColorPicker</code> match those supported
        by <code className="nx-code">NxTag</code>. The list of these colors is available programmatically via
        RSC's <code className="nx-code">selectableColors</code> export. Additionally, a TypeScript type union
        respresenting the color choices is available as <code className="nx-code">SelectableColor</code>.
      </p>
      <h3 className="nx-h3">Props</h3>
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
            <NxTableCell>value</NxTableCell>
            <NxTableCell>
              SelectableColor
              ('light-blue' | 'purple' | 'pink' | 'blue' | 'red' | 'green' | 'orange' | 'yellow' | 'lime')
            </NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell></NxTableCell>
            <NxTableCell>
              The currently selected color, or null or undefined if no color is currently selected.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>onChange</NxTableCell>
            <NxTableCell>
              Function
            </NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell></NxTableCell>
            <NxTableCell>
              A callback function to execute whenever the user updates their selection. Receives the name of the
              selected color as an argument.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>HTML fieldset Attributes</NxTableCell>
            <NxTableCell>
              <a className="nx-text-link"
                 target="_blank"
                 rel="noopener"
                 href="https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset">
                HTML fieldset Attributes
              </a>
            </NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell></NxTableCell>
            <NxTableCell>
              NxColorPicker supports any html attribute that's normally supported by
              {' '}<code className="nx-code">fieldset</code> elements.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Example" liveExample={NxColorPickerExample} codeExamples={NxColorPickerExampleCode}>
      An example of an <code className="nx-code">NxColorPicker</code>
    </GalleryExampleTile>
  </>;

export default NxColorPickerPage;
