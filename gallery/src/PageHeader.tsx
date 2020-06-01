/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import packageJson from '../package.json';

const sonatypeLogo = require('@sonatype/react-shared-components/assets/img/sonatype-logo-with-hexagon.png');

function PageHeader() {
  return (
    <header className="nx-page-header">
      <div className="nx-page-header__inner">
        <a href="#" className="nx-product">
          <div className="nx-product__branding">
            <img src={sonatypeLogo} className="nx-product__wordmark" alt="Sonatype"/>
          </div>
          <div className="nx-product__vertical-divider">|</div>
          <div className="nx-product__name">react shared component library</div>
          <div className="nx-product__version">Version: {packageJson.version}</div>
        </a>
      </div>
    </header>
  );
}

export default PageHeader;
