/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useReducer } from 'react';
import {
  NxCheckbox,
  NxFieldset,
  NxRadio,
  NxTransferList,
  nxFieldsetStateHelpers,
  DataItem
} from '@sonatype/react-shared-components';

const {
  radioGroupInitialState,
  checkboxGroupInitialState,
  transferListInitialState,
  radioGroupUserInput,
  checkboxGroupUserInput,
  transferListUserInput
} = nxFieldsetStateHelpers;

interface State {
  color: nxFieldsetStateHelpers.RadioStateProps;
  direction: nxFieldsetStateHelpers.CheckboxStateProps;
  selectedColors: nxFieldsetStateHelpers.TransferListStateProps<Set<string>>;
  allColors: DataItem<string>[];
  availableColorsFilter: string;
  selectedColorsFilter: string;
}

const requiredMessage = 'At least one color must be selected',
    radioValidator = (v: string | null) => v ? null : requiredMessage,
    checkboxValidator = (selectedDirs: string[]) => selectedDirs.length ? null : requiredMessage,
    transferListValidator = (selectedItems: Set<string>) => selectedItems ? null : requiredMessage;

const initialState = {
  color: radioGroupInitialState(undefined, radioValidator),
  direction: checkboxGroupInitialState(undefined, checkboxValidator),
  selectedColors: transferListInitialState(new Set<string>(), transferListValidator),
  allColors: ['Red', 'Blue', 'Yellow', 'Purple', 'Pink'].map(color => ({ id: color, displayName: `Color: ${color}` })),
  availableColorsFilter: '',
  selectedColorsFilter: ''
};

/**
 * Normally these stateHelpers would be used when the state management is done entirely outside of the React
 * component file. For simplicity however this example just uses a simple reducer defined here
 */
function reducer(state: State, { type, payload }: { type: string, payload: string | Set<string> }) {
  switch (type) {
    case 'setColor':
      return (typeof payload === 'string') ?
        { ...state, color: radioGroupUserInput(payload, radioValidator) } :
        state;
    case 'toggleDirection':
      return (typeof payload === 'string') ?
        { ...state, direction: checkboxGroupUserInput(state.direction, payload, checkboxValidator) } :
        state;
    case 'selectColors':
      return (payload instanceof Set) ?
        { ...state, selectedColors: transferListUserInput(payload, transferListValidator)} :
        state;
    case 'setAvailableColorsFilter':
      return (typeof payload === 'string') ? { ...state, availableColorsFilter: payload } : state;
    case 'setSelectedColorsFilter':
      return (typeof payload === 'string') ? { ...state, selectedColorsFilter: payload } : state;
    default:
      return state;
  }
}

export default function NxFieldsetRequiredPureStateHelperExample() {
  const [
        { color, direction, selectedColors, allColors, availableColorsFilter, selectedColorsFilter }, dispatch
      ] = useReducer(reducer, initialState),
      setColor = (color: string | null) => {
        if (color) {
          dispatch({ type: 'setColor', payload: color });
        }
      },
      toggleDirection = (d: string) => () => { dispatch({ type: 'toggleDirection', payload: d }); },
      setSelectedColors = (c: Set<string>) => dispatch({ type: 'selectColors', payload: c }),
      setAvailableColorsFilter = (f: string) => dispatch({ type: 'setAvailableColorsFilter', payload: f }),
      setSelectedColorsFilter = (f: string) => dispatch({ type: 'setSelectedColorsFilter', payload: f });

  return (
    <>
      <NxFieldset label="Color"
                  isRequired
                  isPristine={color.isPristine}
                  validationErrors={color.validationErrors}>
        <NxRadio value="red" isChecked={color.value === 'red'} name="color-example-2" onChange={setColor}>
          Red
        </NxRadio>
        <NxRadio value="green" isChecked={color.value === 'green'} name="color-example-2" onChange={setColor}>
          Green
        </NxRadio>
        <NxRadio value="blue" isChecked={color.value === 'blue'} name="color-example-2" onChange={setColor}>
          Blue
        </NxRadio>
        <NxRadio value="purple" isChecked={color.value === 'purple'} name="color-example-2" onChange={setColor}>
          Purple
        </NxRadio>
      </NxFieldset>
      <NxFieldset label="Direction"
                  isRequired
                  isPristine={direction.isPristine}
                  validationErrors={direction.validationErrors}>
        <NxCheckbox isChecked={direction.values.includes('north')} onChange={toggleDirection('north')}>
          North
        </NxCheckbox>
        <NxCheckbox isChecked={direction.values.includes('south')} onChange={toggleDirection('south')}>
          South
        </NxCheckbox>
        <NxCheckbox isChecked={direction.values.includes('east')} onChange={toggleDirection('east')}>
          East
        </NxCheckbox>
        <NxCheckbox isChecked={direction.values.includes('west')} onChange={toggleDirection('west')}>
          West
        </NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Selected Colors"
                  isRequired
                  isPristine={selectedColors.isPristine}
                  validationErrors={selectedColors.validationErrors}>
        <NxTransferList allItems={allColors}
                        selectedItems={selectedColors.selectedItems}
                        availableItemsFilter={availableColorsFilter}
                        selectedItemsFilter={selectedColorsFilter}
                        onAvailableItemsFilterChange={setAvailableColorsFilter}
                        onSelectedItemsFilterChange={setSelectedColorsFilter}
                        onChange={setSelectedColors} />
      </NxFieldset>
    </>
  );
}
