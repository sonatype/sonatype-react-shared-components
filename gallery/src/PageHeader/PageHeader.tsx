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
  <header className="nx-page-header gallery-page-header">
    <div className="nx-page-header__inner">
      <a className="gallery-page-header__home-link"
         href="#">
        <img className="gallery-page-header__logo-image"
             src={plaidVillain}
             alt="" />
        <img className="gallery-page-header__logotype-image"
             src={tartanLogotype}
             alt="Sonatype Tartan" />
      </a>

      <div className="gallery-page-header__info">
        <span className="gallery-page-header__name">
          React Shared Component Library
        </span>

        <span className="gallery-page-header__version">
          Version {packageJson.version}
        </span>
      </div>
    </div>
  </header>
);

export default PageHeader;
