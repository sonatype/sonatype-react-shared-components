/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {contains, toLower} from 'ramda';

import { NxTreeViewRadioSelect, NxTreeViewRadioSelectOption } from '@sonatype/react-shared-components';

const NxTreeViewRadioSelectExample = () => {
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
      [selection, onSelectionChange] = useState<string | null>(options[0].id),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxTreeViewRadioSelectOption) {
    return contains(toLower(filter), toLower(option.name));
  }

  return (
    <NxTreeViewRadioSelect onToggleCollapse={onToggleCollapse}
                           isOpen={isOpen}
                           disabled={false}
                           name="travel"
                           id="nx-travel-tree-view"
                           selectedId={selection}
                           onChange={onSelectionChange}
                           options={options}
                           filter={filter}
                           filterPlaceholder="vehicle name"
                           filterThreshold={2}
                           onFilterChange={setFilter}
                           filteredOptions={options.filter(filterPredicate)}>
      Transportation
    </NxTreeViewRadioSelect>
  );
};

export default NxTreeViewRadioSelectExample;
