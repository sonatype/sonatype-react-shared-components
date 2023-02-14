/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState, useCallback } from 'react';

import {
  NxCheckbox,
  NxRadio,
  NxStatefulTextInput,
  NxFontAwesomeIcon,
  NxToggle,
  NxFormGroup,
  NxFieldset,
  useToggle,
  NxColorPicker,
  SelectableColor,
  NxInfoAlert,
  NxFormSelect,
  nxFormSelectStateHelpers,
  nxTextInputStateHelpers,
  NxTransferList,
  NxStatefulForm,
  NxForm,
  NxReadOnly,
  NxTextInput,
  hasValidationErrors,
  nxFieldsetStateHelpers,
  NxFileUpload,
  NxMultiFileUpload,
  nxFileUploadStateHelpers,
  NxCombobox,
  DataItem
} from '@sonatype/react-shared-components';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { map, range, prepend, filter } from 'ramda';

const { initialState, userInput } = nxTextInputStateHelpers;

const states:string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska',
  'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'Washington DC', 'West Virginia', 'Wisconsin', 'Wyoming'];

const { useCheckboxGroupState, useTransferListState } = nxFieldsetStateHelpers;

const transferListItems = map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101));
const comboboxItems = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: states[i - 1] }), range(1, states.length + 1)));

export default function NxFormLayoutExample() {
  function validator(val: string | null) {
    return val?.length ? null : 'Must be non-empty';
  }

  const [textInputState, setTextInputState] = useState(nxTextInputStateHelpers.initialState('', validator)),
      [commentState, setCommentState] = useState(nxTextInputStateHelpers.initialState('', validator));

  function onTextInputChange(val: string) {
    setTextInputState(nxTextInputStateHelpers.userInput(validator, val));
  }

  function onCommentChange(val: string) {
    setCommentState(nxTextInputStateHelpers.userInput(validator, val));
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>('', validator);

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const {
    states: {
      red: [isRed, toggleRed],
      blue: [isBlue, toggleBlue],
      green: [isGreen, toggleGreen]
    },
    isPristine: colorIsPristine,
    validationErrors: colorValidationError
  } = useCheckboxGroupState(
      { red: false, blue: false, green: false },
      selectedColors => selectedColors.length ? null : 'A color is required'
  );

  const [color, setColor] = useState<string | null>(null);

  const [isWarpOn, toggleWarp] = useToggle(false),
      [isKrakenOut, toggleKraken] = useToggle(false),
      [isShapes, toggleShapes] = useToggle(false);

  const [tagColorState, setTagColor] = nxFieldsetStateHelpers.useRadioGroupState<SelectableColor>(undefined, validator);

  const {
    state: [selectedTransferItems, setSelectedTransferItems],
    isPristine: transferItemsIsPristine,
    validationErrors: transferItemsValidationErrors
  } = useTransferListState<Set<number>>(
      new Set(),
      (selectedItems) => !selectedItems.size ? 'At least one transfer item is required to be selected.' : null
  );

  const [availableTransferItemsFilter, setAvailableTransferItemsFilter] = useState(''),
      [selectedTransferItemsFilter, setSelectedTransferItemsFilter] = useState('');

  const [files, setFiles] = useState<FileList | null>(null),
      [isFilePristine, setFilePristine] = useState(true),
      onFileChange = (files: FileList | null) => {
        setFiles(files);
        setFilePristine(false);
      };

  const [multiFilesState, setMultiFilesState] = useState(nxFileUploadStateHelpers.initialState(null)),
      onMultiFileChange = (files: FileList | null) => {
        setMultiFilesState(nxFileUploadStateHelpers.userInput(files));
      };

  const [matches, setMatches] = useState<DataItem<number, string>[]>(comboboxItems),
      [comboboxInputState, setComboboxInputState] = useState(initialState('', validator)),
      onComboboxChange = (query: string) => setComboboxInputState(userInput(validator, query)),
      search = function(query: string):DataItem<number, string>[] {
        const lowercaseQuery = query.toLowerCase(),
            matchingItems = filter(i => i.displayName.toLowerCase().indexOf(lowercaseQuery) === 0, comboboxItems);
        return matchingItems;
      },
      executeQuery = useCallback(function executeQuery(query: string) {
        setMatches(search(query));
      }, [comboboxInputState.value]),
      onComboboxSearch = (query: string) => query ? executeQuery(query) : setMatches(comboboxItems);

  const formValidationErrors =
      hasValidationErrors(
          textInputState.validationErrors,
          commentState.validationErrors,
          colorValidationError,
          selectState.validationErrors,
          tagColorState.validationErrors,
          transferItemsValidationErrors,
          !files?.length ? 'A file is required' : null,
          comboboxInputState.validationErrors
      ) ? 'Required fields are missing' : null;

  function onSubmit() {
    alert('Submitted!');
  }

  function onCancel() {
    alert('Cancelled!');
  }

  const hostnameSublabel = (
    <>
      <NxFontAwesomeIcon icon={faCalendar}/>
      <span id="long-field-sublabel">The field element below is wider than the default.</span>
    </>
  );
  const toggleSublabel = (
    <>
      In a form layout toggles are laid out in a <code className="nx-code">&lt;fieldset&gt;</code> - this text is
      extra long to demonstrate wrapping, how much wood would a woodchuck chuck
    </>
  );

  return (
    <NxStatefulForm onSubmit={onSubmit}
                    onCancel={onCancel}
                    validationErrors={formValidationErrors}
                    aria-label="Default Form Layout Example">
      <NxForm.RequiredFieldNotice />
      <NxInfoAlert>This is a sample alert message</NxInfoAlert>
      <NxFormGroup label="A Field to Fill in" isRequired>
        <NxTextInput { ...textInputState } validatable onChange={onTextInputChange}/>
      </NxFormGroup>
      <NxFormGroup label="Username">
        <NxStatefulTextInput />
      </NxFormGroup>
      <NxFormGroup label="Hostname" sublabel={hostnameSublabel}>
        <NxStatefulTextInput className="nx-text-input--long"/>
      </NxFormGroup>
      <NxFieldset label="Colors" isRequired isPristine={colorIsPristine} validationErrors={colorValidationError}>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Primary Color" sublabel="Pick a single color">
        <NxRadio name="color"
                 value="red"
                 onChange={setColor}
                 isChecked={color === 'red'}>
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setColor}
                 isChecked={color === 'purple'}>
          Purple
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'}>
          Green
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'}>
          Blue
        </NxRadio>
      </NxFieldset>
      <NxFormGroup label="Select a Continent" isRequired>
        <NxFormSelect onChange={onSelectChange} validatable { ...selectState }>
          <option value="">-- Select a Continent --</option>
          <option value="NA">North America</option>
          <option value="SA">South America</option>
          <option value="AF">Africa</option>
          <option value="EU">Europe</option>
          <option value="AS">Asia</option>
          <option value="AU">Australia</option>
          <option value="AN">Antarctica</option>
        </NxFormSelect>
      </NxFormGroup>
      <NxFieldset label="Enable features - this text is extra long to demonstrate wrapping, how much wood would
                         a woodchuck chuck"
                  sublabel={toggleSublabel}>
        <NxToggle inputId="subscribe-check" onChange={toggleWarp} isChecked={isWarpOn}>
          Enable Warp Drive
        </NxToggle>
        <NxToggle inputId="no-label-check" onChange={toggleKraken} isChecked={isKrakenOut}>
          Release the Kraken!
        </NxToggle>
        <NxToggle inputId="children-check" onChange={toggleShapes} isChecked={isShapes}>
          Allow shapes
        </NxToggle>
      </NxFieldset>
      <NxFormGroup label="Comments" isRequired>
        <NxTextInput { ...commentState }
                     validatable
                     type="textarea"
                     placeholder="placeholder"
                     onChange={onCommentChange} />
      </NxFormGroup>
      <NxColorPicker label="Tag Color" isRequired { ...tagColorState } onChange={setTagColor} />
      <NxFieldset label="Numbered Items"
                  isRequired
                  isPristine={transferItemsIsPristine}
                  validationErrors={transferItemsValidationErrors}>
        <NxTransferList allItems={transferListItems}
                        selectedItems={selectedTransferItems}
                        availableItemsFilter={availableTransferItemsFilter}
                        selectedItemsFilter={selectedTransferItemsFilter}
                        onAvailableItemsFilterChange={setAvailableTransferItemsFilter}
                        onSelectedItemsFilterChange={setSelectedTransferItemsFilter}
                        onChange={setSelectedTransferItems} />
      </NxFieldset>
      <NxFormGroup label="Upload a File" sublabel={<>Foo<br/>Bar</>} isRequired>
        <NxFileUpload files={files} isRequired isPristine={isFilePristine} onChange={onFileChange} />
      </NxFormGroup>
      <NxFormGroup label="Upload Multiple Files" sublabel="Add as many as you'd like" isRequired>
        <NxMultiFileUpload {...multiFilesState}
                           isRequired
                           onChange={onMultiFileChange} />
      </NxFormGroup>
      <NxFormGroup label="State" isRequired>
        <NxCombobox matches={matches}
                    { ...comboboxInputState }
                    validatable={true}
                    onChange={onComboboxChange}
                    onSearch={onComboboxSearch}/>
      </NxFormGroup>
      <NxReadOnly>
        <NxReadOnly.Label>
          This is a read only label that that describes the data that will appear below
        </NxReadOnly.Label>
        <NxReadOnly.Data>
          Data - found security vulnerability CVE-2020-6230 with severity &lt; 10 (severity = 7.2)
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Found security vulnerability CVE-2020-6230 with severity &gt;= 7 (severity = 7.2)
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Found security vulnerability CVE-2020-6230 with status 'Open', not 'Not Applicable'
        </NxReadOnly.Data>
        <NxReadOnly.Data>
          Component does not contain proprietary packages
        </NxReadOnly.Data>
      </NxReadOnly>
    </NxStatefulForm>
  );
}
