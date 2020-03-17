/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxTableErrorState = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th className="nx-cell nx-cell--header">Column 1</th>
        <th className="nx-cell nx-cell--header">Column 2</th>
        <th className="nx-cell nx-cell--header">Column 3</th>
        <th className="nx-cell nx-cell--header">Column 4</th>
        <th className="nx-cell nx-cell--header">Column 5</th>
        <th className="nx-cell nx-cell--header">Column 6</th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row">
        <td colSpan={6} className="nx-cell nx-error">
          This table has an error state.
        </td>
      </tr>
    </tbody>
  </table>;

export default NxTableErrorState;
