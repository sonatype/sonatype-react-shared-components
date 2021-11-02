/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCollapsibleItems } from '@sonatype/react-shared-components';

function NxCollapsibleItemsDisabledExample() {

  return (
    <NxCollapsibleItems isOpen={true} disabled={true} triggerContent="All Items">
      <NxCollapsibleItems.Child>Test1</NxCollapsibleItems.Child>
      <NxCollapsibleItems.Child>Test2</NxCollapsibleItems.Child>
      <NxCollapsibleItems.Child>Test3</NxCollapsibleItems.Child>
      <NxCollapsibleItems.Child>Test4</NxCollapsibleItems.Child>
    </NxCollapsibleItems>
  );
}

export default NxCollapsibleItemsDisabledExample;
