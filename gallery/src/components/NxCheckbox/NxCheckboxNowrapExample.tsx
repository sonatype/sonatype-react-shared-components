/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCheckbox, useToggle } from '@sonatype/react-shared-components';

function NxCheckboxNowrapExample() {
  const [isSubscribed, onChange] = useToggle(false);

  return (
    <>
      <p className="nx-p">Subscribed: {isSubscribed.toString()}</p>

      <div style={{width: '70px', border: '1px solid red'}}>
        Some text
        {' '}
        <NxCheckbox checkboxId="checkbox-nowrap" onChange={onChange} isChecked={isSubscribed}>
          Subscribe
        </NxCheckbox>
        {' '}
        some other text
      </div>
    </>
  );
}

export default NxCheckboxNowrapExample;
