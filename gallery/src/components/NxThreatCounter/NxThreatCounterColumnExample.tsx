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
    <div className="gallery-threat-counter-column-example">
      <NxThreatCounter criticalCount={45}
                       severeCount={24}
                       moderateCount={1222}
                       lowCount={45}
                       noneCount={4}
                       layout="column"/>
      <NxThreatCounter criticalCount={45}
                       severeCount={24}
                       moderateCount={1222}
                       lowCount={45}
                       layout="column"/>
      <NxThreatCounter criticalCount={45}
                       severeCount={24}
                       moderateCount={1222}
                       layout="column"/>
      <NxThreatCounter criticalCount={45}
                       severeCount={24}
                       layout="column"/>
      <NxThreatCounter criticalCount={45}
                       layout="column"/>
    </div>
  );
}

export default NxThreatCounterExample;
