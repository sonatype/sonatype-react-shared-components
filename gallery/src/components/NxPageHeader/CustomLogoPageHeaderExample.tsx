/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxPageHeader } from '@sonatype/react-shared-components';

const customLogo = require('../../assets/images/custom-logo.png');
const customDarkLogo = require('../../assets/images/custom-logo-dark-mode.png');

const SimplePageHeaderExample = () =>
  <NxPageHeader logo={{ path: customLogo, alt: 'Custom Logo', darkModePath: customDarkLogo }} />;

export default SimplePageHeaderExample;
