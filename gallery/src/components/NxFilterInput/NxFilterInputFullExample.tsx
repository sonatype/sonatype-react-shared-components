/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxFilterInput } from '@sonatype/react-shared-components';

const NxFilterInputFullExample = () => {
  const [value, changeValue] = useState('');

  return (
    <NxFilterInput placeholder="Enter a filter value"
                   inputId="input-id"
                   onChange={changeValue}
                   value={value}/>
  );
};

export default NxFilterInputFullExample;
