/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile, NxTextLink, NxWarningAlert } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxComboboxExample from './NxComboboxExample';
import NxComboboxPredeterminedListExample from './NxComboboxPredeterminedListExample';
import NxComboboxDisabledExample from './NxComboboxDisabledExample';
import NxComboboxValidationExample from './NxComboboxValidationExample';
import NxComboboxErrorExample from './NxComboboxErrorExample';

const NxComboboxExampleCode = require('./NxComboboxExample?raw');
const NxComboboxPredeterminedListExampleCode = require('./NxComboboxPredeterminedListExample?raw');
const NxComboboxDisabledExampleCode = require('./NxComboboxDisabledExample?raw');
const NxComboboxValidationExampleCode = require('./NxComboboxValidationExample?raw');
const NxComboboxErrorExampleCode = require('./NxComboboxErrorExample?raw');

const NxComboboxPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        An editable text input with an associated dropdown that allows users to type a value and select a value for
        the combobox from a collection of possible values. It can be used when the search requires a backend query, or
        with a provided list of options.
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
              <NxTable.Cell><NxCode>value</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The current value of the text input box.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (string =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback that fires when the user changes the input value. The handler passed in for this prop should
                update the <NxCode>value</NxCode> prop. The handler receives the new value as its argument.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSearch</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (string =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback that fires when a new search query should be performed. The <em>trimmed</em> value of the
                text input is passed as an argument. This callback is executed whenever the user changes
                the trimmed value of the text input, whenever the error alert's Retry button is clicked, and whenever
                the component gains focus while in an error state (which is intended to automatically trigger a retry
                attempt). The handler passed in for this prop should, in addition to performing the search, update
                the <NxCode>loading</NxCode> prop. The handler receives the new value as its argument.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>autoComplete</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                When <NxCode>autoComplete</NxCode> is set to true, it will highlight the first matching item from the
                array of matches and provide an inline completion string, the portion of the selected suggestion that
                has not been typed by the user.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>loading</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>Set to true when the search results are currently being loaded.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>loadError</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                If there is an error loading the search results, set the error message here to render an error
                alert instead of the results within the dropdown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>matches</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Array of objects containing an <NxCode>id</NxCode> and a <NxCode>displayName</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The results of querying the current text input value, which are to be displayed in the
                dropdown for user selection. The search logic should return all results that start with
                the text the user specified, case-insensitive.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>disabled</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                When set, this prop disables the text input and the dropdown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>emptyMessage</NxCode></NxTable.Cell>
              <NxTable.Cell>ReactNode</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>"No Results Found"</NxTable.Cell>
              <NxTable.Cell>
                The text to display when the user performs a query for which no results are returned.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>validatable</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Should be set to true if it is subject to validation.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>isPristine</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Only required when <NxCode>validatable</NxCode> is true, it should be set to true when the user
                has not yet adjusted the value of the input.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>validationErrors</NxCode></NxTable.Cell>
              <NxTable.Cell>string | string[]</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Validation failure messages.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  Div Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxCombobox</NxCode> supports any HTML attribute that's normally supported by{' '}
                HTML <NxCode>&lt;div&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxCombobox CSS Classes</NxH3>
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
              <NxTable.Cell><NxCode>nx-combobox--short</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxCombobox</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Short variant of the <NxCode>NxCombobox</NxCode>.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>nx-combobox--long</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Directly on the <NxCode>NxCombobox</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Long variant of the <NxCode>NxCombobox</NxCode>.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          If using <NxCode>NxCombobox</NxCode> for a backend query, the search functionality should be used with a
          debounce in order to prevent excessive queries to the backend. The standard timing value to use for that
          debounce is provided via the <NxCode>NX_STANDARD_DEBOUNCE_TIME</NxCode> export.
        </NxP>
        <NxWarningAlert>
          <NxCode>NX_SEARCH_DROPDOWN_DEBOUNCE_TIME</NxCode> has been renamed to{' '}
          <NxCode>NX_STANDARD_DEBOUNCE_TIME</NxCode>, it is now deprecated but is still exported by RSC for
          backwards compatibility.
        </NxWarningAlert>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Usage Notes</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Due to its interaction with typically backend logic, <NxCode>NxCombobox</NxCode> has some
          complexities that cannot be internalized and which much be handled by the calling code. These complications
          include debouncing the text change <em>after updating the search text and loading props</em> and ensuring
          that match results are for the most recently entered text. The location and manner in which these concerns
          are handled will depend on the architecture of your application, but the example below demonstrates how it
          might be done in a stateful wrapper component that manages the asynchronous call.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-combobox-basic-example"
                        codeExamples={NxComboboxPredeterminedListExampleCode}
                        liveExample={NxComboboxPredeterminedListExample}>
      An example of an <NxCode>NxCombobox</NxCode> tied to a provided list of options to select from and
      with a <NxCode>long</NxCode> modifier to make it wider.
    </GalleryExampleTile>

    <GalleryExampleTile title="Non-emptiness Validation Example"
                        id="nx-combobox-non-emptiness-example"
                        codeExamples={NxComboboxValidationExampleCode}
                        liveExample={NxComboboxValidationExample}>
      An example of an <NxCode>NxCombobox</NxCode> that validates that its contents are non-empty and
      with a <NxCode>short</NxCode> modifier to make it narrower.
    </GalleryExampleTile>

    <GalleryExampleTile title="Backend Query Example"
                        id="nx-combobox-backend-example"
                        codeExamples={NxComboboxExampleCode}
                        liveExample={NxComboboxExample}>
      An example of an <NxCode>NxCombobox</NxCode> tied to a backend query and with <NxCode>autoComplete</NxCode>{' '}
      set to true to provide an inline completion string.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error Example"
                        id="nx-combobox-error-example"
                        codeExamples={NxComboboxErrorExampleCode}
                        liveExample={NxComboboxErrorExample}>
      An example of an <NxCode>NxCombobox</NxCode> that has an error when attempting to load results.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example"
                        id="nx-combobox-disabled-example"
                        codeExamples={NxComboboxDisabledExampleCode}
                        liveExample={NxComboboxDisabledExample}>
      An example of an <NxCode>NxCombobox</NxCode> with a <NxCode>disabled</NxCode> and <NxCode>short</NxCode> modifier.
      Note that even though in this example there is non-empty value, the dropdown does not open.
    </GalleryExampleTile>

  </>;

export default NxComboboxPage;
