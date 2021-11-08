/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode } from 'react';

import { NxList, NxOverflowTooltip } from '@sonatype/react-shared-components';

function ExampleOtherComponent({ children }: { children: ReactNode }) {
  return <span>Foo {children}</span>;
}

export default function NxOverflowTooltipExample() {
  return (
    <NxList>
      <NxList.Item>
        <NxOverflowTooltip>
          <NxList.Text className="nx-truncate-ellipsis">List item 1</NxList.Text>
        </NxOverflowTooltip>
      </NxList.Item>
      <NxList.Item>
        <NxOverflowTooltip>
          <NxList.Text className="nx-truncate-ellipsis">
            List item 2 - this text is long and should truncate with a tooltip
            this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
          </NxList.Text>
        </NxOverflowTooltip>
      </NxList.Item>
      <NxList.Item>
        <NxOverflowTooltip title="Foo Bar">
          <NxList.Text className="nx-truncate-ellipsis">
            <ExampleOtherComponent>
              Bar
            </ExampleOtherComponent>
          </NxList.Text>
        </NxOverflowTooltip>
      </NxList.Item>
      <NxList.Item>
        <NxOverflowTooltip title="Foo Bar 2 - this text is long and should truncate with a tooltip
                                  this text is long and should truncate with a tooltip
                                  this text is long and should truncate with a tooltip">
          <NxList.Text className="nx-truncate-ellipsis">
            <ExampleOtherComponent>
              Bar 2 - this text is long and should truncate with a tooltip
              this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
            </ExampleOtherComponent>
          </NxList.Text>
        </NxOverflowTooltip>
      </NxList.Item>
    </NxList>
  );
}
