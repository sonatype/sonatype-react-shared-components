/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faCube } from '@fortawesome/free-solid-svg-icons';

import {
  NxButton,
  NxCollapsibleItems,
  useToggle,
  NxIconDropdown
} from '@sonatype/react-shared-components';

function NxCollapsibleItemsRightContentExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);
  const [isOpen, toggleOpen] = useToggle(false);

  const iconDropdown = () => (
    <NxIconDropdown isOpen={isOpen}
                    onToggleCollapse={toggleOpen}
                    icon={faCube}
                    title="Options">
      <button className="nx-dropdown-button" onClick={() => {}}>Save</button>
      <button className="nx-dropdown-button" onClick={() => {}}>Delete</button>
    </NxIconDropdown>
  );

  return (
    <div className="nx-page-sidebar">
      <NxCollapsibleItems role="menu"
                          onToggleCollapse={onToggleCollapse}
                          isOpen={toggleCheck}
                          triggerContent="Organization"
                          rightContent={iconDropdown()}>
        <NxCollapsibleItems.Child role="menuitem">
          <NxButton>Test1</NxButton>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/" className="selected">Test2</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">
            Test3 - an extra long example that should cause truncation
          </a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test4</a>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
    </div>
  );
}

export default NxCollapsibleItemsRightContentExample;
