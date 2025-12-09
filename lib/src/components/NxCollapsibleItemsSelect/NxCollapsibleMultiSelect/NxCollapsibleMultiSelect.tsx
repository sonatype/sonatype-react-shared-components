/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { all, propEq, any } from 'ramda';

import { Props, propTypes, Option } from './types';
export { Props, Option } from './types';
import NxCheckbox from '../../NxCheckbox/NxCheckbox';
import MultiSelectCounter from '../../Counter/MultiSelectCounter';
import AbstractCollapsibleItemsSelect, { generateId } from '../AbstractCollapsibleItemsSelect';
import { isProduction } from '../../../util/envUtil';

function NxCollapsibleMultiSelect<T extends Option>(props: Props<T>) {
  // exclude onChange and selectedIds from the props we pass to AbstractCollapsibleItemsSelect
  const {onChange, selectedIds, optionTooltipGenerator, ...otherProps} = props;

  const {options, name} = props,
      filteredOptions = props.filteredOptions || options,
      normalizedSelectedIds = selectedIds || new Set(),
      disabled = !!props.disabled,
      allFilteredSelected = all(item => normalizedSelectedIds.has(item.id), filteredOptions);

  if (!isProduction) {
    // Throw an error if one of the selectedIds is not part of the available options
    normalizedSelectedIds.forEach(itemId => {
      if (!any(propEq(itemId, 'id'), options)) {
        throw new Error(`You are attempting to select "${itemId}", but it is not part of the available options`);
      }
    });
  }

  function toggle(id: string | null) {
    const newSelected = new Set(normalizedSelectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    }
    else {
      newSelected.add(id);
    }
    onChange(newSelected, id);
  }

  function toggleSelectAll() {
    const isFiltered = options.length > filteredOptions.length;
    if (isFiltered) {
      const newSelected = new Set(normalizedSelectedIds);

      if (allFilteredSelected) {
        filteredOptions.forEach(option => newSelected.delete(option.id));
      }
      else {
        filteredOptions.forEach(option => newSelected.add(option.id));
      }

      onChange(newSelected);
    }
    else {
      // logically same as above but optimized since we don't need to iterate over filteredOptions
      const allAvailableSelected = options.length === normalizedSelectedIds.size;
      if (allAvailableSelected) {
        onChange(new Set());
      }
      else {
        const allIds = options.map(option => option.id);
        onChange(new Set(allIds));
      }
    }
  }

  const renderOption = ({id, name: optionName}: Option) => (
    <NxCheckbox checkboxId={generateId(name, id)}
                onChange={() => toggle(id)}
                isChecked={normalizedSelectedIds.has(id)}
                overflowTooltip={!optionTooltipGenerator}
                disabled={disabled}
                inputAttributes={{ role: 'menuitemcheckbox' }}
                role="">
      {optionName}
    </NxCheckbox>
  );

  const renderToggleAllOption = () => filteredOptions.length > 0 ? (
    <NxCheckbox checkboxId={generateId(name, 'all/none')}
                onChange={toggleSelectAll}
                isChecked={allFilteredSelected}
                disabled={disabled}
                inputAttributes={{ role: 'menuitemcheckbox' }}
                role="">
      all/none
    </NxCheckbox>
  ) : null;

  const renderCounter = () => <MultiSelectCounter options={options} selectedIds={normalizedSelectedIds} />;

  return <AbstractCollapsibleItemsSelect {...otherProps}
                                         optionTooltipGenerator={optionTooltipGenerator}
                                         renderOption={renderOption}
                                         renderToggleAllOption={renderToggleAllOption}
                                         renderCounter={renderCounter}/>;
}

NxCollapsibleMultiSelect.propTypes = propTypes;

export default NxCollapsibleMultiSelect;
