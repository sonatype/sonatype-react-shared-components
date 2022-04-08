/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import { Props as NxFilterInputProps } from '../NxFilterInput/NxFilterInput';
import DataItem from '../../util/DataItem';

type SelectionChangeHandler<T> = (checked: boolean, id: T) => void;

export interface TransferListItemProps<T extends string | number = string> extends DataItem<T> {
  checked: boolean;
  onChange: SelectionChangeHandler<T>;
  showReorderingButtons?: boolean | null;
  isFilteredItem?: boolean | null;
  onReorderItem?: (index: number, direction: 1 | -1) => void | null;
  index: number;
  listLength: number;
}

export interface Props<T extends string | number = string> {
  label: Exclude<ReactNode, null | undefined>;
  filterValue: string;
  onFilterChange: NxFilterInputProps['onChange'];
  showMoveAll: boolean;
  onMoveAll: (toMove: T[]) => void;
  items: DataItem<T>[];
  isSelected: boolean;
  onItemChange: SelectionChangeHandler<T>;
  footerContent: ReactNode;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
  onReorderItem?: (index: number, direction: -1 | 1) => void | null;
  allowReordering?: boolean | null;
}

// generic props omitted due to type checking issues
export const propTypes = {
  label: PropTypes.node.isRequired,
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onItemChange: PropTypes.func.isRequired,
  footerContent: PropTypes.node.isRequired,
  filterFn: PropTypes.func,
  showMoveAll: PropTypes.bool.isRequired,
  allowReordering: PropTypes.bool,
  onReorderItem: PropTypes.func
};
