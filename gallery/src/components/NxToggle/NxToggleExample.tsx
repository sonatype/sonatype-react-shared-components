/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxToggle } from '@sonatype/react-shared-components';

function NxToggleExample() {
  // this example uses the `useState` hook for succinctness, but you could also manage the state manually
  // in a class component
  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      [isDisabled, setIsDisabled] = useState(false),
      toggleRed = () => setIsRed(!isRed),
      toggleBlue = () => setIsBlue(!isBlue),
      toggleGreen = () => setIsGreen(!isGreen),
      toggleDisabled = () => setIsDisabled(!isDisabled);

  return (
    <fieldset className="nx-fieldset">
      <legend className="nx-legend">
        <span className="nx-legend__text">
          Selected colours: {isRed && 'Red'} {isBlue && 'Blue'} {isGreen && 'Green'}
        </span>
      </legend>
      <NxToggle toggleId="subscribe-check" onChange={toggleRed} isChecked={isRed}>
        Red
      </NxToggle>
      <NxToggle toggleId="no-label-check" onChange={toggleBlue} isChecked={isBlue}>Blue</NxToggle>
      <NxToggle toggleId="children-check" onChange={toggleGreen} isChecked={isGreen}>
        <svg width="12px" height="12px" viewBox="-1 -1 2 2">
          <circle r="1"/>
        </svg>
        {' '}
        Green - A circle, a perfectly round SVG circle, pleasing to the eye, not too big and not too small, just right
        to appear beside a checkbox and demonstrate that the label wraps
      </NxToggle>
      <NxToggle toggleId="disabled-check"
                disabled={true}
                onChange={toggleDisabled}
                isChecked={isDisabled}>
        This toggle is disabled
      </NxToggle>
    </fieldset>
  );
}

export default NxToggleExample;
