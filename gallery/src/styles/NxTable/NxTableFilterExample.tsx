/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFilterInput } from '@sonatype/react-shared-components';

const NxTableFilter = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th className="nx-cell nx-cell--header">Name</th>
        <th className="nx-cell nx-cell--header">Country</th>
      </tr>
      <tr className="nx-table-row nx-table-row--header nx-table-row--filter-header">
        <th className="nx-cell nx-cell--header nx-cell--filter-header">
          <NxFilterInput value="" placeholder="Type a name"/>
        </th>
        <th className="nx-cell nx-cell--header">
          <NxFilterInput value="" placeholder="Select a country" list="countryList"/>
          <datalist id="countryList">
            <option value="Colombia"/>
            <option value="France"/>
            <option value="Germany"/>
            <option value="USA"/>
          </datalist>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>Anna</span></td>
        <td className="nx-cell"><span>USA</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>Lean</span></td>
        <td className="nx-cell"><span>France</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>Louis</span></td>
        <td className="nx-cell"><span>France</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>Zach</span></td>
        <td className="nx-cell"><span>Colombia</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>Jimmy</span></td>
        <td className="nx-cell"><span>Germany</span></td>
      </tr>
    </tbody>
  </table>;

export default NxTableFilter;
