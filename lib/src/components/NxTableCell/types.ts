/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import PropTypes from 'prop-types';
import {TdHTMLAttributes, ThHTMLAttributes} from 'react';

// Final Props are the HTMLProps & our re-definitions
export type Props = (TdHTMLAttributes<HTMLTableCellElement> | ThHTMLAttributes<HTMLTableHeaderCellElement>) & {
  isHeader?: boolean | null;
  metaInfo?: boolean | null;
  isNumeric?: boolean | null;
  isSortable?: boolean | null;
  isFilter?: boolean | null;
  isFilterDropdown?: boolean | null;
  isFilterDisable?: boolean | null;
  hasIcon?: boolean | null;
  chevron?: boolean | null;
  sortDir?: 'asc' | 'desc' | null;
  onFilterChange?: ((filter: string) => void) | null;
  filterPlaceholder?: string | null;
  filter?: string | null;
  initialFilterDropdownLabel?: string | null;
  filterDropdownOptions?: Set<string> | null;
  onDropdownLinkChange?: ((filter: string) => void) | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  isHeader: PropTypes.bool,
  metaInfo: PropTypes.bool,
  isNumeric: PropTypes.bool,
  isSortable: PropTypes.bool,
  isFilter: PropTypes.bool,
  isFilterDropdown: PropTypes.bool,
  isFilterDisable: PropTypes.bool,
  hasIcon: PropTypes.bool,
  chevron: PropTypes.bool,
  sortDir: PropTypes.oneOf(['asc', 'desc', null]),
  children: PropTypes.node,
  onFilterChange: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filter: PropTypes.string,
  initialFilterDropdownLabel: PropTypes.string,
  filterDropdownOptions: PropTypes.instanceOf(Set) as PropTypes.Validator<Set<string>>,
  onDropdownLinkChange: PropTypes.func
};
