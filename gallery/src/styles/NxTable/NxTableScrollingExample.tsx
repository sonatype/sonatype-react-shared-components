/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxButton, NxFilterInput } from '@sonatype/react-shared-components';

export default function NxTableScrollingExample() {
  return (
    <div className="nx-scrollable nx-table-container" style={{ height: '400px' }}>
      <table className="nx-table">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Header 1</th>
            <th className="nx-cell nx-cell--header">Header 2</th>
            <th className="nx-cell nx-cell--header">Header 3</th>
            <th className="nx-cell nx-cell--header nx-cell--num">Number</th>
            <th className="nx-cell nx-cell--header">Header 5</th>
          </tr>
          <tr className="nx-table-row nx-table-row--header nx-table-row--filter-header">
            <th className="nx-cell nx-cell--header">
              <NxFilterInput value="" />
            </th>
            <th className="nx-cell nx-cell--header"></th>
            <th className="nx-cell nx-cell--header"></th>
            <th className="nx-cell nx-cell--header nx-cell--num"></th>
            <th className="nx-cell nx-cell--header"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell">Content 1</td>
            <td className="nx-cell">Content 2</td>
            <td className="nx-cell">Content 3</td>
            <td className="nx-cell nx-cell--num">4</td>
            <td className="nx-cell">Content 5</td>
          </tr>
        </tbody>
      </table>
      <div className="nx-table-container__footer">
        <div className="nx-btn-bar">
          <NxButton>Footer Button</NxButton>
        </div>
      </div>
    </div>
  );
}
