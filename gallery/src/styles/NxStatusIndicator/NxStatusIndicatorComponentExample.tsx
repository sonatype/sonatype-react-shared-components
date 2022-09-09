/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxErrorStatusIndicator,
  NxIntermediateStatusIndicator,
  NxNegativeStatusIndicator,
  NxP,
  NxPositiveStatusIndicator
} from '@sonatype/react-shared-components';

export default function NxStatusIndicatorComponentExample() {
  return (
    <>
      <NxP>
        A bunch of text which might wrap but probably won't, so we're going to <br/>
        go ahead and stick a break tag in here.
        <NxNegativeStatusIndicator>Inactive</NxNegativeStatusIndicator>
        And more text which <br/>
        also wraps under the indicator so we can see one with text above and below.
      </NxP>
      <NxP>
        <NxPositiveStatusIndicator>Active</NxPositiveStatusIndicator>
      </NxP>
      <NxP>
        <NxIntermediateStatusIndicator>Starting</NxIntermediateStatusIndicator>
      </NxP>
      <NxP>
        <NxErrorStatusIndicator>Failed</NxErrorStatusIndicator>
      </NxP>
    </>
  );
}
