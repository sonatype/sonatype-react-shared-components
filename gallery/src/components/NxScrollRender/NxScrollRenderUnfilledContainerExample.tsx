/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { range } from 'ramda';

import { NxList, NxScrollRender } from '@sonatype/react-shared-components';

export default function NxScrollRenderUnfilledContainerExample() {
  return (
    <NxScrollRender spacerEl="li">
      <NxList className="nx-scrollable">
        { range(1, 5).map(i =>
          <NxList.Item key={i}>
            <NxList.Text>{i}</NxList.Text>
          </NxList.Item>
        )}
      </NxList>
    </NxScrollRender>
  );
}
