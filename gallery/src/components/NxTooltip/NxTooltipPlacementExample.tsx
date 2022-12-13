/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton, NxTooltip } from '@sonatype/react-shared-components';

const NxTooltipPlacementExample = () => {
  return (
    <div>
      <div>
        <NxTooltip title="Top!" placement="top" open={true}>
          <NxButton>Top</NxButton>
        </NxTooltip>
        <NxTooltip title="Bottom!" placement="bottom" open={true}>
          <NxButton>Bottom</NxButton>
        </NxTooltip>
        <NxTooltip title="Top-Middle!" placement="top-middle" open={true}>
          <NxButton>Top-Middle</NxButton>
        </NxTooltip>
        <NxTooltip title="Bottom-Middle!" placement="bottom-middle" open={true}>
          <NxButton>Bottom-Middle</NxButton>
        </NxTooltip>
        <NxTooltip title="Top-End!" placement="top-end" open={true}>
          <NxButton>Top-End</NxButton>
        </NxTooltip>
        <NxTooltip title="Bottom-End!" placement="bottom-end" open={true}>
          <NxButton>Bottom-End</NxButton>
        </NxTooltip>
      </div>
      <div style={{ marginTop: '64px' }}>
        <NxTooltip title="Left!" placement="left" open={true}>
          <NxButton>Left</NxButton>
        </NxTooltip>
        <NxTooltip title="Right!" placement="right" open={true}>
          <NxButton>Right</NxButton>
        </NxTooltip>
      </div>
    </div>
  );
};

export default NxTooltipPlacementExample;
