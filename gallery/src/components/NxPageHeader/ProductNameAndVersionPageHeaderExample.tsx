/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxPageHeader } from '@sonatype/react-shared-components';

const ProductNameAndVersionPageHeaderExample = () =>
  <NxPageHeader productInfo={{ name: 'Test Product', version: '1.0.0' }} />;

export default ProductNameAndVersionPageHeaderExample;
