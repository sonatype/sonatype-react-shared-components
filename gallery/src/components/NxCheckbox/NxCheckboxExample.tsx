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
  const [isSubscribed, setIsSubscribed] = useState(false),
      onChange = () => setIsSubscribed(!isSubscribed);

  return (
    <>
      <p>Subscribed: {isSubscribed.toString()}</p>
      <div>
        <NxCheckbox checkboxId="subscribe-check" onChange={onChange} isChecked={isSubscribed}>
          Subscribe
        </NxCheckbox>
      </div>
      <div>
        <NxCheckbox checkboxId="disabled-check" disabled={true} onChange={onChange} isChecked={isSubscribed}>
          disabled
        </NxCheckbox>
      </div>

      <div>
        <NxCheckbox checkboxId="no-label-check" onChange={onChange} isChecked={isSubscribed}/>No label
      </div>

      Non-text children:
      <div>
        <NxCheckbox checkboxId="children-check" onChange={onChange} isChecked={isSubscribed}>
          <svg width="12px" height="12px" viewBox="-1 -1 2 2">
            <circle r="1"/>
          </svg>
          {' '}
          - A circle
        </NxCheckbox>
      </div>
    </>
  );
}

export default NxCheckboxExample;
