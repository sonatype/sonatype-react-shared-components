/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithRef } from 'react';
import PropTypes from 'prop-types';

export interface NavPillMenuItem {
  id: string;
  label: string;
  href?: string;
  scrollTarget?: string;
  disabled?: boolean;
}

export interface NxNavPillMenuProps extends ComponentPropsWithRef<'nav'> {
  items: NavPillMenuItem[];
  onItemClick?: (item: NavPillMenuItem, event: React.MouseEvent<HTMLAnchorElement>) => void;
  scrollBehavior?: 'smooth' | 'auto';
  scrollOffset?: number;
}

export const nxNavPillMenuPropTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  scrollBehavior: PropTypes.oneOf(['smooth', 'auto']),
  scrollOffset: PropTypes.number
};