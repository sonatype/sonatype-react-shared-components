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
import { TooltipConfigProps } from '../../util/tooltipUtils';

type SelectionChangeHandler<T> = (checked: boolean, id: T) => void;

export interface NxTransferListDataItem<T extends string | number = string> extends DataItem<T> {
  tooltip?: TooltipConfigProps | string | null;
}

export interface TransferListItemProps<T extends string | number = string> extends NxTransferListDataItem<T> {
  checked: boolean;
  onChange?: SelectionChangeHandler<T> | null;
  showReorderingButtons?: boolean | null;
  isFilteredItem?: boolean | null;
  onReorderItem?: (id: T, direction: 1 | -1) => void | null;
  isTopItem: boolean;
  isBottomItem: boolean;
}

export interface Props<T extends string | number = string> {
  label: Exclude<ReactNode, null | undefined>;
  filterValue: string;
  onFilterChange: NxFilterInputProps['onChange'];
  showMoveAll?: boolean | null;
  onMoveAll?: (toMove: T[]) => void | null;
  items: NxTransferListDataItem<T>[];
  isSelected?: boolean | null;
  onItemChange?: SelectionChangeHandler<T> | null;
  footerContent: ReactNode;
  filterFn?: ((filterStr: string, itemDisplayName: string) => boolean) | null;
  onReorderItem?: (id: T, direction: -1 | 1) => void | null;
  allowReordering?: boolean | null;
}

// generic props omitted due to type checking issues
export const propTypes = {
  label: PropTypes.node.isRequired,
  filterValue: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
  onItemChange: PropTypes.func,
  footerContent: PropTypes.node.isRequired,
  filterFn: PropTypes.func,
  showMoveAll: PropTypes.bool,
  onMoveAll: PropTypes.func,
  allowReordering: PropTypes.bool,
  onReorderItem: PropTypes.func
};
