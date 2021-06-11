/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { NxGlobalSidebarNavigationProps as Props, nxGlobalSidebarNavigationPropTypes } from './types';
export { NxGlobalSidebarNavigationProps } from './types';

const NxGlobalSidebarNavigation: FunctionComponent<Props> = function NxNavigationSidebarLinks(props) {
  const { className, ...otherProps } = props;
  const classes = classnames(className, 'nx-global-sidebar__navigation');

  return (
    <nav className={classes} {...otherProps} />
  );
};

NxGlobalSidebarNavigation.propTypes = nxGlobalSidebarNavigationPropTypes;

export default NxGlobalSidebarNavigation;
