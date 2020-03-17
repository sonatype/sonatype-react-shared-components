/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatBar } from '@sonatype/react-shared-components';

const NxThreatLevelsByPolicyNumberTableElements = () =>
  <>
    <table className="nx-table">
      <thead>
        <tr className="nx-table-row nx-table-row--header">
          <th className="nx-cell nx-cell--header">
            Header
          </th>
          <th className="nx-cell nx-cell--header">
            Header
          </th>
          <th className="nx-cell nx-cell--header">
            Header
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={0} />
            <span>Threat Bar Policy Level 0</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={1} />
            <span>Threat Bar Policy Level 1</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={2} />
            <span>Threat Bar Policy Level 2-3</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={4} />
            <span>Threat Bar Policy Level 4-7</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar policyThreatLevel={8} />
            <span>Threat Bar Policy Level 8-10</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
      </tbody>
    </table>
  </>;

export default NxThreatLevelsByPolicyNumberTableElements;
