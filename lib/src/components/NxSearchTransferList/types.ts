/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

import { Props as NxSearchDropdownProps } from '../NxSearchDropdown/types';
import { TransferListHalfProps } from '../NxTransferList/types';

export interface Props<T extends string | number = string> extends HTMLAttributes<HTMLDivElement> {
  searchText: NxSearchDropdownProps<T>['searchText'];
  onSearchTextChange: NxSearchDropdownProps<T>['onSearchTextChange'];
  onSearch: NxSearchDropdownProps<T>['onSearch'];
  loading: NxSearchDropdownProps<T>['loading'];
  loadError?: NxSearchDropdownProps<T>['error'];
  searchMatches: NxSearchDropdownProps<T>['matches'];
  onSearchMatchSelect: NxSearchDropdownProps<T>['onSelect'];
  addedItemsLabel?: string | null;
  addedItemsFilter: TransferListHalfProps<T>['filterValue'];
  onAddedItemsFilterChange: TransferListHalfProps<T>['onFilterChange'];
  showRemoveAll?: boolean | null;
  addedItems: TransferListHalfProps<T>['items'];
  onRemove: (newAddedItems: TransferListHalfProps<T>['items']) => void;
  addedItemsCountFormatter?: ((n: number) => string) | null;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}

const matchesPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
  displayName: PropTypes.string.isRequired
}).isRequired).isRequired;

export const propTypes: PropTypes.ValidationMap<Props<string | number>> = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loadError: PropTypes.string,
  searchMatches: matchesPropType,
  onSearchMatchSelect: PropTypes.func.isRequired,
  addedItemsLabel: PropTypes.string,
  addedItemsFilter: PropTypes.string.isRequired,
  onAddedItemsFilterChange: PropTypes.func.isRequired,
  showRemoveAll: PropTypes.bool,
  addedItems: matchesPropType,
  onRemove: PropTypes.func.isRequired,
  addedItemsCountFormatter: PropTypes.func,
  filterFn: PropTypes.func
};
