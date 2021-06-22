/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxThreatCounter } from '@sonatype/react-shared-components';

function NxThreatCounterExample() {
  return (
    <div className="gallery-threat-counter-grid-example">
      <span>
        <NxThreatCounter criticalCount={415}
                         severeCount={24}
                         moderateCount={12}
                         lowCount={9945}
                         noneCount={4}
                         layout="grid"/>
      </span>
      <span>
        <NxThreatCounter criticalCount={415}
                         severeCount={24}
                         moderateCount={12}
                         lowCount={9945}
                         layout="grid"/>
      </span>
      <span>
        <NxThreatCounter criticalCount={415}
                         severeCount={24}
                         moderateCount={12}
                         layout="grid"/>
      </span>
      <span>
        <NxThreatCounter criticalCount={415}
                         severeCount={24}
                         layout="grid"/>
      </span>
      <span>
        <NxThreatCounter criticalCount={415}
                         layout="grid"/>
      </span>
    </div>
  );
}

export default NxThreatCounterExample;
