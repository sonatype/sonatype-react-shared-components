/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTreeView, NxCheckbox, NxRadio } from '@sonatype/react-shared-components';

export default function NxTreeViewCheckboxExample() {
  return (
    <>
      <NxTreeView id="example-nx-tree-view"
                  isOpen={true}
                  triggerContent="Organization">
        <NxCheckbox className="nx-tree-view__child" isChecked={true}>
          Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
        </NxCheckbox>
        <NxCheckbox className="nx-tree-view__child" isChecked={true}>Bar</NxCheckbox>
        <NxCheckbox className="nx-tree-view__child" isChecked={true}>Baz</NxCheckbox>
      </NxTreeView>
      <NxTreeView id="example-nx-tree-view"
                  isOpen={true}
                  triggerContent="Organization">
        <NxRadio className="nx-tree-view__child" name="test-radio" value="foo" isChecked={false}>Foo</NxRadio>
        <NxRadio className="nx-tree-view__child" name="test-radio" value="bar" isChecked={false}>Bar</NxRadio>
        <NxRadio className="nx-tree-view__child" name="test-radio" value="baz" isChecked={true}>Baz</NxRadio>
      </NxTreeView>
    </>
  );
}
