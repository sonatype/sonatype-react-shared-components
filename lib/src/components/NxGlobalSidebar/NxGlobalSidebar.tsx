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
    onToggleClick,
    logoImg,
    logoAltText,
    logoLink
  } = props;

  const id = useUniqueId('nx-global-sidebar');

  const classes = classnames(className, 'nx-global-sidebar', {
    'open': isOpen,
    'closed': !isOpen
  });

  const toggleButtonIcon = isOpen ? toggleOpenIcon : toggleCloseIcon;
  const toggleButtonTitle = isOpen ? 'Collapse Sidebar' : 'Expand Sidebar';
  const toggleButton = (
    <NxButton aria-expanded={isOpen}
              aria-controls={id}
              variant="icon-only"
              onClick={onToggleClick}
              className="nx-global-sidebar__toggle"
              title={toggleButtonTitle}>
      <NxFontAwesomeIcon icon={toggleButtonIcon} fixedWidth />
    </NxButton>
  );

  const logo = <img src={logoImg} alt={logoAltText} className="nx-global-sidebar__logo" />;

  return (
    <aside className={classes} id={id} aria-label="global sidebar">
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

NxGlobalSidebar.propTypes = propTypes;

export default NxGlobalSidebar;
export { Props, propTypes } from './types';
