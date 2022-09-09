/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTextInputStylesExample from './NxTextInputStylesExample';

const sourceCode = require('./NxTextInputStylesExample?raw');

const NxTextInputStylesPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Base styles for Sonatype text inputs.  Only the styles intended for "static" usage are shown
        here. For styles that involve business logic, such as validation, see
        the <NxTextLink href="#/pages/Text%20Input">NxTextInput React Component</NxTextLink>.
      </NxP>
      <NxP>Classes:</NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-text-input</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Any text-oriented <NxCode>{'<input>'}</NxCode> type or
              <NxCode>{'<textarea>'}</NxCode>
            </NxTable.Cell>
            <NxTable.Cell>
              Gives the input typical Sonatype input styling with 1px grey borders on the top, right, and bottom,
              and a 3px grey border on the left
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-text-input--long</NxCode></NxTable.Cell>
            <NxTable.Cell>Any <NxCode>.nx-text-input</NxCode> element</NxTable.Cell>
            <NxTable.Cell>
              Use this class to make the text input particularly wide (395px vs the default 219px)
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        codeExamples={sourceCode}
                        liveExample={NxTextInputStylesExample}>
      This example demonstrates the fundamental look of various elements styled with
      nx-text-input. Note that these styles are not typically used alone, and so elements looking
      exactly like these will not typically be seen. Rather, these styles would typically be
      used in conjunction with the validation styles provided by the NxTextInput react component,
      which add border colors and other signifiers.
    </GalleryExampleTile>
  </>;

export default NxTextInputStylesPage;
