/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import AbstractNxPageHeader from '../AbstractNxPageHeader/AbstractNxPageHeader';
import { Props, propTypes } from './types';

export { Props };

const logoImg = require('../../assets/img/sonatype-logo-with-hexagon.png');

export default function NxPageHeader({ productInfo, ...otherProps }: Props) {
  const logo = <img src={logoImg} className="nx-product__logo-image" alt="⬡ Sonatype"/>,
      productInfoContent = productInfo ? (
        <>
          <div className="nx-product__name">{productInfo.name}</div>
          { productInfo.version && <div className="nx-product__version">Version: {productInfo.version}</div> }
        </>
      ) : null;

  return <AbstractNxPageHeader { ...otherProps } { ...{ logo, productInfoContent } } />;
}

NxPageHeader.propTypes = propTypes;
