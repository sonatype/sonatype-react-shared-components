/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxSmallTag } from '@sonatype/react-shared-components';

function NxSmallTagExample() {
  return (
    <>
      <NxSmallTag>Default</NxSmallTag>
      <NxSmallTag color="blue">Blue</NxSmallTag>
      <NxSmallTag color="indigo">Indigo</NxSmallTag>
      <NxSmallTag color="green">Green</NxSmallTag>
      <NxSmallTag color="orange">Orange</NxSmallTag>
      <NxSmallTag color="pink">Pink</NxSmallTag>
      <NxSmallTag color="purple">Purple</NxSmallTag>
      <NxSmallTag color="red">Red</NxSmallTag>
      <NxSmallTag color="teal">Teal</NxSmallTag>
      <NxSmallTag color="turquoise">Turquoise</NxSmallTag>
    </>
  );
}

export default NxSmallTagExample;
