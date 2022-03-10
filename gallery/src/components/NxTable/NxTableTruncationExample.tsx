/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxTable } from '@sonatype/react-shared-components';
import React from 'react';

export default function NxTableTruncationExample() {
  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Header 1</NxTable.Cell>
          <NxTable.Cell>Header 2</NxTable.Cell>
          <NxTable.Cell isNumeric>Number</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        <NxTable.Row>
          <NxTable.Cell>
            <div className="nx-truncate-ellipsis gallery-cell-1-content">Content 1</div>
          </NxTable.Cell>
          <NxTable.Cell>
            Content 2 that will wrap.  Bacon ipsum dolor amet hamburger tongue corned beef rump, chislic sausage doner
            sirloin jerky kevin venison shankle. Tenderloin swine meatloaf jerky. Ham cow brisket porchetta biltong
            shoulder. Ribeye tri-tip short ribs, corned beef pastrami spare ribs landjaeger strip steak salami ham hock
            chuck filet mignon leberkas.
          </NxTable.Cell>
          <NxTable.Cell isNumeric>4</NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>
            <div className="nx-truncate-ellipsis gallery-cell-1-content">
              Content 1 that will truncate due to .nx-truncate-ellipsis wrapper. Bacon ipsum dolor amet hamburger tongue
              corned beef rump, chislic sausage doner sirloin jerky kevin venison shankle. Tenderloin swine meatloaf
              jerky.  Ham cow brisket porchetta biltong shoulder. Ribeye tri-tip short ribs, corned beef pastrami spare
              ribs landjaeger strip steak salami ham hock chuck filet mignon leberkas.
            </div>
          </NxTable.Cell>
          <NxTable.Cell>Content 2</NxTable.Cell>
          <NxTable.Cell isNumeric>4</NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>
            <div className="nx-truncate-ellipsis gallery-cell-1-content">Content 1</div>
          </NxTable.Cell>
          <NxTable.Cell>Content 2</NxTable.Cell>
          <NxTable.Cell isNumeric>4</NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>
            <div className="nx-truncate-ellipsis gallery-cell-1-content">Content 1</div>
          </NxTable.Cell>
          <NxTable.Cell>Content 2</NxTable.Cell>
          <NxTable.Cell isNumeric>4</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Body>
    </NxTable>
  );
}
