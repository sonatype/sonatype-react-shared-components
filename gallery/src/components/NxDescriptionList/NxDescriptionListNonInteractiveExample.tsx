/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxDescriptionList} from '@sonatype/react-shared-components';

const NxDescriptionListNonInteractiveExample = () =>
  <NxDescriptionList>
    <NxDescriptionList.Item>
      <NxDescriptionList.Term>Item 1</NxDescriptionList.Term>
      <NxDescriptionList.Description>
        A very interesting item. The first item. You might say it's the original. The item to begin
        all items. But not to end them; definitely not. Rest assured there will be more items after this one
        and they will definitely also have descriptions.
      </NxDescriptionList.Description>
    </NxDescriptionList.Item>
    <NxDescriptionList.Item>
      <NxDescriptionList.Term>Item 2</NxDescriptionList.Term>
      <NxDescriptionList.Description>
        The second item.
      </NxDescriptionList.Description>
    </NxDescriptionList.Item>
    <NxDescriptionList.Item>
      <NxDescriptionList.Term>Item 3</NxDescriptionList.Term>
      <NxDescriptionList.Description>
        The third item. Not interesting at all, unlike the first item.
      </NxDescriptionList.Description>
    </NxDescriptionList.Item>
    <NxDescriptionList.Item>
      <NxDescriptionList.Term>Item 9000000000000000000000000000000001</NxDescriptionList.Term>
      <NxDescriptionList.Description>It's over 9000!</NxDescriptionList.Description>
    </NxDescriptionList.Item>
  </NxDescriptionList>;

export default NxDescriptionListNonInteractiveExample;
