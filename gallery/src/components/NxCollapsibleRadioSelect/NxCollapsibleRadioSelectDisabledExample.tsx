/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import { NxCollapsibleRadioSelect } from '@sonatype/react-shared-components';

const NxCollapsibleRadioSelectDisabledExample = () => {
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
    }
  ];

  const [selection, onSelectionChange] = useState<string | null>(options[0].id);

  return (
    <NxCollapsibleRadioSelect isOpen={true}
                              disabled={true}
                              disabledTooltip="Disabled Tooltip example"
                              name="travel-disabled"
                              selectedId={selection}
                              onChange={onSelectionChange}
                              options={options}>
      Transportation
    </NxCollapsibleRadioSelect>
  );
};

export default NxCollapsibleRadioSelectDisabledExample;
