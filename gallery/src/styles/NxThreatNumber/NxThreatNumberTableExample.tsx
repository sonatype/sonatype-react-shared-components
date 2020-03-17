/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatBar } from '@sonatype/react-shared-components';

const NxThreatNumberTableExample = () =>
  <>
    <table className="nx-table">
      <thead>
        <tr className="nx-table-row nx-table-row--header">
          <th className="nx-cell nx-cell--header">
            Threat
          </th>
          <th className="nx-cell nx-cell--header">
            Stuff
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={0} />
            <span className="nx-threat-number">0</span>
          </td>
          <td className="nx-cell">Content 1</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={1} />
            <span className="nx-threat-number">1</span>
          </td>
          <td className="nx-cell">Content 1</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={2} />
            <span className="nx-threat-number">2</span>
          </td>
          <td className="nx-cell">Content 1</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={4} />
            <span className="nx-threat-number">4</span>
          </td>
          <td className="nx-cell">Content 1</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={8} />
            <span className="nx-threat-number">8</span>
          </td>
          <td className="nx-cell">
            Content 1 this is a multi-line example. Modem concrete nano- sub-orbital rain office. euro-pop boat voodoo
            god nodal point vinyl faded shrine dolphin realism. nano- military-grade drugs jeans -ware towards drugs
            rifle RAF Modem concrete nano- sub-orbital rain office. euro-pop boat voodoo god nodal point vinyl faded
            shrine dolphin realism. nano- military-grade drugs jeans -ware towards drugs rifle RAF.
          </td>
        </tr>
      </tbody>
    </table>
  </>;

export default NxThreatNumberTableExample;
