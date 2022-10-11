/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxButton, NxColorPicker, nxFieldsetStateHelpers, SelectableColor } from '@sonatype/react-shared-components';
const { useRadioGroupState } = nxFieldsetStateHelpers;

const requiredMessage = 'A color is required';

export default function NxColorPickerRequiredExample() {
  const [colorState, setColor] = useRadioGroupState<SelectableColor>(undefined, v => v ? null : requiredMessage);

  return (
    <div>
      <NxColorPicker isRequired label="Pick a color" { ...colorState } onChange={setColor} />
      <NxButton onClick={() => setColor(null)}>Clear</NxButton>
    </div>
  );
}
