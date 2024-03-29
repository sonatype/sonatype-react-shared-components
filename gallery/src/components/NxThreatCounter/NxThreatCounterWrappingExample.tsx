/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxThreatCounter } from '@sonatype/react-shared-components';

function NxThreatCounterWrappingExample() {
  const containerStyle = {
    border: '1px solid black',
    width: '500px'
  };

  return (
    <div style={containerStyle}>
      <NxThreatCounter criticalCount={45}
                       severeCount={21114}
                       moderateCount={12}
                       lowCount={45}
                       noneCount={33}
                       unspecifiedCount={53}/>
    </div>
  );
}

export default NxThreatCounterWrappingExample;
