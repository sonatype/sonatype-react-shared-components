/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTooltip } from '@sonatype/react-shared-components';

import './NxTooltipExample.scss';

export default function NxTooltipNameExample() {
  return (
    <>
      <NxTooltip title="This is a description tooltip">
        <button>
          This is name content
        </button>
      </NxTooltip>
      {' '}
      <NxTooltip title="This is a name tooltip" isName>
      <button>
          This would be name content but it is masked by the tooltip
        </button>
      </NxTooltip>
    </>
  );
}
