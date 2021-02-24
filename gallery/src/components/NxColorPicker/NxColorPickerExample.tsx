/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxColorPicker, SelectableColor } from '@sonatype/react-shared-components';

export default function NxColorPickerExample() {
  const [selectedColor, setSelectedColor] = useState<SelectableColor | null>(null);

  return <NxColorPicker value={selectedColor} onChange={setSelectedColor} />;
}
