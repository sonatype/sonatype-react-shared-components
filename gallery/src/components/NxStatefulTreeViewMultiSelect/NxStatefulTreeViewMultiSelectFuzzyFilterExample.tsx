/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';

import {
  NxStatefulTreeViewMultiSelect,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

const NxStatefulTreeViewMultiSelectFuzzyFilterExample = () => {
  const options = [
    {
      id: 'app1',
      name: 'App With Many Spaces 1'
    }, {
      id: 'app2',
      name: 'App With Many Spaces 2'
    }, {
      id: 'app3',
      name: 'App With Many Spaces 3'
    }, {
      id: 'app4',
      name: 'App With Many Spaces 4'
    }, {
      id: 'app5',
      name: '- App With Many Spaces 5'
    }, {
      id: 'app6',
      name: '-App With Many Spaces 6'
    }, {
      id: 'app7',
      name: '_App With Many Spaces 7'
    }, {
      id: 'app8',
      name: '_ App With Many Spaces 8'
    }, {
      id: 'app9',
      name: 'App_With_Many_Underscores_9'
    }, {
      id: 'app10',
      name: '_App_With_Many_Underscores _10'
    }, {
      id: 'app11',
      name: '-App-With-Many-Dashes-11'
    }, {
      id: 'app12',
      name: '- App-With-Many-Dashes- 12'
    }
  ];

  const [selection, onSelectionChange] = useState<Set<string | null>>(new Set(['app10']));

  // See https://fusejs.io/api/options.html for more config options
  const fuseConfig = {
    threshold: 0.1,
    distance: 100
  };

  return (
    <NxStatefulTreeViewMultiSelect name="applications"
                                   id="stateful-applications"
                                   options={options}
                                   optionTooltipGenerator={option => option.name}
                                   selectedIds={selection}
                                   onChange={onSelectionChange}
                                   filterPlaceholder="application name"
                                   filterThreshold={6}
                                   fuzzyFilterConfig={fuseConfig}>
      <NxFontAwesomeIcon icon={faCapsules}/>
      <span>Apps</span>
    </NxStatefulTreeViewMultiSelect>
  );
};

export default NxStatefulTreeViewMultiSelectFuzzyFilterExample;
