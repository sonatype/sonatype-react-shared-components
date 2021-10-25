/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useState} from 'react';

import NxCollapsibleItemsMultiSelect from '../NxCollapsibleItemsMultiSelect';
import { Props, propTypes } from './types';
export { Props, Option } from './types';
import useFuzzyFilter from '../../../../util/useFuzzyFilter';

const NxStatefulCollapsibleItemsMultiSelect: FunctionComponent<Props> =
function NxStatefulCollapsibleItemsMultiSelect(props) {
  const {options} = props,
      isOpenInitialState = !!props.isOpen;

  const [isOpen, toggleOpen] = useState(isOpenInitialState),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };

  const [filteredOptions, filter, setFilter] = useFuzzyFilter(options, {keys: ['name'], threshold: 0.1});

  return <NxCollapsibleItemsMultiSelect {...props}
                                        isOpen={isOpen}
                                        onToggleCollapse={onToggleCollapse}
                                        filteredOptions={filteredOptions}
                                        onFilterChange={setFilter}
                                        filter={filter} />;
};

NxStatefulCollapsibleItemsMultiSelect.propTypes = propTypes;

export default NxStatefulCollapsibleItemsMultiSelect;
