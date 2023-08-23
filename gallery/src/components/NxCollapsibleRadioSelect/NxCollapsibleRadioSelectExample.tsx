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
  NxCollapsibleRadioSelect,
  NxCollapsibleRadioSelectOption,
  NxFontAwesomeIcon,
  useToggle
} from '@sonatype/react-shared-components';

const NxCollapsibleRadioSelectExample = () => {

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

  const [isOpen, onToggleCollapse] = useToggle(true),
      [selection, onSelectionChange] = useState<string | null>(options[0].id);

  const [filter, setFilter] = useState('');

  function filterPredicate(option: NxCollapsibleRadioSelectOption) {
    const name = typeof option.name === 'string' ? option.name : option.name.props.children[1].props.children;
    return includes(toLower(filter), toLower(name));
  }

  return (
    <NxCollapsibleRadioSelect onToggleCollapse={onToggleCollapse}
                              isOpen={isOpen}
                              disabled={false}
                              name="travel"
                              id="nx-travel-collapsible-items-view"
                              selectedId={selection}
                              onChange={onSelectionChange}
                              options={options}
                              filter={filter}
                              filterPlaceholder="filter vehicle name"
                              filterThreshold={2}
                              onFilterChange={setFilter}
                              filteredOptions={options.filter(filterPredicate)}>
      Transportation
    </NxCollapsibleRadioSelect>
  );
};

export default NxCollapsibleRadioSelectExample;
