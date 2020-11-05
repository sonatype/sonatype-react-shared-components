/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const defaultLogo = require('../../assets/img/logo_nexus_generic.svg');

import AbstractNxPageHeader from '../AbstractNxPageHeader/AbstractNxPageHeader';
import { Props, propTypes } from './types';

export { Props };

import './NxNexusPageHeader.scss';

export default function NxNexusPageHeader({ productInfo, logoPath, ...otherProps }: Props) {
  const logo = <img src={logoPath || defaultLogo} className="nx-product__logo-image" />,
      productInfoContent = (
        <>
          <div className="nx-product__summary">
            <span className="nx-product__brand">nexus</span>
            <span className="nx-product__name">{productInfo.name}</span>
          </div>
          <div className="nx-product__details">
            <span className="nx-product__byline">from sonatype</span>
            { !!(productInfo.meta || productInfo.version) &&
              <span className="nx-product__meta">
                {productInfo.meta || ''} {productInfo.version || ''}
              </span>
            }
          </div>
        </>
      );

  return <AbstractNxPageHeader className="nx-page-header--nexus"
                              { ...otherProps }
                              { ...{ logo, productInfoContent } } />;
}

NxNexusPageHeader.propTypes = propTypes;
