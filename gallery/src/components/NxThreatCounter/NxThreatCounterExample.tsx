/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxThreatCounter } from '@sonatype/react-shared-components';
import './NxThreatCounterExample.scss';

function NxThreatCounterExample() {
  return (
    <div className="gallery-threat-counter-row-example">
      <span>
        <NxThreatCounter criticalCount={45}
                         severeCount={21114}
                         moderateCount={12}
                         lowCount={45}
                         noneCount={33}/>
      </span>
      <span>
        <NxThreatCounter criticalCount={45}
                         severeCount={21114}
                         moderateCount={12}
                         lowCount={45}/>
      </span>
      <span>
        <NxThreatCounter criticalCount={45}
                         severeCount={21114}
                         moderateCount={12}/>
      </span>
      <span>
        <NxThreatCounter criticalCount={45}
                         severeCount={21114}/>
      </span>
      <span>
        <NxThreatCounter criticalCount={45}/>
      </span>
    </div>
  );
}

export default NxThreatCounterExample;
