/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { NxButton, NxNexusPageHeader, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const linkToLogo = require('../../resources/logos/logo_nexus_sonatype_teal.svg');

const NxNexusPageHeaderExample = () => {
  const links = [{
    name: 'NxButton',
    href: '#/pages/NxButton',
    current: true
  }, {
    name: 'NxAlert',
    href: '#/pages/NxAlert',
  }, {
    name: 'NxModal',
    href: '#/pages/NxModal',
  }];

  function onButtonClick() {
    alert('Click');
  }

  return (
    <NxNexusPageHeader productInfo={{ name: 'Test Product', meta: 'Fancy code name', version: '1.0.0' }}
                       homeLink="#"
                       links={links}
                       logoPath={linkToLogo}>
      <div className="nx-page-header__extra-content-divider"></div>
      <NxButton variant="icon-only" onClick={onButtonClick}><NxFontAwesomeIcon icon={faCog}/></NxButton>
    </NxNexusPageHeader>
  );
};

export default NxNexusPageHeaderExample;
