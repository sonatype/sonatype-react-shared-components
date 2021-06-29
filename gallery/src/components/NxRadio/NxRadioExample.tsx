/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxRadio, NxFieldset } from '@sonatype/react-shared-components';

export default function NxRadioExample() {
  const [color, setColor] = useState<string | null>(null);

  return (
    <>
      <NxFieldset label={`Selected Color: ${color}`}>
        <NxRadio name="color"
                 value="red"
                 onChange={setColor}
                 isChecked={color === 'red'}
                 radioId="color-red">
          Red
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'} radioId="color-green">
          <span style={{color: 'green'}}>Green</span>
          {' '}
          <em>(non-text children)</em>
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'} radioId="color-blue">
          Blue - but a very long and verbose blue that makes for a long label, so long that it should trigger ellipsis
          truncation if I have counted my characters closely enough
        </NxRadio>
      </NxFieldset>
    </>
  );
}
