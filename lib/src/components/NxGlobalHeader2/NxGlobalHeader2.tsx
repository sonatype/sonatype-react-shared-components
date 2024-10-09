/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';

import './NxGlobalHeader2.scss';

const defaultSonatypeLogoLight = require('../../assets/img/sonatype-header.png'),
    defaultSonatypeLogoDark = require('../../assets/img/sonatype-header-dark-mode.png'),
    defaultAltText = 'Sonatype';

export default function NxGlobalHeader2({ logoProps, homeHref, className, children, ...otherProps }: Props) {
  const classes = classnames(className, 'nx-global-header-2'),
      { lightPath = defaultSonatypeLogoLight, darkPath = defaultSonatypeLogoDark, altText = defaultAltText } =
        logoProps ?? {};

  return (
    <header className={classes} { ...otherProps }>
      <a href={homeHref} className="nx-global-header-2__home-link" aria-label="Home">
        <img src={lightPath} alt={altText} className="nx-global-header-2__logo-light" />
        <img src={darkPath} alt={altText} className="nx-global-header-2__logo-dark" />
      </a>
      <div className="nx-global-header-2__actions">
        {children}
      </div>
    </header>
  );
}

NxGlobalHeader2.propTypes = propTypes;
export { Props, propTypes } from './types';
