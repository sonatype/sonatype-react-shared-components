/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {contains, toLower} from 'ramda';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import {NxFontAwesomeIcon, NxTreeViewMultiSelectOption, NxTreeViewMultiSelect, useToggle}
  from '@sonatype/react-shared-components';

interface CustomOption extends NxTreeViewMultiSelectOption {
  description: string;
}

const NxTreeViewMultiSelectCustomTooltipExample = () => {
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

  function filterPredicate(option: NxTreeViewMultiSelectOption) {
    return contains(toLower(filter), toLower(option.name));
  }

  return (
    <NxTreeViewMultiSelect name="travel-custom-tooltips"
                           id="nx-travel-tree-view-custom-tooltips"
                           isOpen={isOpen}
                           onToggleCollapse={onToggleCollapse}
                           options={options}
                           optionTooltipGenerator={option => option.description}
                           selectedIds={selection}
                           onChange={onSelectionChange}
                           filter={filter}
                           filterPlaceholder="vehicle name"
                           filterThreshold={3}
                           onFilterChange={setFilter}
                           filteredOptions={options.filter(filterPredicate)}>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Transportation</span>
    </NxTreeViewMultiSelect>
  );
};

export default NxTreeViewMultiSelectCustomTooltipExample;
