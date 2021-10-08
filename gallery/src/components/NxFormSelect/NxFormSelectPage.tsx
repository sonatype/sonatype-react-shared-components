/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxP, NxTextLink, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormSelectExample from './NxFormSelectExample';

const sourceCode = require('./NxFormSelectExample?raw');

const NxFormSelectPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxFormSelect</NxCode> provides styling and basic behavior for <NxCode>&lt;select&gt;</NxCode>
        elements.
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
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>isPristine</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Should be set to true when the user has not yet adjusted the value of this form field.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;select&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/select">
                  Select Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxFormSelect</NxCode> supports any html attribute that's normally supported by HTML{' '}
                <NxCode>&lt;select&gt;</NxCode>.
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
          The <NxCode>nxFormSelectStateHelpers</NxCode> object includes the following recommended state helper
          functions, which each return an object containining the "stateful" parts of the NxTextInput props{' '}
          (<NxCode>value</NxCode>).
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Arguments</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>initialState</NxTable.Cell>
              <NxTable.Cell>(initialValue: string)</NxTable.Cell>
              <NxTable.Cell>
                Returns an initialized state with the specified value.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>userInput</NxTable.Cell>
              <NxTable.Cell>(newValue: string)</NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  Meant to be used to handle user changes to the text input value. Returns a state with the
                  specified value.
                </NxP>
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxP>
          <NxCode>nxFormSelectStateHelpers</NxCode> also contains a <NxCode>useNxFormSelectState</NxCode> React
          hook which encapsulates the use of the lower-level state helper functions along
          with <NxCode>useState</NxCode> to further simplify management of <NxCode>NxFormSelect</NxCode> state within
          a parent component.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Form Select Example"
                        id="nx-form-select-example"
                        codeExamples={sourceCode}
                        liveExample={NxFormSelectExample}>
      Demonstrates an <NxCode>NxFormSelect</NxCode> using the <NxCode>useNxFormSelectState</NxCode> hook to manage
      its state.
    </GalleryExampleTile>
  </>;

export default NxFormSelectPage;
