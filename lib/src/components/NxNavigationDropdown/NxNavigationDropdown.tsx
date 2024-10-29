/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxIconDropdown, { Props, propTypes } from '../NxIconDropdown/NxIconDropdown';
import classnames from 'classnames';
import withClass from '../../util/withClass';
export { Props };

import './NxNavigationDropdown.scss';

export default function NxNavigationDropdown({ className, ...otherProps }: Props) {
  const classes = classnames('nx-navigation-dropdown', className);
  return <NxIconDropdown className={classes} { ...otherProps } />;
}

NxNavigationDropdown.propTypes = propTypes;

NxNavigationDropdown.MenuHeader = withClass('hgroup', 'nx-navigation-dropdown__menu-header');
