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
    <div className="nx-tag-container">
      <NxTag>Leafspring</NxTag>
      <NxTag className="nx-tag--purple">Leafspring</NxTag>
      <NxTag className="nx-tag--pink">Leafspring</NxTag>
      <NxTag className="nx-tag--blue">Leafspring</NxTag>
      <NxTag className="nx-tag--grey">Leafspring</NxTag>
      <NxTag className="nx-tag--red">Leafspring</NxTag>
      <NxTag className="nx-tag--green">Leafspring</NxTag>
      <NxTag className="nx-tag--orange">Leafspring</NxTag>
      <NxTag className="nx-tag--yellow">Leafspring</NxTag>
      <NxTag className="nx-tag--lime">Leafspring</NxTag>
      <NxTag className="nx-tag--indigo">Leafspring</NxTag>
    </div>
  );
}

export default NxTagExample;
