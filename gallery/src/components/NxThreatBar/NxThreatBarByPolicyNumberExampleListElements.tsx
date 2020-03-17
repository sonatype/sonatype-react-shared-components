/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatBar } from '@sonatype/react-shared-components';

const NxThreatLevelsByPolicyNumberListElements = () =>
  <>
    <div className="nx-list">
      <h4 className="nx-list__title">
        List Title
      </h4>
      <ul>
        <li className="nx-list__item">
          <NxThreatBar policyThreatLevel={0}/>
          <span>Threat Bar Policy Level 0</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar policyThreatLevel={1}/>
          <span>Threat Bar Policy Level 1</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar policyThreatLevel={2}/>
          <span>Threat Bar Policy Level 2-3</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar policyThreatLevel={4}/>
          <span>Threat Bar Policy Level 4-7</span>
        </li>
        <li className="nx-list__item">
          <NxThreatBar policyThreatLevel={8}/>
          <span>Threat Bar Policy Level 8-10</span>
        </li>
      </ul>
    </div>
  </>;

export default NxThreatLevelsByPolicyNumberListElements;
