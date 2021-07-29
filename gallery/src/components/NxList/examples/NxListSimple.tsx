/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxList } from '@sonatype/react-shared-components';

function NxListSimple() {
  return (
    <NxList>
      <NxList.Title>List heading</NxList.Title>
      <NxList.Item>
        <NxList.Text>Item 1</NxList.Text>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text>Item 2</NxList.Text>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text>Item 3</NxList.Text>
      </NxList.Item>
      <NxList.Item>
        <NxList.Text>Item 4</NxList.Text>
        <NxList.Subtext>This is list sub-text</NxList.Subtext>
      </NxList.Item>
    </NxList>
  );
}

export default NxListSimple;
