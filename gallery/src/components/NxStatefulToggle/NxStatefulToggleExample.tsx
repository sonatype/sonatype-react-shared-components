/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulToggle } from '@sonatype/react-shared-components';

function NxStatefulToggleExample() {
  const onChange1 = (checkedState: boolean) => { alert(checkedState); },
      onChange2 = (checkedState: boolean) => { alert(checkedState); };

  return (
    <>
      <NxStatefulToggle inputId="enable-whale" onChange={onChange1} defaultChecked={false}>
        Enables whales
      </NxStatefulToggle>
      <NxStatefulToggle inputId="enable-kraken" onChange={onChange2} defaultChecked={true}>
        Enable krakens
      </NxStatefulToggle>
    </>
  );
}

export default NxStatefulToggleExample;
