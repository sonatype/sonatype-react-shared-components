/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { NxPageHeader, NxToggle } from '@sonatype/react-shared-components';

import packageJson from '../package.json';

function PageHeader() {
  const productInfo = {
    name: 'React Shared Component Library',
    version: packageJson.version
  };

  const [darkMode, setDarkMode] = useState(false);

  useEffect(function() {
    document.body.classList.toggle('nx-dark-theme', darkMode);
  }, [darkMode]);

  return (
    <NxPageHeader homeLink="#" productInfo={productInfo}>
      <NxToggle isChecked={darkMode} onChange={() => setDarkMode(!darkMode)}>Dark Mode</NxToggle>
    </NxPageHeader>
  );
}

export default PageHeader;
