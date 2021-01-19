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
      <NxTag>leafspring</NxTag>
      <NxTag className="nx-tag--purple">liminal</NxTag>
      <NxTag className="nx-tag--pink">denim</NxTag>
      <NxTag className="nx-tag--blue">semiotics</NxTag>
      <NxTag className="nx-tag--grey">disposable</NxTag>
      <NxTag className="nx-tag--red">corporation</NxTag>
      <NxTag className="nx-tag--green">geodesic</NxTag>
      <NxTag className="nx-tag--orange">long-chain</NxTag>
      <NxTag className="nx-tag--yellow">hydrocarbons</NxTag>
      <NxTag className="nx-tag--lime">sub-orbital</NxTag>
      <NxTag className="nx-tag--indigo">systemic</NxTag>
    </div>
  );
}

export default NxTagExample;
