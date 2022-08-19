/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile, NxTextLink } from '@sonatype/react-shared-components';

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
        A search text input that shows matching results in a dropdown for the user to select.
        {' '}<NxCode>NxCombobox</NxCode> can be used when the search requires a backend query,
        or with a provided list of options.
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
              <NxTable.Cell><NxCode>searchText</NxCode></NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>The current value of the text input box.</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSearchTextChange</NxCode></NxTable.Cell>
              <NxTable.Cell>Function (string =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Callback that fires when the user changes the search text. The handler passed in for this prop should
                update the <NxCode>searchText</NxCode> prop. The handler receives the new search text value as its
                argument.
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
                the <NxCode>loading</NxCode> prop. The handler receives the new search text value as its argument.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>autoComplete</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                <NxCode>autoComplete</NxCode> will highlight the first matching item from the array of matches and
                provide an inline completion string.
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
              <NxTable.Cell><NxCode>error</NxCode></NxTable.Cell>
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
                dropdown for user selection.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>onSelect</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Function (match =&gt; void)
              </NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                The callback function to execute when the user selects one of the matches from the dropdown menu.
                Receives the entire selected item from the <NxCode>matches</NxCode> array as an argument.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>long</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Whether to render a long variant of the text input box and correspondingly the dropdown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>short</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Whether to render a short variant of the text input box and correspondingly the dropdown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>disabled</NxCode></NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                When set, this prop disables the text input input and the dropdown.
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
              <NxTable.Cell><NxCode>inputProps</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Props for <NxCode>NxTextInput</NxCode> except
                for <NxCode>type</NxCode>,{' '}
                <NxCode>value</NxCode>,{' '}
                <NxCode>isPristine</NxCode>,
                and <NxCode>readOnly</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Props to apply to the text input within the <NxCode>NxCombobox</NxCode>.
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
          <NxH3>Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          If using <NxCode>NxCombobox</NxCode> for a backend query, the search functionality should be used with a
          debounce in order to prevent excessive queries to the backend. The standard timing value to use for that
          debounce is provided via the <NxCode>NX_SEARCH_DROPDOWN_DEBOUNCE_TIME</NxCode> export.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-combobox-basic-example"
                        codeExamples={NxComboboxPredeterminedListExampleCode}
                        liveExample={NxComboboxPredeterminedListExample}>
      An example of an <NxCode>NxCombobox</NxCode> tied to a provided list of options to select from and
      with a <NxCode>long</NxCode> prop to make it wider.
    </GalleryExampleTile>

    <GalleryExampleTile title="Non-emptiness Validation Example"
                        id="nx-combobox-non-emptiness-example"
                        codeExamples={NxComboboxValidationExampleCode}
                        liveExample={NxComboboxValidationExample}>
      An example of an <NxCode>NxCombobox</NxCode> that validates that its contents are non-empty and
      with a <NxCode>short</NxCode> prop to make it narrower.
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
      An example of an <NxCode>NxCombobox</NxCode> with a <NxCode>disabled</NxCode> and <NxCode>short</NxCode> prop.
      Note that even though in this example there is non-empty search text, the dropdown does not open.
    </GalleryExampleTile>

  </>;

export default NxComboboxPage;
