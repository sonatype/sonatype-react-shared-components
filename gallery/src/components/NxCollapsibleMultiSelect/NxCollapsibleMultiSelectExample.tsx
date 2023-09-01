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
  NxFontAwesomeIcon,
  NxCollapsibleMultiSelectOption,
  NxCollapsibleMultiSelect,
  useToggle
} from '@sonatype/react-shared-components';

interface Option extends NxCollapsibleMultiSelectOption {
  stringName: string;
}

const NxCollapsibleMultiSelectExample = () => {
  const customNameElement = (
    <>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Bicycle</span>
    </>
  );

  const options: Option[] = [
    {
      id: 'bike',
      name: customNameElement,
      stringName: 'Bicycle'
    }, {
      id: 'motorcycle',
      name: 'Motorcycle',
      stringName: 'Motorcycle'
    }, {
      id: 'skate',
      name: 'Skateboard',
      stringName: 'Skateboard'
    }, {
      id: 'longboard',
      name: 'Loooooooooooooooooooooooooooooooooongboard',
      stringName: 'Loooooooooooooooooooooooooooooooooongboard'
    }, {
      id: 'moped',
      name: 'Moped',
      stringName: 'Moped'
    }, {
      id: null,
      name: 'No Transport',
      stringName: 'No Transport'
    }
  ];

  const [isOpen, onToggleCollapse] = useToggle(true);

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['motorcycle']));

  const [filter, setFilter] = useState('');

  function filterPredicate(option: Option) {
    const name: string = option.stringName;
    return includes(toLower(filter), toLower(name));
  }

  return (
    <NxCollapsibleMultiSelect name="travel"
                              id="nx-travel-collapsible-items"
                              isOpen={isOpen}
                              onToggleCollapse={onToggleCollapse}
                              options={options}
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

export default NxCollapsibleMultiSelectExample;
