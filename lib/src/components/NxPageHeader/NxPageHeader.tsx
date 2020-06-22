/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { Props, propTypes } from './types';

export { Props };

const logoImg = require('../../assets/img/sonatype-logo-with-hexagon.png');

export default function NxPageHeader({ links, homeLink, productInfo, children }: Props) {
  const logoEl = <img src={logoImg} className="nx-product__wordmark" alt="Sonatype" />,
      linkEls = links && links.map(
        ({ name, href }) => <a className="nx-page-header__link" key={name} href={href}>{name}</a>
      );

  return (
    <header className="nx-page-header">
      <div className="nx-page-header__inner">
        <div className="nx-product">
          <div className="nx-product__branding">
            { homeLink ? <a className="nx-product__home-link" href={homeLink}>{logoEl}</a> : logoEl }
          </div>
          { productInfo &&
            <>
              <div className="nx-product__name">{productInfo.name}</div>
              { productInfo.version && <div className="nx-product__version">Version: {productInfo.version}</div> }
            </>
          }
        </div>
        { linkEls && <div className="nx-page-header__links">{linkEls}</div> }
        { children && <div className="nx-page-header__extra-content">{children}</div> }
      </div>
    </header>
  );
}

NxPageHeader.propTypes = propTypes;
