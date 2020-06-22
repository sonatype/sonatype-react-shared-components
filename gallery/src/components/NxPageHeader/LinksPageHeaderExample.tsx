/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxPageHeader } from '@sonatype/react-shared-components';

const LinksPageHeaderExample = () => {
  const links = [{
    name: 'NxButton',
    href: '#/pages/NxButton'
  }, {
    name: 'NxTextInput',
    href: '#/pages/NxTextInput'
  }, {
    name: 'NxPageHeader',
    href: '#/pages/NxPageHeader',
    current: true
  }];

  return <NxPageHeader links={links} />;
}

export default LinksPageHeaderExample;
