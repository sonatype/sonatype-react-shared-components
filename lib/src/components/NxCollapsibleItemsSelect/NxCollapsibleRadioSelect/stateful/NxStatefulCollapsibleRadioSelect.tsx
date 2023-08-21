/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useState} from 'react';

import NxCollapsibleRadioSelect from '../NxCollapsibleRadioSelect';
import { Props, propTypes } from './types';
import { OptionWithStringName, stringName } from '../../commonTypes';
export { Props, Option } from './types';
import useFuzzyFilter from '../../../../util/useFuzzyFilter';
import {textContent} from '../../../../util/childUtil';

const NxStatefulCollapsibleRadioSelect: FunctionComponent<Props> =
function NxStatefulCollapsibleRadioSelect(props) {
  const {options} = props,
      isOpenInitialState = !!props.isOpen;

  const [isOpen, toggleOpen] = useState(isOpenInitialState),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };
  const optionsWithStringName: OptionWithStringName[] =
    options.map(option => ({ ...option, [stringName]: textContent(option.name) }));

  const [filteredOptions, filter, setFilter] =
    useFuzzyFilter(optionsWithStringName, {keys: [stringName], threshold: 0.1});

  return <NxCollapsibleRadioSelect {...props}
                                   isOpen={isOpen}
                                   onToggleCollapse={onToggleCollapse}
                                   filteredOptions={filteredOptions}
                                   onFilterChange={setFilter}
                                   filter={filter} />;
};

NxStatefulCollapsibleRadioSelect.propTypes = propTypes;

export default NxStatefulCollapsibleRadioSelect;
