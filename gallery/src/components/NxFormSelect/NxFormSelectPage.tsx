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
import NxFormSelectValidationExample from './NxFormSelectValidationExample';
import NxFormSelectOverflowExample from './NxFormSelectOverflowExample';
import NxFormSelectWidthsExample from './NxFormSelectWidthsExample';

const nxFormSelectExampleSourceCode = require('./NxFormSelectExample?raw');
const nxFormSelectValidationExampleSourceCode = require('./NxFormSelectValidationExample?raw');
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
                Should be set to true when the user has not yet adjusted the value of the select
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>validatable</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                If true, this <NxCode>NxFormSelect</NxCode> is subject to validation, the result of which should be
                passed in via the <NxCode>validationErrors</NxCode> prop, resulting in validation CSS classes being
                applied (see below). If false, the NxTextInput is not considered to be subject to validation, the
                <NxCode>validationErrors</NxCode> prop is ignored, and validation-related CSS classes
                are never applied.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>validationErrors</NxTable.Cell>
              <NxTable.Cell>string | string[]</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Validation failure messages for components where <NxCode>validatable</NxCode> is
                true. Any strings contained by this prop's value are taken to be error messages describing a validation
                failure. These trigger the invalid styling on the component and the first such error message is
                displayed within the component. If this prop's value does not contain any strings (i.e. if it is null,
                undefined, or an empty array), the component value is taken to be valid, and corresponding styles
                are added. For non-validatable components, this prop is ignored. In the case
                of <NxCode>NxFormSelect</NxCode>, the most common use case for validation errors would be when
                the first option within the select is actually a placeholder that doesn't truly represent a valid
                selection.
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
          functions, which each return an object containining the "stateful" parts of the NxFormSelect props{' '}
          (<NxCode>value</NxCode>, <NxCode>isPristine</NxCode>, <NxCode>validationErrors</NxCode>).
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
              <NxTable.Cell>(initialValue: string, validator?: Function)</NxTable.Cell>
              <NxTable.Cell>
                Returns an initialized state with the specified value, <NxCode>isPristine</NxCode> set to true,
                and <NxCode>validationErrors</NxCode> based on running the <NxCode>initialValue</NxCode> through
                the <NxCode>validator</NxCode> function.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>userInput</NxTable.Cell>
              <NxTable.Cell>(newValue: string, validator?: Function)</NxTable.Cell>
              <NxTable.Cell>
                <NxP>
                  Meant to be used to handle user changes to the select value. Returns a state with the
                  specified value, <NxCode>isPristine</NxCode> set to true,
                  and <NxCode>validationErrors</NxCode> based on running the <NxCode>initialValue</NxCode> through
                  the <NxCode>validator</NxCode> function.
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
              <NxTable.Cell>useNxFormSelectState</NxTable.Cell>
              <NxTable.Cell>(initialValue: string, validator?: Function)</NxTable.Cell>
              <NxTable.Cell>
                Returns a 2-value tuple containing the current stateful state values and a setter function which
                expects the new value driven by user selection.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
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
      its state.
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Select Validation Example"
                        id="nx-form-select-validation-example"
                        codeExamples={nxFormSelectValidationExampleSourceCode}
                        liveExample={NxFormSelectValidationExample}>
      Demonstrates an <NxCode>NxFormSelect</NxCode> That requires an option other than the initial placeholder option
      to be selected
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Select Overflow Example"
                        id="nx-form-select-overflow-example"
                        codeExamples={nxFormSelectOverflowExampleSourceCode}
                        liveExample={NxFormSelectOverflowExample}>
      Demonstrates an <NxCode>NxFormSelect</NxCode> with long option text that overflows.
    </GalleryExampleTile>

    <GalleryExampleTile title="Form Select Widths Examples"
                        id="nx-form-select-widths-examples"
                        codeExamples={nxFormSelectWidthsExampleSourceCode}
                        liveExample={NxFormSelectWidthsExample}>
      Demonstrates <NxCode>NxFormSelect</NxCode>'s with with the short and long variants applied.
    </GalleryExampleTile>
  </>;

export default NxFormSelectPage;
