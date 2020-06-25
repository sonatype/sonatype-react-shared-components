/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxPolicyThreatSlider, PolicyThreatLevelRange } from '@sonatype/react-shared-components';

export default () => {
  const [state, setState] = useState<PolicyThreatLevelRange>([0, 10]);

  return (
    <>
      <NxPolicyThreatSlider onChange={setState} value={state} />
      <p className="nx-p">Selected range: [{state[0]}, {state[1]}]</p>
    </>
  );
};
