/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormSelectExample from './NxFormSelectExample';
import NxFormSelectDisabledExample from './NxFormSelectDisabledExample';

const sourceCode = require('./NxFormSelectExample?raw'),
    disabledSourceCode = require('./NxFormSelectDisabledExample?raw');

const NxFormSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Basic styles for Sonatype form select inputs. There isn't very much styling available for the
        <NxCode>&lt;select&gt;</NxCode> tag. As such we've just implemented the basic borders, font,
        and padding as well as disabled and focus styles. An <NxCode>NxFormSelect</NxCode> convenience component is
        also available.
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
            <NxTable.Cell><NxCode>.nx-form-select</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Base class
            </NxTable.Cell>
            <NxTable.Cell>
              Base class for a form <NxCode>&lt;select&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Form Select Example"
                        codeExamples={sourceCode}
                        liveExample={NxFormSelectExample}>
      Demonstrates a form <NxCode>&lt;select&gt;</NxCode> active state.
    </GalleryExampleTile>
    <GalleryExampleTile title="Form Select Disabled Example"
                        id="nx-form-select-disabled-example"
                        codeExamples={disabledSourceCode}
                        liveExample={NxFormSelectDisabledExample}>
      Demonstrates a form <NxCode>&lt;select&gt;</NxCode> disabled state. Note that disabling
      is only supported via attribute, not class name.
    </GalleryExampleTile>
  </>;

export default NxFormSelectPage;
