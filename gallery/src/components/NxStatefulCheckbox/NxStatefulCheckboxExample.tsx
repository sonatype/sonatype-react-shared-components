/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulCheckbox } from '@sonatype/react-shared-components';

function NxStatefulCheckboxExample() {
  const onChange = (checkedState: boolean) => { alert(checkedState); };

  return (
    <>
      <div>
        <NxStatefulCheckbox checkboxId="subscribe-check" onChange={onChange} defaultChecked={false}>
          Check
        </NxStatefulCheckbox>
      </div>
    </>
  );
}

export default NxStatefulCheckboxExample;
