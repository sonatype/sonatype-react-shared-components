/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import DataItem from '../../util/DataItem';

export interface Props<T extends string | number = string> {
  options: DataItem<T>[];
  isOpen: boolean;
  onToggleCollapse: (() => void);
  selectedIds: Set<T>;
  onChange: ((selectedIds: Set<T>, toggledId?: T) => void);
}

export const propTypes = {
  options: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
    displayName: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  onToggleCollapse: PropTypes.func.isRequired,
  selectedIds: PropTypes.instanceOf(Set) as PropTypes.Validator<Set<string | number>>,
  onChange: PropTypes.func.isRequired
};
