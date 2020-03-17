/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import {
  NxStatefulTreeViewRadioSelect,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

const NxStatefulTreeViewRadioSelectExample = () => {
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
    }, {
      id: null,
      name: 'No Transport'
    }
  ];

  const [selection, onSelectionChange] = useState<string | null>('motorcycle');

  return (
    <NxStatefulTreeViewRadioSelect name="travel"
                                   id="stateful-travel"
                                   options={options}
                                   optionTooltipGenerator={option => option.name}
                                   selectedId={selection}
                                   onChange={onSelectionChange}
                                   filterPlaceholder="vehicle name"
                                   filterThreshold={3}>
      <NxFontAwesomeIcon icon={faBicycle}/>
      <span>Transportation</span>
    </NxStatefulTreeViewRadioSelect>
  );
};

export default NxStatefulTreeViewRadioSelectExample;
