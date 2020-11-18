/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const NxTableClickable = () =>
  <table className="nx-table">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th scope="col" className="nx-cell nx-cell--header">Header 1</th>
        <th scope="col" className="nx-cell nx-cell--header">Header 2</th>
        <th scope="col" className="nx-cell nx-cell--header">Header 3</th>
        <th scope="col" className="nx-cell nx-cell--header">Header 4</th>
        <th scope="col" className="nx-cell nx-cell--header">Header 5</th>
        <th scope="col" className="nx-cell nx-cell--header nx-cell--chevron"></th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row nx-clickable" tabIndex={0}>
        <td className="nx-cell nx-cell--label">Clickable row</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
      <tr className="nx-table-row nx-clickable selected" tabIndex={0}>
        <td className="nx-cell nx-cell--label">Row Label</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
      <tr className="nx-table-row nx-clickable" tabIndex={0}>
        <td className="nx-cell nx-cell--label">Row Label</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
      <tr className="nx-table-row nx-clickable" tabIndex={0}>
        <td className="nx-cell nx-cell--label">Row Label</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
    </tbody>
  </table>;

export default NxTableClickable;
