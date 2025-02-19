/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps } from 'react';
import * as PropTypes from 'prop-types';

import DataItem from '../../util/DataItem';

export interface Props<T extends string | number = string> extends Omit<ComponentProps<'div'>, 'onChange'> {
  options: DataItem<T>[];
  isOpen: boolean;
  onToggleCollapse: (() => void);
  selectedIds: Set<T>;
  onChange: ((selectedIds: Set<T>, toggledId?: T) => void);
  showReset?: boolean | null;
  placeholder?: string | null;
}

export const propTypes = {
  // options and selectedIds are omitted due to issue with parametric props
  isOpen: PropTypes.bool.isRequired,
  onToggleCollapse: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  showReset: PropTypes.bool,
  placeholder: PropTypes.string
};
