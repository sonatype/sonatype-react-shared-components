/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {contains, toLower} from 'ramda';

import {
  NxCollapsibleItemsRadioSelect,
  NxCollapsibleItemsRadioSelectOption,
  useToggle
} from '@sonatype/react-shared-components';

const NxCollapsibleItemsRadioSelectExample = () => {
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

  const [isOpen, onToggleCollapse] = useToggle(true),
      [selection, onSelectionChange] = useState<string | null>(options[0].id);

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxCollapsibleItemsRadioSelectOption) {
    return contains(toLower(filter), toLower(option.name));
  }

  return (
    <NxCollapsibleItemsRadioSelect onToggleCollapse={onToggleCollapse}
                                   isOpen={isOpen}
                                   disabled={false}
                                   name="travel"
                                   id="nx-travel-tree-view"
                                   selectedId={selection}
                                   onChange={onSelectionChange}
                                   options={options}
                                   filter={filter}
                                   filterPlaceholder="filter vehicle name"
                                   filterThreshold={2}
                                   onFilterChange={setFilter}
                                   filteredOptions={options.filter(filterPredicate)}>
      Transportation
    </NxCollapsibleItemsRadioSelect>
  );
};

export default NxCollapsibleItemsRadioSelectExample;
