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
  const [isWarpOn, setIsWarpOn] = useState(false),
      [isKrakenOut, setIsKrakenOut] = useState(false),
      [isShapes, setIsShapes] = useState(false),
      [isDisabled, setIsDisabled] = useState(false),
      toggleWarp = () => setIsWarpOn(!isWarpOn),
      toggleKraken = () => setIsKrakenOut(!isKrakenOut),
      toggleShapes = () => setIsShapes(!isShapes),
      toggleDisabled = () => setIsDisabled(!isDisabled);

  return (
    <>
      <h3 className="nx-h3">
        Here's what you can do:
      </h3>
      <div>
        <NxToggle inputId="subscribe-check" onChange={toggleWarp} isChecked={isWarpOn}>
          Enable Warp Drive
        </NxToggle>
        <NxToggle inputId="no-label-check" onChange={toggleKraken} isChecked={isKrakenOut}>
          Release the Kraken!
        </NxToggle>
        <NxToggle inputId="children-check" onChange={toggleShapes} isChecked={isShapes}>
          <svg width="12px" height="12px" viewBox="-1 -1 2 2">
            <circle r="1"/>
          </svg>
          {' '}
          Allow shapes - like a circle, a perfectly round SVG circle, pleasing to the eye, not too big and not too
          small, just right to appear beside a checkbox and demonstrate that the label wraps
        </NxToggle>
        <NxToggle inputId="disabled-check"
                  disabled={true}
                  onChange={toggleDisabled}
                  isChecked={isDisabled}>
          This toggle is disabled
        </NxToggle>
      </div>
      <p>
        {isWarpOn && 'Warp drive started'} {isKrakenOut && ' The Kraken is out!'} {isShapes && ' Shapes are allowed'}
      </p>
    </>
  );
}

export default NxToggleExample;
