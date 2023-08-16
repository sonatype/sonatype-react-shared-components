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

const NxCollapsibleMultiSelectExample = () => {
  const customNameElement = (
    <>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Bicycle</span>
    </>
  );

  const options = [
    {
      id: 'bike',
      name: customNameElement
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

  const [isOpen, onToggleCollapse] = useToggle(true);

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['motorcycle']));

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxCollapsibleMultiSelectOption) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const name = typeof option.name === 'string' ? option.name : (option.name as any).props.children[1].props.children;
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
