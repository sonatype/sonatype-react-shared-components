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
import { useUniqueId } from '../../util/idUtil';
import { Props, propTypes } from './types';

import './NxGlobalSidebar.scss';

const NxGlobalSidebar: FunctionComponent<Props> = function NxGlobalSidebar(props) {
  const {
    isOpen,
    children,
    className,
    toggleOpenIcon,
    toggleCloseIcon,
    onToggleClick
  } = props;

  const id = useUniqueId('nx-global-sidebar');

  const classes = classnames(className, 'nx-global-sidebar nx-viewport-sized', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;
  const toggleButton = (
    <NxButton aria-expanded={isOpen} aria-controls={id} onClick={onToggleClick} className="nx-global-sidebar__toggle">
      <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
      <span className="nx-global-sidebar__text">Collapse Menu</span>
    </NxButton>
  );

  return (
    <div className={classes} id={id}>
      <nav className="nx-global-sidebar__nav nx-viewport-sized__container" aria-label="global sidebar">
        {children}
      </nav>
      {toggleButton}
    </div>
  );
};

NxGlobalSidebar.propTypes = propTypes;

export default NxGlobalSidebar;
export { Props, propTypes } from './types';
