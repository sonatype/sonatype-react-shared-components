/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useState} from 'react';
import { omit } from 'ramda';

import NxCollapsibleMultiSelect from '../NxCollapsibleMultiSelect';
import { Props, propTypes } from './types';
import { OptionWithStringName, Option, stringName } from '../../commonTypes';
export { Props, Option } from './types';
import useFuzzyFilter from '../../../../util/useFuzzyFilter';
import {textContent} from '../../../../util/childUtil';

const NxStatefulCollapsibleMultiSelect: FunctionComponent<Props> =
function NxStatefulCollapsibleMultiSelect<T extends Option>(props: Props<T>) {
  const { options, optionTooltipGenerator: optionTooltipGeneratorProp } = props,
      isOpenInitialState = !!props.isOpen;

  const [isOpen, toggleOpen] = useState(isOpenInitialState),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };

  const optionsWithStringName: OptionWithStringName[] =
  options.map(option => ({ ...option, [stringName]: textContent(option.name) }));

  const [filteredOptions, filter, setFilter] =
    useFuzzyFilter(optionsWithStringName, {keys: [stringName], threshold: 0.1});

  const optionTooltipGenerator = optionTooltipGeneratorProp && function optionTooltipGenerator(option: Option) {
    return optionTooltipGeneratorProp(omit([stringName], option));
  };

  return <NxCollapsibleMultiSelect {...props}
                                   optionTooltipGenerator={optionTooltipGenerator}
                                   isOpen={isOpen}
                                   onToggleCollapse={onToggleCollapse}
                                   filteredOptions={filteredOptions}
                                   onFilterChange={setFilter}
                                   filter={filter} />;
};

NxStatefulCollapsibleMultiSelect.propTypes = propTypes;

export default NxStatefulCollapsibleMultiSelect;
