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

const defaultLogoImg = importImage('sonatype-logo-with-hexagon.png'),
    defaultDarkLogoImg = importImage('sonatype-logo-with-hexagon-dark-mode.png'),
    defaultLogoProps = {
      path: defaultLogoImg,
      darkModePath: defaultDarkLogoImg,
      alt: 'Sonatype'
    };

function HeaderProductInfo({ name, version }: ProductInfo) {
  return (
    <>
      <div role="presentation" className="nx-product__divider">|</div>
      <div className="nx-product__name">{name}</div>
      { version && <div className="nx-product__version">Version: {version}</div> }
    </>
  );
}

function LogoImg({ path, alt, darkModePath }: LogoProps) {
  return (
    <>
      <img src={darkModePath}
           className="nx-product__logo-image nx-product__logo-image--dark"
           alt={alt} />
      <img src={path}
           className="nx-product__logo-image nx-product__logo-image--light"
           alt={alt}/>
    </>
  );
}

export default function NxPageHeader({ logo, productInfo, ...otherProps }: Props) {
  const logoEl = <LogoImg { ...logo ?? defaultLogoProps } />,
      productInfoContent = productInfo ? <HeaderProductInfo { ...productInfo } /> : null;

  return <AbstractNxPageHeader { ...otherProps } productInfoContent={productInfoContent} logo={logoEl} />;
}

NxPageHeader.propTypes = propTypes;
