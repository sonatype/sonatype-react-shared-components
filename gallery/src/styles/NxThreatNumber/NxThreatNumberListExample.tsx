/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatBar } from '@sonatype/react-shared-components';

const NxThreatNumberListExample = () =>
  <div className="nx-list">
    <h4 className="nx-list__title">
      List Title
    </h4>
    <ul>
      <li className="nx-list__item">
        <NxThreatBar policyThreatLevel={0}/>
        <span className="nx-threat-number">0</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar policyThreatLevel={1}/>
        <span className="nx-threat-number">1</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar policyThreatLevel={2}/>
        <span className="nx-threat-number">2</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar policyThreatLevel={4}/>
        <span className="nx-threat-number">4</span>
      </li>
      <li className="nx-list__item">
        <NxThreatBar policyThreatLevel={8}/>
        <span className="nx-threat-number">8</span>
      </li>
    </ul>
  </div>;

export default NxThreatNumberListExample;
