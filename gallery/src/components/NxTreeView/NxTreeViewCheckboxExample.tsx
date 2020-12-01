/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTreeView, NxCheckbox, NxRadio, NxTreeViewChild } from '@sonatype/react-shared-components';

export default function NxTreeViewCheckboxExample() {
  const [isOpen, setOpen] = useState(false),
      onToggleCollapse = () => setOpen(!isOpen);

  return (
    <>
      <NxTreeView isOpen={isOpen}
                  onToggleCollapse={onToggleCollapse}
                  triggerContent="Organization">
        <NxTreeViewChild>
          <NxCheckbox isChecked={true}>
            Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          </NxCheckbox>
        </NxTreeViewChild>
        <NxTreeViewChild>
          <NxCheckbox isChecked={true}>Bar</NxCheckbox>
        </NxTreeViewChild>
        <NxTreeViewChild>
          <NxCheckbox isChecked={true}>Baz</NxCheckbox>
        </NxTreeViewChild>
      </NxTreeView>
      <NxTreeView isOpen={isOpen}
                  onToggleCollapse={onToggleCollapse}
                  triggerContent="Organization">
        <NxTreeViewChild>
          <NxRadio name="test-radio" value="foo" isChecked={false}>Foo</NxRadio>
        </NxTreeViewChild>
        <NxTreeViewChild>
          <NxRadio name="test-radio" value="bar" isChecked={false}>Bar</NxRadio>
        </NxTreeViewChild>
        <NxTreeViewChild>
          <NxRadio name="test-radio" value="baz" isChecked={true}>Baz</NxRadio>
        </NxTreeViewChild>
      </NxTreeView>
    </>
  );
}
