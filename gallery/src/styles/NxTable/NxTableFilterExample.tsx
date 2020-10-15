/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const NxTableFilter = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th className="nx-cell nx-cell--header">Name</th>
        <th className="nx-cell nx-cell--header">Country</th>
      </tr>
      <tr className="nx-table-row nx-table-row--header">
        <th className="nx-cell nx-cell--header nx-cell--filter-header">
          <div className="nx-filter-input">
            <div className="nx-text-input__box">
              <NxFontAwesomeIcon icon={faFilter}/>
              <input type="text"
                     placeholder="Type a name"
                     className="nx-text-input__input nx-filter-text-input"
                     value=""/>
            </div>
          </div>
        </th>
        <th className="nx-cell nx-cell--header nx-cell--filter-header">
          <div className="nx-filter-input">
            <div className="nx-text-input__box">
              <NxFontAwesomeIcon icon={faFilter}/>
              <input type="text"
                     placeholder="Select a country"
                     list="countryList"
                     className="nx-text-input__input nx-filter-text-input"
                     value=""/>
              <datalist id="countryList">
                <option value="Colombia"></option>
                <option value="France"></option>
                <option value="Germany"></option>
                <option value="USA"></option>
              </datalist>
            </div>
          </div>
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
