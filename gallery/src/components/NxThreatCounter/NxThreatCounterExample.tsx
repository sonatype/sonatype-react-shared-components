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
      <NxThreatCounter criticalCount={45}
                       severeCount={21114}
                       moderateCount={12}
                       lowCount={45}
                       noneCount={33}/>
      <NxThreatCounter criticalCount={45}
                       severeCount={21114}
                       moderateCount={12}
                       lowCount={45}/>
      <NxThreatCounter criticalCount={45}
                       severeCount={21114}
                       moderateCount={12}/>
      <NxThreatCounter criticalCount={45}
                       severeCount={21114}/>
      <NxThreatCounter criticalCount={45}/>
    </div>
  );
}

export default NxThreatCounterExample;
