/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { faBars, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import NxButton from '../NxButton/NxButton';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, SidebarNavLinkProps, propTypes } from './types';

import './NxSidebarNavitation.scss';

const NxSidebarNavLink = function NxSidebarNavLink({ name, href, icon, current }: SidebarNavLinkProps) {
  const navigationLinkClassnames = classnames('nx-sidebar__item', {
    'selected': current
  });

  return (
    <a href={href} className={navigationLinkClassnames} key={`nav-link-${name}`}>
      <NxFontAwesomeIcon icon={icon} />
      <span className="nx-sidebar__link-name">{name}</span>
    </a>
  );
};

const NxSidebarNavigation = function NxSidebarNavigation(props: Props) {
  const {
    isOpen,
    className,
    onToggleClick,
    logoImg,
    logoText,
    logoLink,
    links,
    helpLink,
    helpText,
    collapsedReleaseText,
    expandedReleaseText,
    attributions
  } = props;

  const classes = classnames(className, 'nx-sidebar', {
    'nx-sidebar--open': isOpen,
    'nx-sidebar--closed': !isOpen
  });

  const toggleButtonClasses = 'nx-sidebar__toggle';

  const closeBtn = (
    <NxCloseButton className={toggleButtonClasses}
                   onClick={onToggleClick} />
  );

  const openBtn = (
    <NxButton variant="icon-only"
              onClick={onToggleClick}
              className={toggleButtonClasses}>
      <NxFontAwesomeIcon icon={faBars} />
    </NxButton>
  );

  const toggleButton = isOpen ? closeBtn : openBtn;

  const navigationLinks = (
    <nav className="nx-sidebar__items">
      { links.map(NxSidebarNavLink)}
    </nav>
  );

  const logo = <img src={logoImg} className="nx-sidebar__logo" />;

  return (
    <aside className={classes}>
      { toggleButton }
      { isOpen &&
        <div className="nx-sidebar__product-info">
          { logoLink ? <a href={logoLink} aria-label="logo">{logo}</a> : logo }
          <span className="nx-sidebar__product-name">{logoText}</span>
        </div>
      }
      { navigationLinks }
      <footer className="nx-sidebar__footer">
        { !!helpLink &&
          <a rel="noreferrer"
             target="_blank"
             className="nx-sidebar__help-link"
             href={helpLink}>
            <NxFontAwesomeIcon icon={faQuestionCircle}/>
            { isOpen && <span className="nx-sidebar__help-text">{ helpText }</span>}
          </a>
        }

        { isOpen && expandedReleaseText &&
          <p className="nx-sidebar__release">
            {expandedReleaseText}
          </p>
        }
        { !isOpen && collapsedReleaseText &&
          <p className="nx-sidebar__release">
            { collapsedReleaseText }
          </p>
        }
        { isOpen && attributions &&
          attributions.map((attribution, index) => <p key={`attribution-${index}`}>{ attribution }</p>)
        }
      </footer>
    </aside>
  );
};

NxSidebarNavigation.propTypes = propTypes;

export default NxSidebarNavigation;
export { Props, propTypes } from './types';
