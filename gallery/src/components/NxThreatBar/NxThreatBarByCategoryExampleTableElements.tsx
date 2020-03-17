/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatBar } from '@sonatype/react-shared-components';

const NxThreatLevelsByNameTableElements = () =>
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
            <NxThreatBar />
            <span>Threat Level Unspecified</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar threatLevelCategory="none"/>
            <span>Threat Level None</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar threatLevelCategory="low"/>
            <span>Threat Level Low</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar threatLevelCategory="moderate"/>
            <span>Threat Level Moderate</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar threatLevelCategory="severe"/>
            <span>Threat Level Severe</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
        <tr className="nx-table-row">
          <td className="nx-cell nx-cell--threat-bar">
            <NxThreatBar threatLevelCategory="critical"/>
            <span>Threat Level Critical</span>
          </td>
          <td className="nx-cell">Content 1</td>
          <td className="nx-cell">Content 2</td>
        </tr>
      </tbody>
    </table>
  </>;

export default NxThreatLevelsByNameTableElements;
