/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxOverflowTooltip, NxButton, NxFontAwesomeIcon, NxList } from '@sonatype/react-shared-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxOverflowTooltipExample() {
  return (
    <NxList>
      <NxOverflowTooltip>
        <NxList.Item>
          <NxList.Text className="nx-truncate-ellipsis">List item 1</NxList.Text>
        </NxList.Item>
      </NxOverflowTooltip>
      <NxOverflowTooltip>
        <NxList.Item>
          <NxList.Text className="nx-truncate-ellipsis">
            List item 2 - this text is long and should truncate with a tooltip
            this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
          </NxList.Text>
        </NxList.Item>
      </NxOverflowTooltip>
      <NxOverflowTooltip>
        <NxList.Item>
          <NxList.Text className="nx-truncate-ellipsis">
            List item 3 - this text is long and should truncate with a tooltip
            this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
          </NxList.Text>
          <NxList.Actions>
            <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          </NxList.Actions>
        </NxList.Item>
      </NxOverflowTooltip>
    </NxList>
  );
}
