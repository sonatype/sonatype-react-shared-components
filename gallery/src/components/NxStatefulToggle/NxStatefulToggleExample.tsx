/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulToggle } from '@sonatype/react-shared-components';

function NxStatefulToggleExample() {
  const onChange = (checkedState: boolean) => { alert(checkedState); };

  return (
    <>
      <div>
        <NxStatefulToggle ToggleId="subscribe-check" onChange={onChange} defaultChecked={false}>
          Check
        </NxStatefulToggle>
      </div>
    </>
  );
}

export default NxStatefulToggleExample;
