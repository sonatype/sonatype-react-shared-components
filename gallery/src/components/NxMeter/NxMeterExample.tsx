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
        Fuel Level: <NxMeter value={0}>Empty!</NxMeter>
      </div>
      <div>
        Fuel Level: <NxMeter value={50}>50%</NxMeter>
      </div>
      <div>
        Fuel Level: <NxMeter value={100}>Full</NxMeter>
      </div>
      <div>
        Operable Engines: <NxMeter value={0} max={4}>0 out of 4</NxMeter>
      </div>
      <div>
        Operable Engines: <NxMeter value={3} max={4}>3 out of 4</NxMeter>
      </div>
      <div>
        Operable Engines: <NxMeter value={4} max={4}>4 out of 4</NxMeter>
      </div>
    </>
  );
}
