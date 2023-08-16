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
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

const NxCollapsibleMultiSelectDisabledExample = () => {
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
      id: 'moped',
      name: 'Moped'
    }
  ];

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['motorcycle']));

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxCollapsibleMultiSelectOption) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const name = typeof option.name === 'string' ? option.name : (option.name as any).props.children[1].props.children;
    return includes(toLower(filter), toLower(name));
  }

  return (
    <NxCollapsibleMultiSelect name="travel-disabled"
                              isOpen={true}
                              options={options}
                              selectedIds={selection}
                              onChange={onSelectionChange}
                              disabled={true}
                              disabledTooltip="Disabled Tooltip example"
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

export default NxCollapsibleMultiSelectDisabledExample;
