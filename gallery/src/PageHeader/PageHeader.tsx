/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import HostedVersionsSelect from './HostedVersionsSelect';

const plaidVillain = require('./plaid-villain.svg');
const tartanLogotype = require('./tartan-logotype.svg');

import './PageHeader.scss';

const PageHeader = () => (
  <header id="gallery-page-header" className="nx-page-header gallery-page-header">
    <div className="nx-page-header__inner">
      <a className="gallery-page-header__home-link"
         href="#/">
        <img className="gallery-page-header__logo-image"
             src={plaidVillain}
             alt="" />
        <img className="gallery-page-header__logotype-image"
             src={tartanLogotype}
             alt="Sonatype Tartan" />
      </a>

      <span className="gallery-page-header__name">
        React Shared Component Library
      </span>

      <div className="gallery-page-header__version">
        <HostedVersionsSelect />
      </div>
    </div>
  </header>
);

export default PageHeader;
