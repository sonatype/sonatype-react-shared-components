/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import { NxNavigationSidebarContentProps as Props, nxNavigationSidebarContentPropTypes } from './types';
export { NxNavigationSidebarContentProps } from './types';

const NxNavigationSidebarContent: FunctionComponent<Props> = function NxNavigationSidebarContent(props) {
  const { className, ...otherProps } = props;
  const classes = classnames('nx-page-sidebar-operable__content', className);

  return (
    <section className={classes} {...otherProps} />
  );
};

NxNavigationSidebarContent.propTypes = nxNavigationSidebarContentPropTypes;

export default NxNavigationSidebarContent;
