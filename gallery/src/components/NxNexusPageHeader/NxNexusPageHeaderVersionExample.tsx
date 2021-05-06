/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faSave, faCog } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxNexusPageHeader, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxNexusPageHeaderVersionExample = () => {
  const links = [{
    name: 'NxButton',
    href: '#/pages/NxButton'
  }, {
    name: 'NxAlert',
    href: '#/pages/NxAlert',
    current: true
  }];

  function onButtonClick() {
    alert('Click');
  }

  return (
    <NxNexusPageHeader productInfo={{ name: 'Test Product', version: '1.0.0' }}
                       homeLink="#"
                       links={links}>
      <NxButton title="Save" variant="icon-only" onClick={onButtonClick}><NxFontAwesomeIcon icon={faSave}/></NxButton>
      <div className="nx-page-header__extra-content-divider"></div>
      <NxButton title="Settings" variant="icon-only" onClick={onButtonClick}>
        <NxFontAwesomeIcon icon={faCog}/>
      </NxButton>
    </NxNexusPageHeader>
  );
};

export default NxNexusPageHeaderVersionExample;
