/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxP } from '@sonatype/react-shared-components';

export default function NxTextLinkButtonExample() {
  return (
    <>
      <NxP>
        <button className="nx-text-link" onClick={() => alert('Clicked')}>Click Me</button>
      </NxP>
      <NxP>
        <button className="nx-text-link" disabled>Click Me Disabled by Attribute</button>
      </NxP>
      <NxP>
        <button className="nx-text-link disabled" aria-disabled="true">Click Me Disabled by Class</button>
      </NxP>
    </>
  );
}
