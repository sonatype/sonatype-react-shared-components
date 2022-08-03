/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxDropdown, NxDrawer, NxButton, useToggle } from '@sonatype/react-shared-components';

export default function NxDrawerEscExample() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [isOpen, onToggleCollapse] = useToggle(false);
  const onClick = () => { alert('click'); };

  const cancelHandler = () => setShowDrawer(false);

  return (
    <>
      <NxButton id="nx-drawer-esc-open-button" onClick={() => setShowDrawer(true)}>Open Drawer</NxButton>
      {showDrawer && (
        <NxDrawer id="nx-drawer-esc"
                  onCancel={cancelHandler}
                  headerTitle="An Example of NxDrawer with NxDropdown Nested Inside."
                  aria-labelledby="nx-drawer-esc">
          <NxDrawer.Content>
            <NxDropdown label="Expand" isOpen={isOpen} onToggleCollapse={onToggleCollapse}>
              <button onClick={onClick} className="nx-dropdown-button">
                Hello
              </button>
            </NxDropdown>
          </NxDrawer.Content>
        </NxDrawer>
      )}
    </>
  );
}
