/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { range } from 'ramda';

import { NxList, NxScrollRender } from '@sonatype/react-shared-components';

export default function NxScrollRenderExample() {
  return (
    <NxScrollRender initialChildCount={11}>
      <NxList className="nx-scrollable">
        { range(1, 100000).map(i =>
          <NxList.Item key={i}>
            <NxList.Text>{i}</NxList.Text>
          </NxList.Item>
        )}
      </NxList>
    </NxScrollRender>
  );
}
