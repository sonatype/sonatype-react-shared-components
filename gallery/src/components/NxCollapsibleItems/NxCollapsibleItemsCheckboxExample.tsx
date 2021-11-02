/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxCheckbox,
  NxCollapsibleItems,
  NxRadio,
  useToggle
} from '@sonatype/react-shared-components';

export default function NxCollapsibleItemsCheckboxExample() {
  const [is1Open, onToggle1Collapse] = useToggle(false),
      [is2Open, onToggle2Collapse] = useToggle(false);

  return (
    <>
      <NxCollapsibleItems isOpen={is1Open}
                          onToggleCollapse={onToggle1Collapse}
                          triggerContent="Organization">
        <NxCollapsibleItems.Child>
          <NxCheckbox isChecked={true}>
            Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo Foo
          </NxCheckbox>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <NxCheckbox isChecked={true}>Bar</NxCheckbox>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <NxCheckbox isChecked={true}>Baz</NxCheckbox>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
      <NxCollapsibleItems isOpen={is2Open}
                          onToggleCollapse={onToggle2Collapse}
                          triggerContent="Organization">
        <NxCollapsibleItems.Child>
          <NxRadio name="test-radio" value="foo" isChecked={false}>Foo</NxRadio>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <NxRadio name="test-radio" value="bar" isChecked={false}>Bar</NxRadio>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child>
          <NxRadio name="test-radio" value="baz" isChecked={true}>Baz</NxRadio>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
    </>
  );
}
