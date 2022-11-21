/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';

import {
  NxButton,
  NxCollapsibleItems,
  useToggle,
  NxIconDropdown,
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';

function NxCollapsibleItemsActionContentExample() {
  const [toggleCollapsible, onToggleCollapse] = useToggle(false);
  const [toggleCollapsible2, onToggleCollapse2] = useToggle(false);
  const [toggleCollapsible3, onToggleCollapse3] = useToggle(false);

  const [isOpen, toggleOpen] = useToggle(false);

  const iconDropdown = (
    <NxIconDropdown isOpen={isOpen}
                    onToggleCollapse={toggleOpen}
                    icon={faEllipsisV}
                    disabled={true}
                    title="Options">
      <button className="nx-dropdown-button" onClick={() => {}}>Do Something</button>
      <button className="nx-dropdown-button" onClick={() => {}}>Do Another Thing</button>
    </NxIconDropdown>
  );

  const plusButton = (
    <NxButton variant="icon-only" title="Do Something" className="disabled" onClick={() => alert('Add Something!')}>
      <NxFontAwesomeIcon icon={faPlus}/>
    </NxButton>
  );

  return (
    <div className="nx-page-sidebar">
      <NxCollapsibleItems role="menu"
                          onToggleCollapse={onToggleCollapse}
                          isOpen={toggleCollapsible}
                          triggerContent="Group 1"
                          disabled={true}
                          actionContent={iconDropdown}>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test 0</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test 2</a>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
      <NxCollapsibleItems role="menu"
                          onToggleCollapse={onToggleCollapse2}
                          isOpen={toggleCollapsible2}
                          triggerContent="Group 2"
                          disabled={true}
                          actionContent={plusButton}>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test 0</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test 2</a>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
      <NxCollapsibleItems role="menu"
                          onToggleCollapse={onToggleCollapse3}
                          isOpen={toggleCollapsible3}
                          disabled={true}
                          triggerContent="Group 3">
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test 0</a>
        </NxCollapsibleItems.Child>
        <NxCollapsibleItems.Child role="menuitem">
          <a href="#/">Test 2</a>
        </NxCollapsibleItems.Child>
      </NxCollapsibleItems>
    </div>
  );
}

export default NxCollapsibleItemsActionContentExample;
