/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';

import './NxNavigationSidebar.scss';

const NxNavigationSidebar: FunctionComponent<Props> = function NxNavigationSidebar(props) {
  const {
    isOpen,
    children,
    className,
    toggleOpenIcon,
    toggleCloseIcon,
    onToggleClick,
    logoImg,
    logoAltText,
    logoLink
  } = props;

  const classes = classnames(className, 'nx-global-sidebar', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;
  const toggleAriaLabel = isOpen ? 'Collapse Sidebar' : 'Expand Sidebar';
  const toggleButton = (
    <NxButton aria-label={toggleAriaLabel}
              variant="icon-only"
              onClick={onToggleClick}
              className="nx-global-sidebar__toggle">
      <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
    </NxButton>
  );

  const logo = <img src={logoImg} alt={logoAltText} className="nx-global-sidebar__logo" />;

  return (
    <aside className={classes}>
      <div className="nx-global-sidebar__header">
        <a className="nx-global-sidebar__product-info nx-global-sidebar__expanded-content"
           href={logoLink}>
          { logo }
        </a>
        { toggleButton }
      </div>
      { children }
    </aside>
  );
};

NxNavigationSidebar.propTypes = propTypes;

export default NxNavigationSidebar;
export { Props, propTypes } from './types';
