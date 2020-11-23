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
  id: string;
}

const MultiSelectCounter: FunctionComponent<Props> =
  function MultiSelectCounter({ options, selectedIds, ...otherProps }) {
    const isAnyOptionSelected = selectedIds.size !== 0,
        ariaLabel = `${selectedIds.size} option${selectedIds.size === 1 ? '' : 's'} out of ${options.length} selected`;

    return (
      <NxTreeViewCounter { ...otherProps }
                         aria-label={ariaLabel}
                         isActive={isAnyOptionSelected}>
        {isAnyOptionSelected ? selectedIds.size + ' of ' : ''}{options.length}
      </NxTreeViewCounter>
    );
  };

export default MultiSelectCounter;
