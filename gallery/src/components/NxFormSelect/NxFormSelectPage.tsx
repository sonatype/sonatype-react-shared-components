/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTable, NxP, NxTextLink, NxTile, NxH3, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormSelectExample from './NxFormSelectExample';
import NxFormSelectOverflowExample from './NxFormSelectOverflowExample';
import NxFormSelectWidthsExample from './NxFormSelectWidthsExample';

const nxFormSelectExampleSourceCode = require('./NxFormSelectExample?raw');
const nxFormSelectOverflowExampleSourceCode = require('./NxFormSelectOverflowExample?raw');
const nxFormSelectWidthsExampleSourceCode = require('./NxFormSelectWidthsExample?raw');

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
                <NxWarningAlert>
                  Deprecated: <NxCode>isPristine</NxCode> was previously only used for styling,
                  but since we no longer want to show if this component is in the pristine state,
                  this attribute is no longer needed.
                </NxWarningAlert>
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isRequired</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Sets whether the input should display the optional flag – the flag is present by default and
                setting <NxCode>isRequired</NxCode> to true removes the flag. Also sets
                the <NxCode>aria-required</NxCode> prop on the child if not already present.
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
        <NxWarningAlert>
          Deprecated: <NxCode>nxFormSelectStateHelpers</NxCode> used to do more,
          but those features are now deprecated and are no longer needed.
          We no longer recommend using this for new use.
        </NxWarningAlert>
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
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxFormSelect CSS Classes</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell><NxCode>nx-form-select--short</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxFormSelect</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Short variant of <NxCode>NxFormSelect</NxCode>.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-form-select--long</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxFormSelect</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Long variant of <NxCode>NxFormSelect</NxCode>.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Form Select Example"
                        id="nx-form-select-example"
                        codeExamples={nxFormSelectExampleSourceCode}
                        liveExample={NxFormSelectExample}>
      Demonstrates an <NxCode>NxFormSelect</NxCode> using the <NxCode>useNxFormSelectState</NxCode> hook to manage
      its state.The example also demonstrates the use of the isRequired flag to remove the "Optional" indicator.
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Select Overflow Example"
                        id="nx-form-select-overflow-example"
                        codeExamples={nxFormSelectOverflowExampleSourceCode}
                        liveExample={NxFormSelectOverflowExample}>
      Demonstrates an <NxCode>NxFormSelect</NxCode> with long option text that overflows. The example also{' '}
      demonstrates the use of the isRequired flag to remove the "Optional" indicator.
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Select Widths Examples"
                        id="nx-form-select-widths-examples"
                        codeExamples={nxFormSelectWidthsExampleSourceCode}
                        liveExample={NxFormSelectWidthsExample}>
      Demonstrates <NxCode>NxFormSelect</NxCode>'s with with the short and long variants applied. The example also{' '}
      demonstrates the use of the isRequired flag to remove the "Optional" indicator.
    </GalleryExampleTile>
  </>;

export default NxFormSelectPage;
