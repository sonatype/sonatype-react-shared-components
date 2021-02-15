/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint-disable */
import React from 'react';
import classnames from 'classnames';
import { faBars, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
import './NxSidebarNavitation.scss';

const NxSidebarNavigation = function NxSidebarNavigation(props: Props) {
  const { children, className } = props;
  // const classes = classnames(className, 'nx-sidebar-nav', {
  //   'nx-sidebar-nav__open': isOpen,
  //   'nx-sidebar-nav__closed': !isOpen
  // });
  const classes = classnames(className, 'nx-sidebar-nav', 'nx-sidebar-nav__closed');

  return (
    <nav className={classes}>
      <NxButton variant="icon-only"
                className="nx-sidebar-nav--icon nx-closed-menu-icon">
        <NxFontAwesomeIcon icon={faBars}/>
      </NxButton>
      { children }
      <footer className="nx-sidebar-nav--footer">
        <NxButton variant="icon-only"
                  className="nx-sidebar-nav--icon nx-footer-help-icon">
          <NxFontAwesomeIcon icon={faQuestionCircle}/>
        </NxButton>
        <p className="nx-sidebar-nav--release">
          Release 10X
        </p>
      </footer>
    </nav>
  );
};

NxSidebarNavigation.propTypes = propTypes;

export default NxSidebarNavigation;
export { Props, propTypes } from './types';
