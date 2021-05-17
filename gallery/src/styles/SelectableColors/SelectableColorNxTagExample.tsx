/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxColorPicker, NxSelectableTag, selectableColors, useToggle, SelectableColor }
  from '@sonatype/react-shared-components';

export default function SelectableColorNxTagExample() {
  const [color, setColor] = useState<SelectableColor>(selectableColors[0]),
      [tagSelected, toggleTag] = useToggle(false);

  return (
    <>
      <NxColorPicker label="Pick a color for the tag" value={color} onChange={setColor} />
      <NxSelectableTag onSelect={toggleTag} selected={tagSelected} color={color}>A Tag</NxSelectableTag>
    </>
  );
}
