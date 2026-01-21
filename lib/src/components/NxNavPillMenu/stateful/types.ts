/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithRef } from 'react';
import PropTypes from 'prop-types';

import { NavPillMenuItem } from '../types';

export interface NxStatefulNavPillMenuProps extends ComponentPropsWithRef<'nav'> {
  items: NavPillMenuItem[];
  onItemChange?: (item: NavPillMenuItem) => void;
  scrollBehavior?: 'smooth' | 'auto';
  scrollOffset?: number;
}

export const nxStatefulNavPillMenuPropTypes = {
  items: PropTypes.array.isRequired,
  onItemChange: PropTypes.func,
  scrollBehavior: PropTypes.oneOf(['smooth', 'auto']),
  scrollOffset: PropTypes.number
};