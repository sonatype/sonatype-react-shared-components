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

  const classes = classnames(className, 'nx-page-sidebar-operable', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;
  const toggleButton = (
    <NxButton variant="icon-only"
              onClick={onToggleClick}
              className="nx-page-sidebar-operable__toggle">
      <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
    </NxButton>
  );

  const logo = <img src={logoImg || defaultLogo} className="nx-page-sidebar-operable__logo" />;

  return (
    <aside className={classes}>
      <div className="nx-page-sidebar-operable__header">
        <a className="nx-page-sidebar-operable__product-info nx-page-sidebar-operable__expanded-content"
           href={logoLink}>
          { logo }
          <span className="nx-page-sidebar-operable__product-name">{ logoText }</span>
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
