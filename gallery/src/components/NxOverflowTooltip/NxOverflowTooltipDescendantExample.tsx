/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxOverflowTooltip, NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxOverflowTooltipExample() {
  return (
    <ul className="nx-list">
      <NxOverflowTooltip>
        <li className="nx-list__item">
          <span className="nx-list__text nx-truncate-ellipsis">List item 1</span>
        </li>
      </NxOverflowTooltip>
      <NxOverflowTooltip>
        <li className="nx-list__item">
          <span className="nx-list__text nx-truncate-ellipsis">
            List item 2 - this text is long and should truncate with a tooltip
            this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
          </span>
        </li>
      </NxOverflowTooltip>
      <NxOverflowTooltip>
        <li className="nx-list__item">
          <span className="nx-list__text nx-truncate-ellipsis">
            List item 3 - this text is long and should truncate with a tooltip
            this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip
          </span>
          <div className="nx-list__actions">
            <NxButton variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
          </div>
        </li>
      </NxOverflowTooltip>
    </ul>
  );
}
