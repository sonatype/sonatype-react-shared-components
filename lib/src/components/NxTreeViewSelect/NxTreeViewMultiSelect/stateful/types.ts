/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode} from 'react';
import * as PropTypes from 'prop-types';
import {Option, optionPropType} from '../../commonTypes';
export {Option} from '../../commonTypes';
import { FuseOptions } from '../../../../util/useFuzzyFilter';

export interface Props {
  options: Option[];
  name: string;
  children: ReactNode;
  onChange: ((selectedIds: Set<string | null>, toggledId?: string | null) => void);
  selectedIds?: Set<string | null> | null;
  id?: string | null;
  isOpen?: boolean | null;
  disabled?: boolean | null;
  disabledTooltip?: string | null;
  optionTooltipGenerator?: ((option: Option) => string) | null;
  tooltipModifierClass?: string | null;
  filterPlaceholder?: string | null;
  filterThreshold?: number | null;
  fuzzyFilterConfig?: FuseOptions<Option> | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  options: PropTypes.arrayOf(optionPropType).isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selectedIds: PropTypes.instanceOf(Set) as PropTypes.Validator<Set<string | null>>,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledTooltip: PropTypes.string,
  optionTooltipGenerator: PropTypes.func,
  tooltipModifierClass: PropTypes.string,
  filterPlaceholder: PropTypes.string,
  filterThreshold: PropTypes.number,
  fuzzyFilterConfig: PropTypes.object
};
