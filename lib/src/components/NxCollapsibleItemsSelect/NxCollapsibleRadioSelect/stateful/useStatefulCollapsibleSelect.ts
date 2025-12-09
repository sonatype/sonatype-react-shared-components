/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useMemo, useState } from 'react';
import { map, prop } from 'ramda';

import { textContent } from '../../../../util/childUtil';
import useFuzzyFilter from '../../../../util/useFuzzyFilter';
import { Option } from '../../commonTypes';
import { Props } from './types';

/**
 * Common logic for NxStatefulCollapsibleMultiSelect and NxStatefulCollapsibleRadioSelect. Tracks the open state
 * and the filtering
 */
export default function useStatefulCollapsibleSelect<T extends Option>(
  props: Pick<Props<T>, 'isOpen' | 'options' | 'optionTooltipGenerator'>
) {
  interface WrappedOption {
    option: T;
    stringName: string;
  }

  const { options, optionTooltipGenerator: optionTooltipGeneratorProp } = props,
      isOpenInitialState = !!props.isOpen;

  const [isOpen, toggleOpen] = useState(isOpenInitialState),
      onToggleCollapse = () => {
        toggleOpen(!isOpen);
      };

  const wrappedOptions: WrappedOption[] = useMemo(
      () => map(option => ({ option, stringName: textContent(option.name) }), options),
      [options]
  );

  const [filteredWrappedOptions, filter, onFilterChange] =
    useFuzzyFilter(wrappedOptions, {keys: ['stringName'], threshold: 0.1});

  const filteredOptions = useMemo(
      () => map(prop('option'), filteredWrappedOptions),
      [filteredWrappedOptions]
  );

  const optionTooltipGenerator = optionTooltipGeneratorProp && function optionTooltipGenerator(option: T) {
    return optionTooltipGeneratorProp(option);
  };

  return { isOpen, onToggleCollapse, filteredOptions, optionTooltipGenerator, filter, onFilterChange };
}
