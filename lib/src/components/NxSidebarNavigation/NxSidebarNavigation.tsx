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
  const navigationLinkClassnames = classnames('nx-sidebar-nav--item', {
    'selected': current
  });

  return (
    <li className={navigationLinkClassnames} key={`nav-link-${name}`}>
      <a href={href} className="nx-sidebar-nav--link">
        <NxFontAwesomeIcon icon={icon} />
        <span className="nx-sidebar-nav--link-name">{name}</span>
      </a>
    </li>
  );
};

const NxSidebarNavigation = function NxSidebarNavigation(props: Props) {
  const {
    isOpen,
    className,
    onToggleClick,
    logo,
    logoText,
    logoLink,
    links,
    helpLink,
    helpText,
    collapsedReleaseText,
    expandedReleaseText,
    attributions
  } = props;

  const classes = classnames(className, 'nx-sidebar-nav', {
    'nx-sidebar-nav__open': isOpen,
    'nx-sidebar-nav__closed': !isOpen
  });

  const toggleButtonClasses = 'nx-sidebar-nav--icon nx-sidebar-nav--toggle';

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
    <ul className="nx-sidebar-nav--items">
      { links.map(NxSidebarNavLink)}
    </ul>
  );

  return (
    <nav className={classes}>
      { toggleButton }
      { isOpen &&
        <div className="nx-sidebar-nav--product-info">
          { logoLink ? <a href={logoLink} aria-label="logo">{logo}</a> : logo }
          <span className="nx-sidebar-nav--product-name">{logoText}</span>
        </div>
      }
      { navigationLinks }
      { isOpen && <div className="nx-sidebar-nav--separator" /> }
      <footer className="nx-sidebar-nav--footer">
        { !!helpLink &&
          <a rel="noreferrer"
             target="_blank"
             className="nx-sidebar-nav--help-link"
             href={helpLink}>
            <NxFontAwesomeIcon icon={faQuestionCircle}/>
            { isOpen && <span className="nx-sidebar-nav--help-text">{ helpText }</span>}
          </a>
        }

        { isOpen && expandedReleaseText &&
          <p className="nx-sidebar-nav--release">
            {expandedReleaseText}
          </p>
        }
        { !isOpen && collapsedReleaseText &&
          <p className="nx-sidebar-nav--release">
            { collapsedReleaseText }
          </p>
        }
        { isOpen && attributions &&
          attributions.map((attribution, index) => <p key={`attribution-${index}`}>{ attribution }</p>)
        }
      </footer>
    </nav>
  );
};

NxSidebarNavigation.propTypes = propTypes;

export default NxSidebarNavigation;
export { Props, propTypes } from './types';
