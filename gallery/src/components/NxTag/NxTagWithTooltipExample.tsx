/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTag, NxTooltip } from '@sonatype/react-shared-components';

function NxTagWithCustomTooltip() {
  return (
    <>
      <NxTooltip title="Wrapped inside NxTooltip!">
        <NxTag>Tag with tooltip!</NxTag>
      </NxTooltip>
      <NxTooltip title="Wrapped inside NxTooltip!">
        <NxTag>This is an overflowing tag, it goes on and on and on forever</NxTag>
      </NxTooltip>
    </>
  );
}

export default NxTagWithCustomTooltip;
