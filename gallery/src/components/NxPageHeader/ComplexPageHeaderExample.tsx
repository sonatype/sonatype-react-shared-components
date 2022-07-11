/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton, NxPageHeader } from '@sonatype/react-shared-components';

const ComplexPageHeaderExample = () => {
  const links = [{
    name: 'NxButton',
    href: '#/pages/NxButton'
  }, {
    name: 'NxPageHeader',
    href: '#/pages/NxPageHeader',
    current: true
  }];

  function onButtonClick() {
    alert('Click');
  }

  return (
    <NxPageHeader productInfo={{ name: 'Test Product', version: '1.0.0' }}
                  homeLink="#"
                  links={links}>
      <NxButton onClick={onButtonClick}>Click Me</NxButton>
    </NxPageHeader>
  );
};

export default ComplexPageHeaderExample;
