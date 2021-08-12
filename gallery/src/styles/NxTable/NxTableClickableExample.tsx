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
        <th className="nx-cell nx-cell--header">Header 1</th>
        <th className="nx-cell nx-cell--header">Header 2</th>
        <th className="nx-cell nx-cell--header">Header 3</th>
        <th className="nx-cell nx-cell--header">Header 4</th>
        <th className="nx-cell nx-cell--header">Header 5</th>
        <th className="nx-cell nx-cell--header nx-cell--chevron"></th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row nx-clickable">
        <td className="nx-cell nx-cell--label">Clickable row</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron">
          <button type="button"
                  className="nx-cell__chevron-btn"
                  aria-label="Clickable row; Content1; Content 2; Content 3; Content 4">
            <NxFontAwesomeIcon icon={faChevronRight}/>
          </button>
        </td>
      </tr>
      <tr className="nx-table-row nx-clickable selected">
        <td className="nx-cell nx-cell--label">Row Label</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron">
          <button type="button"
                  className="nx-cell__chevron-btn"
                  aria-label="Row Label; Content1; Content 2; Content 3; Content 4">
            <NxFontAwesomeIcon icon={faChevronRight}/>
          </button>
        </td>
      </tr>
      <tr className="nx-table-row nx-clickable">
        <td className="nx-cell nx-cell--label">Row Label</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron">
          <button type="button"
                  className="nx-cell__chevron-btn"
                  aria-label="Row Label; Content1; Content 2; Content 3; Content 4">
            <NxFontAwesomeIcon icon={faChevronRight}/>
          </button>
        </td>
      </tr>
      <tr className="nx-table-row nx-clickable">
        <td className="nx-cell nx-cell--label">Row Label</td>
        <td className="nx-cell">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell">Content 3</td>
        <td className="nx-cell">Content 4</td>
        <td className="nx-cell nx-cell--chevron">
          <button type="button"
                  className="nx-cell__chevron-btn"
                  aria-label="Row Label; Content1; Content 2; Content 3; Content 4">
            <NxFontAwesomeIcon icon={faChevronRight}/>
          </button>
        </td>
      </tr>
    </tbody>
  </table>;

export default NxTableClickable;
