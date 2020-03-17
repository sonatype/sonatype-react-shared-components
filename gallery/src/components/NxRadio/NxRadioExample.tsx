/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxRadio } from '@sonatype/react-shared-components';

export default function NxRadioExample() {
  const [color, setColor] = useState<string | null>('purple');

  /**
   * TS+React freak out when they see a possible `null` being used in
   * a `style` tag – so we give it a default.
   */
  const appliedColor = color || 'black';

  return (
    <>
      <p style={{color: appliedColor}}>Selected Color: {color}</p>
      <div>
        <NxRadio name="color" value="red" onChange={setColor} isChecked={color === 'red'} radioId="color-red">
          Red
        </NxRadio>
      </div>
      <div>
        <NxRadio name="color"
                 value="purple"
                 onChange={setColor}
                 isChecked={color === 'purple'}
                 disabled={true}
                 radioId="color-purple">
          Purple (disabled)
        </NxRadio>
      </div>

      <div>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'} radioId="color-green">
          <span style={{color: 'green'}}>Green</span>
          {' '}
          <em>(non-text children)</em>
        </NxRadio>
      </div>

      <div>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'} radioId="color-blue"/>
        No label
      </div>
    </>
  );
}
