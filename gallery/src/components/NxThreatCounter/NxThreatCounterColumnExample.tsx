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
    <NxThreatCounter criticalCount={45}
                     severeCount={24}
                     moderateCount={1222}
                     lowCount={45}
                     noneCount={4}
                     unspecifiedCount={18}
                     layout="column"/>
  );
}

export default NxThreatCounterExample;
