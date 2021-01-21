/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode } from 'react';

import { NxOverflowTooltip } from '@sonatype/react-shared-components';

function ExampleOtherComponent({ children }: { children: ReactNode }) {
  return <span>Foo {children}</span>;
}

export default function NxOverflowTooltipExample() {
  return (
    <ul className="nx-list">
      <li className="nx-list__item">
        <NxOverflowTooltip>
          <span className="nx-list__text nx-truncate-ellipsis">List item 1</span>
        </NxOverflowTooltip>
      </li>
      <li className="nx-list__item">
        <NxOverflowTooltip>
          <span className="nx-list__text nx-truncate-ellipsis">
            List item 2 - this text is long and should truncate with a tooltip
            this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
          </span>
        </NxOverflowTooltip>
      </li>
      <li className="nx-list__item">
        <NxOverflowTooltip title="Foo Bar">
          <span className="nx-list__text nx-truncate-ellipsis">
            <ExampleOtherComponent>
              Bar
            </ExampleOtherComponent>
          </span>
        </NxOverflowTooltip>
      </li>
      <li className="nx-list__item">
        <NxOverflowTooltip title="Foo Bar 2 - this text is long and should truncate with a tooltip
                                  this text is long and should truncate with a tooltip
                                  this text is long and should truncate with a tooltip">
          <span className="nx-list__text nx-truncate-ellipsis">
            <ExampleOtherComponent>
              Bar 2 - this text is long and should truncate with a tooltip
              this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
            </ExampleOtherComponent>
          </span>
        </NxOverflowTooltip>
      </li>
    </ul>
  );
}
