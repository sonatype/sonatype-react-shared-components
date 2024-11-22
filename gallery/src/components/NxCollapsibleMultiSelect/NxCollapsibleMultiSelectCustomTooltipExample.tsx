/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { includes, toLower } from 'ramda';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import {
  NxCollapsibleMultiSelect,
  NxCollapsibleMultiSelectOption,
  NxFontAwesomeIcon,
  useToggle
} from '@sonatype/react-shared-components';

interface CustomOption extends NxCollapsibleMultiSelectOption {
  // include name within CustomOption to narrow its type to string
  name: string;
  description: string;
}

const NxCollapsibleMultiSelectCustomTooltipExample = () => {
  const options: CustomOption[] = [
    {
      id: 'bike',
      name: 'Bicycle',
      description: '2 wheels, a frame, and your leg muscles'
    }, {
      id: 'motorcycle',
      name: 'Motorcycle',
      description: '2 wheels, a frame, and an engine'
    }, {
      id: 'skate',
      name: 'Skateboard',
      description: '4 little wheels and a board'
    }, {
      id: 'longboard',
      name: 'Loooooooooooooooooooooooooooooooooongboard',
      description: '4 little wheels and a longer, more stable board'
    }, {
      id: 'moped',
      name: 'Moped',
      description: '2 wheels, a frame, and an underpowered engine'
    }, {
      id: null,
      name: 'No Transport',
      description: 'Staying at home. There\'s a pandemic on, afterall.'
    }
  ];

  const [isOpen, onToggleCollapse] = useToggle(true);

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['motorcycle']));

  const [filter, setFilter] = useState('');

  function filterPredicate(option: CustomOption) {
    return includes(toLower(filter), toLower(option.name));
  }

  return (
    <NxCollapsibleMultiSelect name="travel-custom-tooltips"
                              id="nx-travel-collapsible-items-custom-tooltips"
                              isOpen={isOpen}
                              onToggleCollapse={onToggleCollapse}
                              options={options}
                              optionTooltipGenerator={option => option.description}
                              selectedIds={selection}
                              onChange={onSelectionChange}
                              filter={filter}
                              filterPlaceholder="filter vehicle name"
                              filterThreshold={3}
                              onFilterChange={setFilter}
                              filteredOptions={options.filter(filterPredicate)}>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Transportation</span>
    </NxCollapsibleMultiSelect>
  );
};

export default NxCollapsibleMultiSelectCustomTooltipExample;
