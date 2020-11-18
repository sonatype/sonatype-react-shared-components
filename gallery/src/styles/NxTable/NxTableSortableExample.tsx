/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const NxTableSortable = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th scope="col" className="nx-cell nx-cell--header nx-cell--sortable">
          <span>Name</span>
          <span className="nx-cell__sort-icons fa-layers">
            <NxFontAwesomeIcon icon={faSortUp} />
            <NxFontAwesomeIcon icon={faSortDown} />
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>D</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>C</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>B</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>A</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>4</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>3</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>2</span></td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell"><span>1</span></td>
      </tr>
    </tbody>
  </table>;

export default NxTableSortable;
