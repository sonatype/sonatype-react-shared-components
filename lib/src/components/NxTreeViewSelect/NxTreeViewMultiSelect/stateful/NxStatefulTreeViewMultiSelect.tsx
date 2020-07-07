/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useState} from 'react';

import NxTreeViewMultiSelect from '../NxTreeViewMultiSelect';
import { Props, Option, propTypes } from './types';
export { Props, Option } from './types';
import useFuzzyFilter, { FuseOptions } from '../../../../util/useFuzzyFilter';

const NxStatefulTreeViewMultiSelect: FunctionComponent<Props> = function NxStatefulTreeViewMultiSelect(props) {
  const { options, fuzzyFilterConfig } = props,
      isOpenInitialState = !!props.isOpen;

  const [isOpen, toggleOpen] = useState(isOpenInitialState),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };

  /**
   * Config fuzzyFilter threshold and distance from props.
   *
   * Defaults provided to handle our usual max-length for orgs/apps (200):
   * According to https://fusejs.io/concepts/scoring-theory.html#scoring-theory
   * an entry is considered a match if it is X characters from location,
   * where:
   *  X = distance * threshold,
   *  location = 0 (default)
   */
  const filterConfigOptions: FuseOptions<Option> = {
    keys: ['name'],
    threshold: 0.1,
    distance: 2000,
    ...fuzzyFilterConfig
  };
  const [filteredOptions, filter, setFilter] = useFuzzyFilter(options, filterConfigOptions);

  return <NxTreeViewMultiSelect {...props}
                                isOpen={isOpen}
                                onToggleCollapse={onToggleCollapse}
                                filteredOptions={filteredOptions}
                                onFilterChange={setFilter}
                                filter={filter} />;
};

NxStatefulTreeViewMultiSelect.propTypes = propTypes;

export default NxStatefulTreeViewMultiSelect;
