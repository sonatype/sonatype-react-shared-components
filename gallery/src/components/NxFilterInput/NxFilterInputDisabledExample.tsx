/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxFilterInput } from '@sonatype/react-shared-components';

const NxFilterInputDisabledExample = () => {
  const [value, changeValue] = useState('');

  return (
    <NxFilterInput disabled
                   placeholder="Enter a filter value"
                   onChange={changeValue}
                   value={value}/>
  );
};

export default NxFilterInputDisabledExample;
