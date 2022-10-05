/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxSelectableTag, NxTooltip, useToggle } from '@sonatype/react-shared-components';

function NxSelectableTagWithCustomTooltip() {
  const [firstTagSelected, toggleFirstTag] = useToggle(false);
  const [secondTagSelected, toggleSecondTag] = useToggle(false);
  return (
    <>
      <NxTooltip title="Wrapped inside NxTooltip!">
        <NxSelectableTag selected={firstTagSelected} onSelect={toggleFirstTag}>
          Selectable Tag with tooltip!
        </NxSelectableTag>
      </NxTooltip>
      <NxTooltip title="Wrapped inside NxTooltip!">
        <NxSelectableTag selected={secondTagSelected} onSelect={toggleSecondTag}>
          This is an overflowing Selectable Tag, it goes on and on and on forever
        </NxSelectableTag>
      </NxTooltip>
    </>
  );
}

export default NxSelectableTagWithCustomTooltip;
