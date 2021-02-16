/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxToggle } from '@sonatype/react-shared-components';

function NxToggleExample() {
  const [isWarpOn, setIsWarpOn] = useState(false),
      [isKrakenOut, setIsKrakenOut] = useState(false),
      [isShapes, setIsShapes] = useState(false),
      toggleWarp = () => setIsWarpOn(!isWarpOn),
      toggleKraken = () => setIsKrakenOut(!isKrakenOut),
      toggleShapes = () => setIsShapes(!isShapes);

  return (
    <>
      <NxToggle className="nx-toggle--no-gap" inputId="subscribe-check" onChange={toggleWarp} isChecked={isWarpOn}>
        Start Epstein Drive
      </NxToggle>
      <NxToggle className="nx-toggle--no-gap" inputId="no-label-check" onChange={toggleKraken} isChecked={isKrakenOut}>
        Release all the Krakens immediately
      </NxToggle>
      <NxToggle className="nx-toggle--no-gap" inputId="children-check" onChange={toggleShapes} isChecked={isShapes}>
        Allow shapes - like a circle, a perfectly round SVG circle, pleasing to the eye, not too big and not too
        small, just right to appear beside a checkbox and demonstrate that the label wraps
      </NxToggle>
      <p>
        {isWarpOn && 'Warp drive started'} {isKrakenOut && ' The Kraken is out!'} {isShapes && ' Shapes are allowed.'}
      </p>
    </>
  );
}

export default NxToggleExample;
