/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { includes, toLower } from 'ramda';

import {
  NxCollapsibleRadioSelect,
  NxCollapsibleRadioSelectOption,
  useToggle
} from '@sonatype/react-shared-components';

interface CustomOption extends NxCollapsibleRadioSelectOption {
  description: string;
}

const NxCollapsibleRadioSelectCustomTooltipExample = () => {
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

  const [isOpen, onToggleCollapse] = useToggle(true),
      [selection, onSelectionChange] = useState<string | null>(options[0].id);

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxCollapsibleRadioSelectOption) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const name = typeof option.name === 'string' ? option.name : (option.name as any).props.children[1].props.children;
    return includes(toLower(filter), toLower(name));
  }

  return (
    <NxCollapsibleRadioSelect onToggleCollapse={onToggleCollapse}
                              isOpen={isOpen}
                              disabled={false}
                              name="travel-custom-tooltips"
                              id="nx-travel-collapsible-items-view-custom-tooltips"
                              selectedId={selection}
                              onChange={onSelectionChange}
                              options={options}
                              optionTooltipGenerator={option => option.description}
                              filter={filter}
                              filterPlaceholder="filter vehicle name"
                              filterThreshold={2}
                              onFilterChange={setFilter}
                              filteredOptions={options.filter(filterPredicate)}>
      Transportation
    </NxCollapsibleRadioSelect>
  );
};

export default NxCollapsibleRadioSelectCustomTooltipExample;
