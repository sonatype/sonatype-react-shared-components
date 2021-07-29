/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxList } from '@sonatype/react-shared-components';

function NxListClickable() {
  return (
    <NxList>
      <NxList.Button>
        <NxList.Text>Action 1</NxList.Text>
      </NxList.Button>
      <NxList.Button>
        <NxList.Text truncate>This list item should be truncated at the right end edge. youtube weathered
          network network systemic systema claymore mine voodoo
        </NxList.Text>
      </NxList.Button>
      <NxList.Button>
        <NxList.Text>Action 3</NxList.Text>
      </NxList.Button>
      <NxList.Button selected>
        <NxList.Text>Action 4</NxList.Text>
        <NxList.Subtext>This list item demonstrates the selected styles</NxList.Subtext>
      </NxList.Button>
      <NxList.Button disabled>
        <NxList.Text>This list item is disabled</NxList.Text>
      </NxList.Button>
    </NxList>
  );
}

export default NxListClickable;
