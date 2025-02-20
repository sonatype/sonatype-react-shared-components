/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

import { NxGlobalSidebar2NavigationLinkProps as Props, nxGlobalSidebar2NavigationLinkPropTypes } from './types';
export { NxGlobalSidebar2NavigationLinkProps } from './types';

import './NxGlobalSidebar2NavigationLink.scss';

const NxGlobalSidebarNavigationLink: FunctionComponent<Props> = function NxNavigationSidebarLink(props) {
  const { className, isSelected, icon, text, ...attrs } = props;

  const classes = classnames(className, 'nx-global-sidebar-2__navigation-link nx-text-link', {
    'selected': isSelected
  });

  return (
    <NxOverflowTooltip>
      <a className={classes} { ...attrs }>
        <NxFontAwesomeIcon icon={icon} fixedWidth />
        <span className="nx-global-sidebar-2__text">{text}</span>
      </a>
    </NxOverflowTooltip>
  );
};

NxGlobalSidebarNavigationLink.propTypes = nxGlobalSidebar2NavigationLinkPropTypes;

export default NxGlobalSidebarNavigationLink;
