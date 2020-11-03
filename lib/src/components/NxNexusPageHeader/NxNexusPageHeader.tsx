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

import './NxNexusPageHeader.scss';

function HeaderLink({ name, href, current }: HeaderLinkProps) {
  const classes = classnames('nx-page-header__link', {
    'nx-page-header__link--current': current
  });

  return (
    <a className={classes} href={href} data-text={name}>{name}</a>
  );
}

// visible for testing
export { HeaderLinkProps, HeaderLink };

export default function NxNexusPageHeader({ links, homeLink, productInfo, children, imgURL }: Props) {
  const logoImg = imgURL || '../../assets/img/logo_nexus_generic.svg',
      logoEl = <img src={logoImg} className="nx-product__logo-image" alt="⬡ Sonatype"/>,
      linkEls = links && links.map(link => <HeaderLink key={link.name} { ...link } />);

  return (
    <header className="nx-page-header nx-page-header--nexus">
      <div className="nx-page-header__inner">
        <div className="nx-product">
          <div className="nx-product__logo">
            { homeLink ? <a className="nx-product__link" href={homeLink}>{logoEl}</a> : logoEl }
          </div>
          <div className="nx-product__summary">
            <span className="nx-product__brand">nexus</span>
            { productInfo && <span className="nx-product__name">{productInfo.name}</span> }
          </div>
          <div className="nx-product__details">
            <span className="nx-product__byline">from sonatype</span>
            { productInfo && <span className="nx-product__version">{productInfo.version}</span> }
          </div>
        </div>
        { linkEls && <div className="nx-page-header__links">{linkEls}</div> }
        { children && <div className="nx-page-header__extra-content">{children}</div> }
      </div>
    </header>
  );
}

NxNexusPageHeader.propTypes = propTypes;
