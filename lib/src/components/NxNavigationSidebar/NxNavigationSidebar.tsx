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

const defaultLogo = require('../../assets/img/SON_hexagon_cropped.svg');

const NxNavigationSidebar: FunctionComponent<Props> = function NxNavigationSidebar(props) {
  const {
    isOpen,
    children,
    className,
    toggleOpenIcon,
    toggleCloseIcon,
    onToggleClick,
    logoImg,
    logoText,
    logoLink
  } = props;

  const classes = classnames(className, 'nx-page-sidebar', 'nx-page-sidebar--navigation', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;
  const toggleButton = (
    <NxButton variant="icon-only"
              onClick={onToggleClick}
              className="nx-sidebar__toggle">
      <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
    </NxButton>
  );

  const logo = <img src={logoImg || defaultLogo} className="nx-sidebar__logo" />;

  return (
    <aside className={classes}>
      <div className="nx-sidebar__header">
        { toggleButton }
        <a href={logoLink} className="nx-sidebar__product-info nx-text-link">
          { logo }
          <span className="nx-sidebar__product-name">{ logoText }</span>
        </a>
      </div>
      { children }
    </aside>
  );
};

NxNavigationSidebar.propTypes = propTypes;

export default NxNavigationSidebar;
export { Props, propTypes } from './types';
