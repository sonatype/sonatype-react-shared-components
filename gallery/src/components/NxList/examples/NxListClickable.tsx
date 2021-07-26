/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxListV2 } from '@sonatype/react-shared-components';

function NxListClickable() {
  return (
    <NxListV2>
      <NxListV2.Button>
        <NxListV2.Text>Action 1</NxListV2.Text>
      </NxListV2.Button>
      <NxListV2.Button>
        <NxListV2.Text truncate>This list item should be truncated at the right end edge. youtube weathered
          network network systemic systema claymore mine voodoo
        </NxListV2.Text>
      </NxListV2.Button>
      <NxListV2.Button>
        <NxListV2.Text>Action 3</NxListV2.Text>
      </NxListV2.Button>
      <NxListV2.Button selected>
        <NxListV2.Text>Action 4</NxListV2.Text>
        <NxListV2.Subtext>This list item demonstrates the selected styles</NxListV2.Subtext>
      </NxListV2.Button>
      <NxListV2.Button disabled>
        <NxListV2.Text>This list item is disabled</NxListV2.Text>
      </NxListV2.Button>
    </NxListV2>
  );
}

export default NxListClickable;
