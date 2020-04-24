/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import packageJson from '../package.json';

const sonatypeLogo = require('@sonatype/react-shared-components/assets/img/SON_hexagon_cropped.svg');

function PageHeader() {
  return (
    <header className="nx-header">
      <div className="nx-header__inner">
        <a href="#" className="nx-product">
          <img src={sonatypeLogo} className="nx-product__logo"/>
          <div className="nx-product__name">
            Sonatype Component Library
          </div>
          <div className="nx-product__version">
            Version: {packageJson.version}
          </div>
        </a>
      </div>
    </header>
  );
}

export default PageHeader;
