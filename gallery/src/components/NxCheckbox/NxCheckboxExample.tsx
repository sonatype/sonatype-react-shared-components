/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxCheckbox } from '@sonatype/react-shared-components';

function NxCheckboxExample() {
  // this example uses the `useState` hook for succinctness, but you could also manage the state manually
  // in a class component
  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      [isDisabled, setIsDisabled] = useState(false),
      onChange1 = () => setIsRed(!isRed),
      onChange2 = () => setIsBlue(!isBlue),
      onChange3 = () => setIsGreen(!isGreen),
      onChange4 = () => setIsDisabled(!isDisabled);

  return (
    <fieldset className="nx-fieldset">
      <legend className="nx-label">
        Selected colours: {isRed && 'Red'} {isBlue && 'Blue'} {isGreen && 'Green'}
      </legend>
      <NxCheckbox checkboxId="subscribe-check" onChange={onChange1} isChecked={isRed}>
        Red
      </NxCheckbox>
      <NxCheckbox checkboxId="no-label-check" onChange={onChange2} isChecked={isBlue}>Blue</NxCheckbox>
      <NxCheckbox checkboxId="children-check" onChange={onChange3} isChecked={isGreen}>
        <svg width="12px" height="12px" viewBox="-1 -1 2 2">
          <circle r="1"/>
        </svg>
        {' '}
        Green - A circle, a perfectly round SVG circle, pleasing to the eye, not too big and not too small, just right
        to appear beside a checkbox and demonstrate ellipsis truncation
      </NxCheckbox>
      <NxCheckbox checkboxId="disabled-check" disabled={true} onChange={onChange4} isChecked={isDisabled}>
        disabled
      </NxCheckbox>
    </fieldset>
  );
}

export default NxCheckboxExample;
