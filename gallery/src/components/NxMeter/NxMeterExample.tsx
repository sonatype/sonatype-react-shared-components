/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxMeter } from '@sonatype/react-shared-components';

export default function NxMeterExample() {
  return (
    <>
      <div>
        Example of 0% measurement:{' '}
        <NxMeter value={0} />
      </div>
      <div>
        Example of 50% measurement:{' '}
        <NxMeter value={50} />
      </div>
      <div>
        Example of 100% measurement:{' '}
        <NxMeter value={100} />
      </div>
      <div>
        Example of 0% measurement with custom max:{' '}
        <NxMeter value={0} max={5} />
      </div>
      <div>
        Example of partial measurement with custom max:{' '}
        <NxMeter value={3} max={5} />
      </div>
      <div>
        Example of 100% measurement with custom max:{' '}
        <NxMeter value={5} max={5} />
      </div>
    </>
  );
}
