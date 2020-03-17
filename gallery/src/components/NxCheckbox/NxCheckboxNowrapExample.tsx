/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxCheckbox } from '@sonatype/react-shared-components';

function NxCheckboxNowrapExample() {
  const [isSubscribed, setIsSubscribed] = useState(false),
      onChange = () => setIsSubscribed(!isSubscribed);

  return (
    <>
      <p>Subscribed: {isSubscribed.toString()}</p>

      <div style={{width: '40px', border: '1px solid red'}}>
        Some text
        {' '}
        <NxCheckbox checkboxId="checkbox-nowrap" onChange={onChange} isChecked={isSubscribed}>
          <span style={{color: 'red'}}>Subscribe</span>
        </NxCheckbox>
        {' '}
        some other text
      </div>
    </>
  );
}

export default NxCheckboxNowrapExample;
