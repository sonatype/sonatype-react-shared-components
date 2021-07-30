/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxH3, NxList } from '@sonatype/react-shared-components';

function NxListDescription() {
  return (
    <NxList>
      <NxH3>List heading</NxH3>
      <NxList.Item>
        <NxList.DescriptionTerm>Item 1</NxList.DescriptionTerm>
        <NxList.Description>
          A very interesting item. The first item. You might say it's the original. The item to begin
          all items. But not to end them; definitely not. Rest assured there will be more items after this one
          and they will definitely also have descriptions.
        </NxList.Description>
      </NxList.Item>
      <NxList.Item>
        <NxList.DescriptionTerm>Item 2</NxList.DescriptionTerm>
        <NxList.Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </NxList.Description>
      </NxList.Item>
      <NxList.Item>
        <NxList.DescriptionTerm>Item 3</NxList.DescriptionTerm>
        <NxList.Description>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s.
        </NxList.Description>
      </NxList.Item>
    </NxList>
  );
}

export default NxListDescription;
