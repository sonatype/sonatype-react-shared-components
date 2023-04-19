/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxSmallThreatCounter } from '@sonatype/react-shared-components';

export default function NxSmallThreatCounterInfiniteMaxDigitsExample() {
  return (
    <>
      <div>
        <NxSmallThreatCounter maxDigits={Infinity}
                              criticalCount={1234567890}
                              severeCount={5}
                              moderateCount={1337}
                              lowCount={0}
                              noneCount={2353}
                              unspecifiedCount={1} />
      </div>
      <div style={{ marginTop: '16px' }}>
        <NxSmallThreatCounter maxDigits={Infinity}
                              criticalCount={2}
                              severeCount={50}
                              noneCount={23}
                              unspecifiedCount={1} />
      </div>
    </>
  );
}
