/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxAccordion, NxList, useToggle } from '@sonatype/react-shared-components';

export default function NxAccordionWithNxListExample() {
  const [open, toggleOpen] = useToggle(true);

  return (
    <NxAccordion open={open} onToggle={toggleOpen}>
      <NxAccordion.Header>
        <NxAccordion.Title>Foo</NxAccordion.Title>
      </NxAccordion.Header>
      <NxList>
        <NxList.Item>
          <NxList.Text>Item 1</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Item 2</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Item 3</NxList.Text>
        </NxList.Item>
      </NxList>
    </NxAccordion>
  );
}
