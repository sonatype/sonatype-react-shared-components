/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';

export default function NxGlobalHeader2({ logoImg, logoAltText, logoLink, className, children, ...otherProps }: Props) {
  const classes = classnames(className, 'nx-global-header-2');

  return (
    <header className={classes} { ...otherProps }>
      <a href={logoLink} className="nx-global-header-2__home-link">
        <img src={logoImg} alt={logoAltText} className="nx-global-header-2__logo" />
      </a>
      <div className="nx-global-header-2__actions">
        {children}
      </div>
    </header>
  );
}

NxGlobalHeader2.propTypes = propTypes;
export { Props, propTypes } from './types';
