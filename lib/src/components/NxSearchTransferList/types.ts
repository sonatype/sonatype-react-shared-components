/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps } from 'react';
import * as PropTypes from 'prop-types';
import RequiredReactNode from '../../util/RequiredReactNode';

import { Props as NxSearchDropdownProps } from '../NxSearchDropdown/types';
import { Props as NxTransferListHalfProps } from '../NxTransferListHalf/types';

export interface StatefulProps<T extends string | number = string> extends ComponentProps<'div'> {
  onSearch: NxSearchDropdownProps<T>['onSearch'];
  loading: NxSearchDropdownProps<T>['loading'];
  loadError?: NxSearchDropdownProps<T>['error'];
  searchMatches: NxSearchDropdownProps<T>['matches'];
  onSearchMatchSelect: NxSearchDropdownProps<T>['onSelect'];
  addedItemsLabel?: string | null;
  showRemoveAll?: boolean | null;
  addedItems: NxTransferListHalfProps<T>['items'];
  onRemove: (newAddedItems: NxTransferListHalfProps<T>['items']) => void;
  addedItemsCountFormatter?: ((n: number) => string) | null;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
}

export interface Props<T extends string | number = string> extends StatefulProps<T> {
  searchText: NxSearchDropdownProps<T>['searchText'];
  onSearchTextChange: NxSearchDropdownProps<T>['onSearchTextChange'];
  addedItemsFilter: NxTransferListHalfProps<T>['filterValue'];
  onAddedItemsFilterChange: NxTransferListHalfProps<T>['onFilterChange'];
}

const matchesPropType = PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
  displayName: PropTypes.node.isRequired as PropTypes.Validator<RequiredReactNode>
}).isRequired).isRequired;

export const statefulPropTypes: PropTypes.ValidationMap<StatefulProps<string | number>> = {
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loadError: PropTypes.string,
  searchMatches: matchesPropType,
  onSearchMatchSelect: PropTypes.func.isRequired,
  addedItemsLabel: PropTypes.string,
  showRemoveAll: PropTypes.bool,
  addedItems: matchesPropType,
  onRemove: PropTypes.func.isRequired,
  addedItemsCountFormatter: PropTypes.func,
  filterFn: PropTypes.func
};

export const propTypes: PropTypes.ValidationMap<Props<string | number>> = {
  ...statefulPropTypes,
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  addedItemsFilter: PropTypes.string.isRequired,
  onAddedItemsFilterChange: PropTypes.func.isRequired
};
