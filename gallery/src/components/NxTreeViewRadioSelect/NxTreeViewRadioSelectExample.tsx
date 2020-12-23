/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {contains, toLower} from 'ramda';

import { NxTreeViewRadioSelect, NxTreeViewRadioSelectOption } from '@sonatype/react-shared-components';

interface CustomOption extends NxTreeViewRadioSelectOption {
  description: string;
}

const NxTreeViewRadioSelectExample = () => {
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
                           optionTooltipGenerator={option => option.description}
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
