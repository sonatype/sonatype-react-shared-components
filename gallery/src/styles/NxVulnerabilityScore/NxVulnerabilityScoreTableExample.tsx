/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatNumberTableExample = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row">
        <td className="nx-cell nx-cell--header">Policy Threat Level</td>
        <td className="nx-cell nx-cell--header">Policy Name</td>
        <td className="nx-cell nx-cell--header nx-cell--num">Count</td>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row">
        <td className="nx-cell">
          <NxThreatIndicator policyThreatLevel={8} />
          <span className="nx-threat-number">8</span>
        </td>
        <td className="nx-cell">Security-High</td>
        <td className="nx-cell nx-cell--num">8</td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell">
          <NxThreatIndicator policyThreatLevel={5} />
          <span className="nx-threat-number">5</span>
        </td>
        <td className="nx-cell">License-Medium</td>
        <td className="nx-cell nx-cell--num">12</td>
      </tr>
    </tbody>
  </table>;

export default NxThreatNumberTableExample;
