/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode} from 'react';
import * as PropTypes from 'prop-types';

import { requiredNullableString } from '../../util/customPropTypes';
import RequiredReactNode from '../../util/RequiredReactNode';

export interface Option {
  id: string | null;
  name: RequiredReactNode;
}

export interface CommonProps<T extends Option = Option> {
  options: T[];
  name: string;
  children: ReactNode;
  id?: string | null;
  isOpen?: boolean | null;
  onToggleCollapse?: (() => void) | null;
  disabled?: boolean | null;
  disabledTooltip?: string | null;
  optionTooltipGenerator?: ((option: T) => string) | null;
  tooltipModifierClass?: string | null;
  onFilterChange?: ((filter: string) => void) | null;
  filter?: string | null;
  filteredOptions?: T[] | null;
  filterPlaceholder?: string | null;
  filterThreshold?: number | null;
}

export const optionPropType: PropTypes.Validator<Option> = PropTypes.shape({
  id: requiredNullableString,
  name: PropTypes.node.isRequired as PropTypes.Validator<RequiredReactNode>
}).isRequired;

export const commonPropTypes: PropTypes.ValidationMap<CommonProps> = {
  options: PropTypes.arrayOf(optionPropType).isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
  disabled: PropTypes.bool,
  disabledTooltip: PropTypes.string,
  optionTooltipGenerator: PropTypes.func,
  tooltipModifierClass: PropTypes.string,
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
  filteredOptions: PropTypes.arrayOf(optionPropType),
  filterPlaceholder: PropTypes.string,
  filterThreshold: PropTypes.number
};
