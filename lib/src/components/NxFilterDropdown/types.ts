/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';
import DataItem from '../../util/DataItem';

export interface Props<T extends string | number = string> extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: DataItem<T>[];
  isOpen: boolean;
  onToggleCollapse: (() => void);
  selectedIds: Set<T>;
  onChange: ((selectedIds: Set<T>, toggledId?: T) => void);
  showReset?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props<string | number>> = {
  options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
        displayName: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggleCollapse: PropTypes.func.isRequired,
  selectedIds: PropTypes.instanceOf(Set).isRequired as PropTypes.Validator<Set<string | number>>,
  onChange: PropTypes.func.isRequired,
  showReset: PropTypes.bool
};
