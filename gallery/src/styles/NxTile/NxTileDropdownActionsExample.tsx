/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxStatefulDropdown } from '@sonatype/react-shared-components';

export default function NxTileDropdownActionsExample() {
  const onClick = () => { alert('click'); };

  return (
    <section className="nx-tile" aria-label="Example of nx-tile with an actions dropdown">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title">
          <h2 className="nx-h2">Tile with actions dropdown</h2>
        </div>
        <div className="nx-tile__actions">
          <NxStatefulDropdown label="Actions">
            <a href="#/" className="nx-dropdown-button">
              Nav Link1
            </a>
            <a href="#/" className="nx-dropdown-button">
              Nav Link2
            </a>
            <a href="#/" className="nx-dropdown-button">
              Nav Link3
            </a>
            <button onClick={onClick} className="nx-dropdown-button">
              Button 4 - this button should trigger truncation
            </button>
          </NxStatefulDropdown>
        </div>
      </header>
      <div className="nx-tile-content">
        Vehicle motion artisanal corrupted warehouse marketing jeans physical drone neon
      </div>
    </section>
  );
}
