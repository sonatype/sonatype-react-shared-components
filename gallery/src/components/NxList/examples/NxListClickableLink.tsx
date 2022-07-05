/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxList } from '@sonatype/react-shared-components';

function NxListClickableLink() {
  return (
    <NxList>
      <NxList.LinkItem href="#/pages/List">
        <NxList.Text>NxList page</NxList.Text>
      </NxList.LinkItem>
      <NxList.LinkItem href="#/pages/Table" selected>
        <NxList.Text className="nx-truncate-ellipsis">
          NxTable page. This list item should be truncated at the
          right end edge. youtube weathered network network systemic systema claymore mine voodoo god garage
          monofilament realism order-flow corporation car footage vinyl.
        </NxList.Text>
      </NxList.LinkItem>
      <NxList.LinkItem href="#/pages/Button">
        <NxList.Text>NxButton page</NxList.Text>
      </NxList.LinkItem>
      <NxList.LinkItem href="#/pages/Alert">
        <NxList.Text>NxAlert page</NxList.Text>
      </NxList.LinkItem>
      <NxList.LinkItem href="#/pages/Accordion" disabled>
        <NxList.Text>This list item is disabled</NxList.Text>
      </NxList.LinkItem>
    </NxList>
  );
}

export default NxListClickableLink;
