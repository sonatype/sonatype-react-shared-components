/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { NxNavigationSidebarContentProps as Props, nxNavigationSidebarContentPropTypes } from './types';
export { NxNavigationSidebarContentProps as NxNavigationSidebarLinksProps } from './types';

const NxNavigationSidebarLinks: FunctionComponent<Props> = function NxNavigationSidebarLinks(props) {
  const { className, children, ...otherProps } = props;
  const classes = classnames(className, 'nx-sidebar-navigation');

  return (
    <nav className={classes} {...otherProps}>
      { children }
    </nav>
  );
};

NxNavigationSidebarLinks.propTypes = nxNavigationSidebarContentPropTypes;

export default NxNavigationSidebarLinks;
