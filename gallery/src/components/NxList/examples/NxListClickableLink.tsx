/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxListV2 } from '@sonatype/react-shared-components';

function NxListClickableLink() {
  return (
    <NxListV2>
      <NxListV2.Link href="#/pages/NxList">
        <NxListV2.Text>NxList page</NxListV2.Text>
      </NxListV2.Link>
      <NxListV2.Link href="#/pages/NxTable" selected>
        <NxListV2.Text truncate>NxTable page. This list item should be truncated at the right end edge.
          youtube weathered network network systemic systema claymore mine voodoo god garage monofilament
          realism order-flow corporation car footage vinyl.
        </NxListV2.Text>
      </NxListV2.Link>
      <NxListV2.Link href="#/pages/NxButton">
        <NxListV2.Text>NxButton page</NxListV2.Text>
      </NxListV2.Link>
      <NxListV2.Link href="#/pages/NxAlert">
        <NxListV2.Text>NxAlert page</NxListV2.Text>
      </NxListV2.Link>
      <NxListV2.Link href="#/pages/NxAccordion" disabled>
        <NxListV2.Text>This list item is disabled</NxListV2.Text>
      </NxListV2.Link>
    </NxListV2>
  );
}

export default NxListClickableLink;
