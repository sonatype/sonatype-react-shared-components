/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxLoadError } from '@sonatype/react-shared-components';

const NxListErrorExample = () =>
  <>
    <h3 className="nx-h3">
      List with error alert
    </h3>
    <ul className="nx-list">
      <li className="nx-list__item nx-list__item--error">
        <NxLoadError error=""/>
      </li>
    </ul>
  </>;

export default NxListErrorExample;
