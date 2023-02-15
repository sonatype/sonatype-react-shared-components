/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode, NxTile, NxH3, NxH4, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFieldsetExample from './NxFieldsetExample';
import NxFieldsetRequiredExample from './NxFieldsetRequiredExample';
import NxFieldsetRequiredPureStateHelperExample from './NxFieldsetRequiredPureStateHelperExample';
import NxFieldsetSublabelExample from './NxFieldsetSublabelExample';
import NxFieldsetRichLabelExample from './NxFieldsetRichLabelExample';

const nxFieldsetExampleCode = require('./NxFieldsetExample?raw'),
    nxFieldsetSublabelExampleCode = require('./NxFieldsetSublabelExample?raw'),
    nxFieldsetRichLabelExampleCode = require('./NxFieldsetRichLabelExample?raw'),
    nxFieldsetRequiredExampleCode = require('./NxFieldsetRequiredExample?raw'),
    nxFieldsetRequiredPureStateHelperExampleCode = require('./NxFieldsetRequiredPureStateHelperExample?raw');

const NxFieldsetPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        An <NxCode>NxFieldset</NxCode> is a wrapper around a collection of checkboxes, radios, or
        similar form elements which should be displayed to the user as a group with an overall label. When used
        with <NxCode>NxCheckbox</NxCode> or <NxCode>NxRadio</NxCode>, all inputs
        contained within a single NxFieldset should represent different options/values of the same field.
      </NxP>
      <NxP>
        Form fields which have their own individual label styled using <NxCode>.nx-label</NxCode>{' '}
        (including those wrapped in <NxCode>NxFormGroup</NxCode>) should not be wrapped
        in <NxCode>NxFieldset</NxCode> as the label styles between the two are intended to be identical
        and not hierarchical.
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
            <NxTable.Cell>label</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              JSX content to render as the label for the group. Must not be null or undefined.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>sublabel</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>empty</NxTable.Cell>
            <NxTable.Cell>JSX content to render as the sublabel for the group.</NxTable.Cell>
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
              Should be set to true when the fieldset is capable of showing validation errors but has not yet
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
              undefined, or an empty array), the component value is taken to be valid. This is typically used on
              fieldsets that contain groups of radios, checkboxes, or toggles which can't have validation errors
              of their own but which might have validation errors in aggregate.  In particular,
              whenever <NxCode>isRequired</NxCode> is set to true, a validation error string must be provided whenever
              there are zero children selected. This prop should not be used to repeat validation errors from
              any <NxCode>NxTextInput</NxCode>s or other components which display the errors themselves.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              The child form elements to render within the fieldset – often a series
              of <NxCode>NxRadio</NxCode> or <NxCode>NxCheckbox</NxCode> components
              which represent different options for the same field.
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
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              NxFieldset supports any HTML attribute that's normally supported
              by <NxCode>&lt;fieldset&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>State Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          When an <NxCode>NxFieldset</NxCode> has validation, there are several pieces of state that must be tracked
          for the fieldset itself in conjunction with the state for the fieldset's contents. Specifically,
          the values of the <NxCode>isPristine</NxCode> and <NxCode>validationErrors</NxCode> props should be set based
          on the current values and user interactions within the fieldset. To assist with this, a number of utility
          function are provided in the <NxCode>nxFieldsetStateHelpers</NxCode> export. These function fall into two
          categories: pure functions to assist in state management outside of React (e.g. in Redux), and React hook
          functions to add further convenience when the state is being managed within a React component.
        </NxP>
        <NxH4>Pure State Helpers</NxH4>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Parameters</NxTable.Cell>
              <NxTable.Cell>Return Value</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>radioGroupInitialState</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>value</NxCode> (name of initially-selected radio if any); optional
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which accepts the current value and returns
                      a <NxCode>ValidationErrors</NxCode> indicating whether it is valid; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Object containing the <NxCode>value</NxCode>, <NxCode>validationErrors</NxCode> as determined by the
                validator function, and <NxCode>isPristine</NxCode> set to true
              </NxTable.Cell>
              <NxTable.Cell>
                Creates an object representing the initial state of a group of radio buttons based on the
                specified initial value, and validated according to the specified validator. This function can be used
                to initialize the pieces of state needed for a fieldset containing a radio group.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>radioGroupUserInput</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text><NxCode>value</NxCode> (name of radio being selected by user)</NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which accepts the current value and returns
                      a <NxCode>ValidationErrors</NxCode> indicating whether it is valid; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Object containing the <NxCode>value</NxCode>, <NxCode>validationErrors</NxCode> as determined by the
                validator function, and <NxCode>isPristine</NxCode> set to false
              </NxTable.Cell>
              <NxTable.Cell>
                Creates an object representing the state of a group of radio buttons after user input, based on the
                specified user-selected value, and validated according to the specified validator.
                This function can be used to update the pieces of state needed for a fieldset containing a radio group
                upon user input.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>checkboxGroupInitialState</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>values</NxCode> (array of names of initially-selected checkboxes if any); optional
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which accepts the current values and returns
                      a <NxCode>ValidationErrors</NxCode> indicating whether they are valid; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Object containing the <NxCode>values</NxCode>, <NxCode>validationErrors</NxCode> as determined by the
                validator function, and <NxCode>isPristine</NxCode> set to true
              </NxTable.Cell>
              <NxTable.Cell>
                Creates an object representing the initial state of a group of checkboxes based on the
                specified initial values, and validated according to the specified validator
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>checkboxGroupUserInput</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text><NxCode>values</NxCode> (names of checkboxes previously selected)</NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>toggledValue</NxCode> (name of checkbox that the user has toggled)
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which accepts the new values and returns
                      a <NxCode>ValidationErrors</NxCode> indicating whether they are valid; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Object containing the <NxCode>value</NxCode>, <NxCode>validationErrors</NxCode> as determined by the
                validator function, and <NxCode>isPristine</NxCode> set to false
              </NxTable.Cell>
              <NxTable.Cell>
                Creates an object representing the state of a group of checkboxes after user input, based on the
                specified user-selected value, and validated according to the specified validator.
                This function can be used to update the pieces of state needed for a fieldset containing a checkbox
                group upon user input.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxH4>React Hooks</NxH4>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Parameters</NxTable.Cell>
              <NxTable.Cell>Return Value</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>useRadioGroupState</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>initialValue</NxCode> (name of initially selected radio if any); optional
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which will be run on each selected radio value over
                      time in order to update the <NxCode>validationErrors</NxCode>; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Two value tuple where the first value is an object containing the <NxCode>value</NxCode>,{' '}
                <NxCode>validationErrors</NxCode> as determined by the validator function, and
                <NxCode>isPristine</NxCode> flag. The second value in the tuple is a setter function which
                receives any newly selected radio name and triggers an update of all three fields (value, validation,
                and pristine flag).
              </NxTable.Cell>
              <NxTable.Cell>
                This hook tracks all of the state needed for a radio group fieldset: the current value, any validation
                errors based on that value, and whether the radio group is pristine.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>useCheckboxGroupState</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>initialValues</NxCode> object mapping from checkbox names to initial values
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which will be run on each change in the checkbox selections
                      in order to update the <NxCode>validationErrors</NxCode>; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Object containing <NxCode>validationErrors</NxCode>, <NxCode>isPristine</NxCode>{' '}
                and <NxCode>states</NxCode>. <NxCode>states</NxCode> is an object mapping each checkbox name to a
                two value tuple. The first value in each such tuple is the selection value for that checkbox, and the
                second value in each tuple is a function which should be called to toggle the value of that checkbox.
                When called, that function will update the checkbox state, the validation errors, and the pristine flag.
              </NxTable.Cell>
              <NxTable.Cell>
                This hook tracks all of the state needed for a checkbox fieldset: the current value of each checkbox,
                any validation errors based on those values, and whether the checkbox group is pristine.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>useTransferListState</NxCode></NxTable.Cell>
              <NxTable.Cell>
                <NxList className="nx-list--bulleted">
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>initialValue</NxCode> initial <NxCode>NxTransferList</NxCode> selectedItems value
                    </NxList.Text>
                  </NxList.Item>
                  <NxList.Item>
                    <NxList.Text>
                      <NxCode>validator</NxCode> function which will be run on each change in{' '}
                      <NxCode>NxTransferList</NxCode> selectedItems
                      in order to update the <NxCode>validationErrors</NxCode>; optional
                    </NxList.Text>
                  </NxList.Item>
                </NxList>
              </NxTable.Cell>
              <NxTable.Cell>
                Object containing <NxCode>validationErrors</NxCode>, <NxCode>isPristine</NxCode>{' '}
                and <NxCode>state</NxCode>. <NxCode>state</NxCode> is a two value tuple.
                The first value is the selectedItems value for <NxCode>NxTransferList</NxCode>, and the
                second value is the setter function that updates the selectedItems value.
                When called, that function will update the state, the validation errors, and the pristine flag.
              </NxTable.Cell>
              <NxTable.Cell>
                This hook tracks all of the state needed for an <NxCode>NxTransferList</NxCode> fieldset:
                the current selectedItems, any validation errors based on the selectedItems,
                and whether the <NxCode>NxTransferList</NxCode> is pristine.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-fieldset-example"
                        liveExample={NxFieldsetExample}
                        codeExamples={nxFieldsetExampleCode}>
      A basic example of an <NxCode>NxFieldset</NxCode> wrapping
      some <NxCode>NxCheckbox</NxCode>s.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required/Validation Examples"
                        id="nx-fieldset-validation-example"
                        liveExample={NxFieldsetRequiredExample}
                        codeExamples={nxFieldsetRequiredExampleCode}>
      Two examples of NxFieldset demonstrating the <NxCode>isRequired</NxCode> flag
      and <NxCode>validationErrors</NxCode>. Note that in isolation, it is not generally possible for
      an <NxCode>NxFieldset</NxCode> containing a group of radios to display an emptiness-based validation message:
      the only time such a fieldset would be empty is when it is also pristine. When used
      within <NxCode>NxForm</NxCode> however, the validation message on a radio group fieldset may be activated by
      the form-wide validation logic.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required/Validation Examples using Pure State Helpers"
                        liveExample={NxFieldsetRequiredPureStateHelperExample}
                        codeExamples={nxFieldsetRequiredPureStateHelperExampleCode}>
      These examples are similar to the Required/Validation Examples, except that they demonstrate the use of the pure
      state helper functions rather than the React hooks. Typically, the pure state helpers would be used in code
      outside of a React component file, such as in a Redux reducer.
    </GalleryExampleTile>

    <GalleryExampleTile title="Sublabel Example"
                        liveExample={NxFieldsetSublabelExample}
                        codeExamples={nxFieldsetSublabelExampleCode}>
      An example of an <NxCode>NxFieldset</NxCode> which includes a sublabel.
    </GalleryExampleTile>

    <GalleryExampleTile title="Rich Label Content Example"
                        liveExample={NxFieldsetRichLabelExample}
                        codeExamples={nxFieldsetRichLabelExampleCode}>
      This example demonstrates that the label and sublabel can be JSX rather than just strings.
    </GalleryExampleTile>
  </>;

export default NxFieldsetPage;
