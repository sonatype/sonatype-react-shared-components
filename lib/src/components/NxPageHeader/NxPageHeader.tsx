/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import AbstractNxPageHeader from '../AbstractNxPageHeader/AbstractNxPageHeader';
import { Props, ProductInfo, LogoProps, propTypes } from './types';
import importImage from '../../util/importImage';

export { Props };

const defaultLogoImg = importImage('sonatype-logo-with-hexagon.png');

function HeaderProductInfo({ name, version }: ProductInfo) {
  return (
    <>
      <div role="presentation" className="nx-product__divider">|</div>
      <div className="nx-product__name">{name}</div>
      { version && <div className="nx-product__version">Version: {version}</div> }
    </>
  );
}

function LogoImg({ logo }: LogoProps) {
  // When dark mode is implemented, this will presumably return multiple <img>s, only one of which will
  // be visible at a time
  return <img src={logo || defaultLogoImg} className="nx-product__logo-image" alt="Sonatype"/>;
}

export default function NxPageHeader({ logo, productInfo, ...otherProps }: Props) {
  const logoEl = <LogoImg logo={logo} />,
      productInfoContent = productInfo ? <HeaderProductInfo { ...productInfo } /> : null;

  return <AbstractNxPageHeader { ...otherProps } productInfoContent={productInfoContent} logo={logoEl} />;
}

NxPageHeader.propTypes = propTypes;
