/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint react/prop-types: 0 */
import React, {FunctionComponent} from 'react';

import { Option } from '../commonTypes';
import NxTreeViewCounter from '../NxTreeViewCounter';

export interface Props {
  options: Option[];
  selectedIds: Set<string | null>;
}

const MultiSelectCounter: FunctionComponent<Props> = function MultiSelectCounter({options, selectedIds}) {
  const isAnyOptionSelected = selectedIds.size !== 0;
  return (
    <NxTreeViewCounter isActive={isAnyOptionSelected}>
      {isAnyOptionSelected ? selectedIds.size + ' of ' : ''}{options.length}
    </NxTreeViewCounter>
  );
};

export default MultiSelectCounter;
