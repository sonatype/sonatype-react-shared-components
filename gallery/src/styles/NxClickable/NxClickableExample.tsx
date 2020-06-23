/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxClickableExample = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th className="nx-cell nx-cell--header">Header 1</th>
        <th className="nx-cell nx-cell--header">Header 2</th>
        <th className="nx-cell nx-cell--header">Header 3</th>
        <th className="nx-cell nx-cell--header">Header 4</th>
        <th className="nx-cell nx-cell--header">Header 5</th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row nx-clickable">
        <td className="nx-cell nx-cell--label">Clickable row</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
      </tr>
      <tr className="nx-table-row">
        <td className="nx-cell nx-cell--label">Non-clickable row</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
      </tr>
    </tbody>
  </table>;

export default NxClickableExample;
