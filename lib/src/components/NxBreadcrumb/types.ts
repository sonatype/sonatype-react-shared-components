/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export interface Crumb {
  name: string;
  href: string;
}

export interface DropdownProps {
  crumbs: Crumb[];
  isOpen: boolean;
  onToggleCollapse: () => void;
}

export interface StatefulProps extends HTMLAttributes<HTMLElement> {
  crumbs: Crumb[];
}

export interface Props extends StatefulProps {
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
}

export const statefulPropTypes: PropTypes.ValidationMap<StatefulProps> = {
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...statefulPropTypes,
  isDropdownOpen: PropTypes.bool.isRequired,
  onToggleDropdown: PropTypes.func.isRequired
};
