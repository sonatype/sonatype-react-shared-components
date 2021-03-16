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

import { NxNavigationSidebarLinkProps as Props, nxNavigationSidebarLinkPropTypes } from './types';
export { NxNavigationSidebarLinkProps } from './types';

const NxNavigationSidebarLink: FunctionComponent<Props> = function NxNavigationSidebarLink(props) {
  const { className, isSelected, icon, text, href } = props;

  const classes = classnames(className, 'nx-global-sidebar__navigation-link nx-text-link', {
    'selected': isSelected
  });
  const textClasses = 'nx-global-sidebar__navigation-text nx-global-sidebar__expanded-content';

  return (
    <a href={href} className={classes}>
      <NxFontAwesomeIcon icon={icon} fixedWidth />
      <NxOverflowTooltip>
        <span className={textClasses}>
          {text}
        </span>
      </NxOverflowTooltip>
    </a>
  );
};

NxNavigationSidebarLink.propTypes = nxNavigationSidebarLinkPropTypes;

export default NxNavigationSidebarLink;
