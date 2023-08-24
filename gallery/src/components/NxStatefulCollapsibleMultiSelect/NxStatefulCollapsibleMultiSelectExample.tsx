/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import {
  NxStatefulCollapsibleMultiSelect,
  NxFontAwesomeIcon,
  NxCollapsibleMultiSelectOption
} from '@sonatype/react-shared-components';

interface Option extends NxCollapsibleMultiSelectOption {
  stringName: string;
}

const NxStatefulCollapsibleMultiSelectExample = () => {
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
      id: 'moped',
      name: 'Moped',
      stringName: 'Moped'
    }, {
      id: null,
      name: 'No Transport',
      stringName: 'No Transport'
    }
  ];

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['motorcycle']));

  function handleOptionTooltip(option: Option) {
    const name = option.stringName;
    return name;
  }

  return (
    <NxStatefulCollapsibleMultiSelect name="travel"
                                      id="stateful-travel"
                                      options={options}
                                      optionTooltipGenerator={handleOptionTooltip}
                                      selectedIds={selection}
                                      onChange={onSelectionChange}
                                      filterPlaceholder="filter vehicle name"
                                      filterThreshold={3}>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Transportation</span>
    </NxStatefulCollapsibleMultiSelect>
  );
};

export default NxStatefulCollapsibleMultiSelectExample;
