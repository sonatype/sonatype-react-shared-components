/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import NxButton from '../NxButton/NxButton';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { useUniqueId } from '../../util/idUtil';
import { Props, propTypes } from './types';

import './NxGlobalSidebar2.scss';

const NxGlobalSidebar2: FunctionComponent<Props> = function NxGlobalSidebar(props) {
  const {
    isOpen,
    children,
    className,
    toggleOpenIcon,
    toggleCloseIcon,
    onToggleClick
  } = props;

  const id = useUniqueId('nx-global-sidebar-2');

  const classes = classnames(className, 'nx-global-sidebar-2 nx-viewport-sized', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;

  return (
    <div className={classes} id={id}>
      <nav className="nx-global-sidebar-2__nav nx-scrollable nx-viewport-sized__scrollable" aria-label="global sidebar">
        {children}
      </nav>
      <NxOverflowTooltip>
        <NxButton aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={onToggleClick}
                  className="nx-global-sidebar-2__toggle">
          <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
          <span className="nx-global-sidebar-2__text">
            { isOpen ? 'Collapse' : 'Expand' } Menu
          </span>
        </NxButton>
      </NxOverflowTooltip>
    </div>
  );
};

NxGlobalSidebar2.propTypes = propTypes;

export default NxGlobalSidebar2;
export { Props, propTypes } from './types';
