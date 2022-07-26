/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxCheckbox, NxFieldset, NxRadio, useToggle } from '@sonatype/react-shared-components';

const requiredMessage = 'At least one color must be selected';

export default function NxFieldsetRequiredExample() {
  const [color, _setColor] = useState<string | null>(null),
      [isColorPristine, setIsColorPristine] = useState(true),
      setColor = (value: string | null) => {
        _setColor(value);
        setIsColorPristine(false);
      };

  const [north, toggleNorth] = useToggle(false),
      [south, toggleSouth] = useToggle(false),
      [east, toggleEast] = useToggle(false),
      [west, toggleWest] = useToggle(false),
      anyDirectionSelected = north || south || east || west,
      [isDirectionPristine, setIsDirectionPristine] = useState(true),
      toggleDirection = (toggler: () => void) => () => {
        toggler();
        setIsDirectionPristine(false);
      };

  return (
    <>
      <NxFieldset label="Color"
                  isRequired
                  isPristine={isColorPristine}
                  validationErrors={color ? null : requiredMessage}>
        <NxRadio value="red" isChecked={color === 'red'} name="color" onChange={setColor}>Red</NxRadio>
        <NxRadio value="green" isChecked={color === 'green'} name="color" onChange={setColor}>Green</NxRadio>
        <NxRadio value="blue" isChecked={color === 'blue'} name="color" onChange={setColor}>Blue</NxRadio>
        <NxRadio value="purple" isChecked={color === 'purple'} name="color" onChange={setColor}>Purple</NxRadio>
      </NxFieldset>
      <NxFieldset label="Direction"
                  isRequired
                  isPristine={isDirectionPristine}
                  validationErrors={anyDirectionSelected ? null : requiredMessage}>
        <NxCheckbox isChecked={north} onChange={toggleDirection(toggleNorth)}>
          North
        </NxCheckbox>
        <NxCheckbox isChecked={south} onChange={toggleDirection(toggleSouth)}>
          South
        </NxCheckbox>
        <NxCheckbox isChecked={east} onChange={toggleDirection(toggleEast)}>
          East
        </NxCheckbox>
        <NxCheckbox isChecked={west} onChange={toggleDirection(toggleWest)}>
          West
        </NxCheckbox>
      </NxFieldset>
    </>
  );
}
