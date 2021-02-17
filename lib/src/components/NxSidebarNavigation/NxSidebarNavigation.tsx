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

import Close from '../../icons/Close';
import NxButton from '../NxButton/NxButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
import './NxSidebarNavitation.scss';


const NxSidebarNavigation = function NxSidebarNavigation(props: Props) {
  const { children, className, isOpen, helpLink, onToggleOpen } = props;
  const classes = classnames(className, 'nx-sidebar-nav', {
    'nx-sidebar-nav__open': isOpen,
    'nx-sidebar-nav__closed': !isOpen
  });

  const toggleButton = (
    <NxButton variant="icon-only"
              onClick={onToggleOpen}
              className='nx-sidebar-nav--icon nx-sidebar-nav--toggle'>
      { isOpen ? <Close /> : <NxFontAwesomeIcon icon={faBars} /> }
    </NxButton>
  )

  return (
    <nav className={classes}>
      { toggleButton }
      { children }
      <footer className="nx-sidebar-nav--footer">
        { !!helpLink &&
          <a rel="noreferrer"
             target="_blank"
             className="nx-sidebar-nav--link"
             href={helpLink}>
            <NxFontAwesomeIcon icon={faQuestionCircle}/>
          </a>
        }
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
