/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import AbstractNxPageHeader from '../AbstractNxPageHeader/AbstractNxPageHeader';
import { Props, ProductInfo, propTypes } from './types';

export { Props };

const logoImg = require('../../assets/img/sonatype-logo-with-hexagon.png');

function HeaderProductInfo({ name, version }: ProductInfo) {
  return (
    <>
      <div className="nx-product__name">{name}</div>
      { version && <div className="nx-product__version">Version: {version}</div> }
    </>
  );
}

export default function NxPageHeader({ productInfo, ...otherProps }: Props) {
  const logo = <img src={logoImg} className="nx-product__logo-image" alt="⬡ Sonatype"/>,
      productInfoContent = productInfo ? <HeaderProductInfo { ...productInfo } /> : null;

  return <AbstractNxPageHeader { ...otherProps } { ...{ logo, productInfoContent } } />;
}

NxPageHeader.propTypes = propTypes;
