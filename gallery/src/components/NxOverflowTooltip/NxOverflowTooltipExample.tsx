/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, ReactNode } from 'react';

import { NxDropdown, NxOverflowTooltip } from '@sonatype/react-shared-components';

function ExampleOtherComponent({ children }: { children: ReactNode }) {
  return <span>Foo {children}</span>;
}

export default function NxOverflowTooltipExample() {
  const [isOpen, toggleOpen] = useState(false),
      onToggleCollapse = () => { toggleOpen(!isOpen); };

  return (
    <NxDropdown label="Navigation" { ...{ isOpen, onToggleCollapse } }>
      <NxOverflowTooltip>
        <a href="#/pages/NxDropdown" className="nx-dropdown-button">
          Text link 1
        </a>
      </NxOverflowTooltip>
      <NxOverflowTooltip>
        <a href="#/pages/NxDropdown" className="nx-dropdown-button">
          Text link 2 - this text is long and should truncate with a tooltip
        </a>
      </NxOverflowTooltip>
      <NxOverflowTooltip title="Foo Button">
        <button className="nx-dropdown-button">
          <ExampleOtherComponent>
            Button
          </ExampleOtherComponent>
        </button>
      </NxOverflowTooltip>
      <NxOverflowTooltip>
        <button className="nx-dropdown-button">
          Button 2 - this text is long and <em>should</em> truncate with a tooltip
        </button>
      </NxOverflowTooltip>
      <NxOverflowTooltip title="Foo Button 3 - this text is long and should truncate with a tooltip">
        <button className="nx-dropdown-button">
          <ExampleOtherComponent>
            Button 3 - this text is long and should truncate with a tooltip
          </ExampleOtherComponent>
        </button>
      </NxOverflowTooltip>
    </NxDropdown>
  );
}
