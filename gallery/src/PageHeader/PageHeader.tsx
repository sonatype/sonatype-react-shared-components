/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import packageJson from '../../package.json';

const plaidVillain = require('./plaid-villain.svg');
const tartanLogotype = require('./tartan-logotype.svg');

import './PageHeader.scss';

const PageHeader = () => (
  <header className="nx-gallery-page-header">
    <div className="nx-gallery-page-header__inner">
      <h1 className="nx-gallery-page-header__logo">
        <a className="nx-gallery-page-header__home-link"
           href="#"
           aria-label="home">
          <img className="nx-gallery-page-header__logo-image"
               src={plaidVillain}
               alt="A cute but villainous Tartan logo" />
          <img className="nx-gallery-page-header__logotype-image"
               src={tartanLogotype}
               alt="Sonatype Tartan" />
          <span className="nx-gallery-page-header__name">
            <span>React Shared Component Library</span>
          </span>
        </a>
      </h1>
      <div className="nx-gallery-page-header__version">
        Version {packageJson.version}
      </div>
    </div>
  </header>
);

export default PageHeader;
