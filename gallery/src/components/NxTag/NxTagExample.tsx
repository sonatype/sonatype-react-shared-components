/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTag } from '@sonatype/react-shared-components';

function NxTagExample() {
  return (
    <>
      <NxTag>Default</NxTag>
      <NxTag color="purple">Purple</NxTag>
      <NxTag color="pink">Pink</NxTag>
      <NxTag color="blue">Blue</NxTag>
      <NxTag color="red">Red</NxTag>
      <NxTag color="green">Green</NxTag>
      <NxTag color="orange">Orange</NxTag>
      <NxTag color="yellow">Yellow</NxTag>
      <NxTag color="lime">Lime</NxTag>
      <NxTag color="indigo">Indigo</NxTag>
    </>
  );
}

export default NxTagExample;
