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
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';

import './NxSidebarNavitation.scss';


const NxSidebarNavigation = function NxSidebarNavigation(props: Props) {
  const { children, className, isOpen, helpLink, onToggleOpen } = props;
  const classes = classnames(className, 'nx-sidebar-nav', {
    'nx-sidebar-nav__open': isOpen,
    'nx-sidebar-nav__closed': !isOpen
  });
  const toggleButtonClasses = 'nx-sidebar-nav--icon nx-sidebar-nav--toggle';
  const closeBtn = (
    <NxCloseButton className={toggleButtonClasses}
                     onClick={onToggleOpen} />
  );
  const openBtn = (
    <NxButton variant="icon-only"
              onClick={onToggleOpen}
              className={toggleButtonClasses}>
      <NxFontAwesomeIcon icon={faBars} />
    </NxButton>
  );
  const toggleButton = isOpen ? closeBtn : openBtn;
  const logoImg = require('../../assets/img/SON_hexagon_cropped.svg');
  const logo = <img src={logoImg} className="nx-sidebar-nav--logo" />;
  const logoLink = 'http://google.com';
  
  return (
    <nav className={classes}>
      { toggleButton }
      { isOpen &&
        <div className="nx-sidebar-nav--product-info">
          { logoLink ? <a href={logoLink} aria-label="logo">{logo}</a> : logo }
          <span className="nx-sidebar-nav--product-name">nexus lifecycle</span>
        </div>
      }
      { children }
      { isOpen && <div className="nx-sidebar-nav--separator" /> }
      <footer className="nx-sidebar-nav--footer">
        { !!helpLink &&
          <a rel="noreferrer"
             target="_blank"
             className="nx-sidebar-nav--help-link"
             href={helpLink}>
            <NxFontAwesomeIcon icon={faQuestionCircle}/>
            { isOpen && <span className="nx-sidebar-nav--help-text">Help and Support</span>}
          </a>
        }

        <p className="nx-sidebar-nav--release">
          { isOpen ? 'Lifecycle Release 10X' : 'Release 10X' }
        </p>
        { isOpen &&
          <>
            <p>Powered by Nexus IQ Server</p>
            <p>Created by Sonatype</p>
          </>
        }
      </footer>
    </nav>
  );
};

NxSidebarNavigation.propTypes = propTypes;

export default NxSidebarNavigation;
export { Props, propTypes } from './types';
