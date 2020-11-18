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
  <table className="nx-table nx-table--fixed-layout gallery-fixed-layout-table-example">
    <thead>
      <tr className="nx-table-row nx-table-row--header">
        <th scope="col" className="nx-cell nx-cell--header">Header 1</th>
        <th scope="col" className="nx-cell nx-cell--header">Header 2</th>
        <th scope="col" className="nx-cell nx-cell--header nx-cell--num">Number</th>
        <th scope="col" className="nx-cell nx-cell--header nx-cell--chevron"></th>
      </tr>
    </thead>
    <tbody>
      <tr className="nx-table-row nx-clickable" tabIndex={0}>
        <td className="nx-cell nx-truncate-ellipsis">Content 1</td>
        <td className="nx-cell">
          Content 2 that will wrap.  Bacon ipsum dolor amet hamburger tongue corned beef rump, chislic sausage doner
          sirloin jerky kevin venison shankle. Tenderloin swine meatloaf jerky. Ham cow brisket porchetta biltong
          shoulder. Ribeye tri-tip short ribs, corned beef pastrami spare ribs landjaeger strip steak salami ham hock
          chuck filet mignon leberkas.
        </td>
        <td className="nx-cell nx-cell--num">3</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
      <tr className="nx-table-row nx-clickable" tabIndex={0}>
        <td className="nx-cell nx-truncate-ellipsis">
          Content 1 that will truncate due to .nx-truncate-ellipsis wrapper. Bacon ipsum dolor amet hamburger tongue
          corned beef rump, chislic sausage doner sirloin jerky kevin venison shankle. Tenderloin swine meatloaf jerky.
          Ham cow brisket porchetta biltong shoulder. Ribeye tri-tip short ribs, corned beef pastrami spare ribs
          landjaeger strip steak salami ham hock chuck filet mignon leberkas.
        </td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell nx-cell--num">3</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
      <tr className="nx-table-row nx-clickable" tabIndex={0}>
        <td className="nx-cell nx-truncate-ellipsis">Content 1</td>
        <td className="nx-cell">Content 2</td>
        <td className="nx-cell nx-cell--num">3</td>
        <td className="nx-cell nx-cell--chevron"><NxFontAwesomeIcon icon={faChevronRight}/></td>
      </tr>
    </tbody>
  </table>;

export default NxTableClickable;
