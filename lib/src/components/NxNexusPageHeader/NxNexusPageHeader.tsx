/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const defaultLogo = require('../../assets/img/logo_nexus_generic.svg');

import AbstractNxPageHeader from '../AbstractNxPageHeader/AbstractNxPageHeader';
import { Props, ProductInfo, propTypes } from './types';

export { Props };

import './NxNexusPageHeader.scss';
import { join, reject, isNil } from 'ramda';

function HeaderProductInfo({ name, meta, version }: ProductInfo) {
  // note that combining these in JSX with a space in between would result in an extra space when one of the
  // fields isn't present, so we have to combine them more carefully like this
  const metaAndVersionString = join(' ', reject(isNil, [meta, version]));

  return (
    <>
      <div className="nx-product__summary">
        <span className="nx-product__brand">nexus</span>
        <span className="nx-product__name">{name}</span>
      </div>
      <div className="nx-product__details">
        <span className="nx-product__byline">from sonatype</span>
        { metaAndVersionString && <span className="nx-product__meta">{metaAndVersionString}</span> }
      </div>
    </>
  );
}

export default function NxNexusPageHeader({ productInfo, logoPath, ...otherProps }: Props) {
  const logo = <img src={logoPath || defaultLogo} className="nx-product__logo-image" />,
      productInfoContent = <HeaderProductInfo { ...productInfo } />;

  return <AbstractNxPageHeader className="nx-page-header--nexus"
                              { ...otherProps }
                              { ...{ logo, productInfoContent } } />;
}

NxNexusPageHeader.propTypes = propTypes;
