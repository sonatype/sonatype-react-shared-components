/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxPagination } from '@sonatype/react-shared-components';

const NxAlertErrorExample = () =>
  <div className="nx-footer">
    <NxPagination pageCount={7} currentPage={4} />
  </div>;

export default NxAlertErrorExample;
