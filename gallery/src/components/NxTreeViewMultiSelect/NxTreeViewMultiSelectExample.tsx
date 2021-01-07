/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {contains, toLower} from 'ramda';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import {NxFontAwesomeIcon, NxTreeViewMultiSelectOption, NxTreeViewMultiSelect}
  from '@sonatype/react-shared-components';

const NxTreeViewMultiSelectExample = () => {
  const options = [
    {
      id: 'bike',
      name: 'Bicycle'
    }, {
      id: 'motorcycle',
      name: 'Motorcycle'
    }, {
      id: 'skate',
      name: 'Skateboard'
    }, {
      id: 'longboard',
      name: 'Loooooooooooooooooooooooooooooooooongboard'
    }, {
      id: 'moped',
      name: 'Moped'
    }, {
      id: null,
      name: 'No Transport'
    }
  ];

  const [isOpen, toggleOpen] = useState(true),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['motorcycle']));

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxTreeViewMultiSelectOption) {
    return contains(toLower(filter), toLower(option.name));
  }

  return (
    <NxTreeViewMultiSelect name="travel"
                           id="nx-travel-tree-view"
                           isOpen={isOpen}
                           onToggleCollapse={onToggleCollapse}
                           options={options}
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

export default NxTreeViewMultiSelectExample;
