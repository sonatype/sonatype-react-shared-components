/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTreeView, NxCheckbox, NxRadio, NxTreeViewChild, useToggle } from '@sonatype/react-shared-components';

export default function NxTreeViewCheckboxExample() {
  const [is1Open, onToggle1Collapse] = useToggle(false),
      [is2Open, onToggle2Collapse] = useToggle(false);

  return (
    <>
      <NxTreeView isOpen={is1Open}
                  onToggleCollapse={onToggle1Collapse}
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
      <NxTreeView isOpen={is2Open}
                  onToggleCollapse={onToggle2Collapse}
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
