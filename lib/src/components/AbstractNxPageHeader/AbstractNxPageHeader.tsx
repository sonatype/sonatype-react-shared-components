/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { HeaderLinkProps, Props, propTypes } from './types';

export { Props };

function HeaderLink({ name, href, current }: HeaderLinkProps) {
  const classes = classnames('nx-page-header__link', {
    'nx-page-header__link--current': current
  });

  return (
    <a className={classes} href={href} data-text={name} aria-label={name}>{name}</a>
  );
}

// visible for testing
export { HeaderLinkProps, HeaderLink };

export default function NxPageHeader({ className, links, homeLink, productInfoContent, logo, children }: Props) {
  const linkEls = links && links.map(link => <HeaderLink key={link.name} { ...link } />),
      classes = classnames('nx-page-header', className);

  return (
    <header className={classes}>
      <div className="nx-page-header__inner">
        <div className="nx-product">
          <div className="nx-product__logo">
            { homeLink ? <a className="nx-product__home-link" href={homeLink} aria-label="Home">{logo}</a> : logo }
          </div>
          {productInfoContent}
        </div>
        { linkEls && <div className="nx-page-header__links">{linkEls}</div> }
        { children && <div className="nx-page-header__extra-content">{children}</div> }
      </div>
    </header>
  );
}

NxPageHeader.propTypes = propTypes;
