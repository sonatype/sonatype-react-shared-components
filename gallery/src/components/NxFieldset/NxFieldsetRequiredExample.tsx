/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { map, range } from 'ramda';

import {
  NxCheckbox,
  NxFieldset,
  NxTransferList,
  NxRadio,
  nxFieldsetStateHelpers,
  DataItem
} from '@sonatype/react-shared-components';

const { useRadioGroupState, useCheckboxGroupState, useTransferListState } = nxFieldsetStateHelpers;

const requiredMessage = 'At least one color must be selected';

export default function NxFieldsetRequiredExample() {
  const [color, setColor] = useRadioGroupState(undefined, v => v ? null : requiredMessage);

  const {
    states: {
      north: [north, toggleNorth],
      south: [south, toggleSouth],
      east: [east, toggleEast],
      west: [west, toggleWest]
    },
    isPristine: isDirectionPristine,
    validationErrors: directionValidationErrors
  } = useCheckboxGroupState({
    north: false,
    south: false,
    east: false,
    west: false
  }, selectedDirs => selectedDirs.length ? null : requiredMessage);

  const items = map<number, DataItem<number>>(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101));
  const {
    state: [selectedItems, setSelectedItems],
    isPristine: selectedItemsIsPristine,
    validationErrors: selectedItemsValidationErrors
  } = useTransferListState(
      new Set<number>(),
      (selectedItems) => !selectedItems.size ? 'At least one item must be selected' : null
  );

  const [availableItemsFilter, setAvailableItemsFilter] = useState(''),
      [selectedItemsFilter, setSelectedItemsFilter] = useState('');

  return (
    <>
      <NxFieldset label="Color"
                  isRequired
                  isPristine={color.isPristine}
                  validationErrors={color.validationErrors}>
        <NxRadio value="red" isChecked={color.value === 'red'} name="color" onChange={setColor}>Red</NxRadio>
        <NxRadio value="green" isChecked={color.value === 'green'} name="color" onChange={setColor}>Green</NxRadio>
        <NxRadio value="blue" isChecked={color.value === 'blue'} name="color" onChange={setColor}>Blue</NxRadio>
        <NxRadio value="purple" isChecked={color.value === 'purple'} name="color" onChange={setColor}>Purple</NxRadio>
      </NxFieldset>
      <NxFieldset label="Direction"
                  isRequired
                  isPristine={isDirectionPristine}
                  validationErrors={directionValidationErrors}>
        <NxCheckbox isChecked={north} onChange={toggleNorth}>
          North
        </NxCheckbox>
        <NxCheckbox isChecked={south} onChange={toggleSouth}>
          South
        </NxCheckbox>
        <NxCheckbox isChecked={east} onChange={toggleEast}>
          East
        </NxCheckbox>
        <NxCheckbox isChecked={west} onChange={toggleWest}>
          West
        </NxCheckbox>
      </NxFieldset>
      <NxFieldset label="Select Items"
                  isRequired
                  isPristine={selectedItemsIsPristine}
                  validationErrors={selectedItemsValidationErrors}>
        <NxTransferList allItems={items}
                        selectedItems={selectedItems}
                        availableItemsFilter={availableItemsFilter}
                        selectedItemsFilter={selectedItemsFilter}
                        onAvailableItemsFilterChange={setAvailableItemsFilter}
                        onSelectedItemsFilterChange={setSelectedItemsFilter}
                        onChange={setSelectedItems} />
      </NxFieldset>
    </>
  );
}
