/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxTreeView, NxCheckbox, NxRadio } from '@sonatype/react-shared-components';

export default function NxTreeViewCheckboxExample() {
  const [isOpen, setOpen] = useState(false),
      onToggleCollapse = () => setOpen(!isOpen);

  return (
    <>
      <NxTreeView isOpen={isOpen}
                  onToggleCollapse={onToggleCollapse}
                  triggerContent="Organization">
        <NxCheckbox isChecked={true}>
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
        </NxCheckbox>
        <NxCheckbox isChecked={true}>Bar</NxCheckbox>
        <NxCheckbox isChecked={true}>Baz</NxCheckbox>
      </NxTreeView>
      <NxTreeView isOpen={isOpen}
                  onToggleCollapse={onToggleCollapse}
                  triggerContent="Organization">
        <NxRadio name="test-radio" value="foo" isChecked={false}>Foo</NxRadio>
        <NxRadio name="test-radio" value="bar" isChecked={false}>Bar</NxRadio>
        <NxRadio name="test-radio" value="baz" isChecked={true}>Baz</NxRadio>
      </NxTreeView>
    </>
  );
}
