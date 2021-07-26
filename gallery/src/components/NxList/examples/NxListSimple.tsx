/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxListV2 } from '@sonatype/react-shared-components';

function NxListSimple() {
  return (
    <NxListV2>
      <NxListV2.Title>List heading</NxListV2.Title>
      <NxListV2.Item>
        <NxListV2.Text>Item 1</NxListV2.Text>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Item 2</NxListV2.Text>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Item 3</NxListV2.Text>
      </NxListV2.Item>
      <NxListV2.Item>
        <NxListV2.Text>Item 4</NxListV2.Text>
        <NxListV2.Subtext>This is list sub-text</NxListV2.Subtext>
      </NxListV2.Item>
    </NxListV2>
  );
}

export default NxListSimple;
