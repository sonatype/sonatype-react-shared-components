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
    <div>
      <NxTag>Default</NxTag>
      <NxTag tagColor="purple">Purple</NxTag>
      <NxTag tagColor="pink">Pink</NxTag>
      <NxTag tagColor="blue">Blue</NxTag>
      <NxTag tagColor="red">Red</NxTag>
      <NxTag tagColor="green">Green</NxTag>
      <NxTag tagColor="orange">Orange</NxTag>
      <NxTag tagColor="yellow">Yellow</NxTag>
      <NxTag tagColor="lime">Lime</NxTag>
      <NxTag tagColor="indigo">Indigo</NxTag>
    </div>
  );
}

export default NxTagExample;
