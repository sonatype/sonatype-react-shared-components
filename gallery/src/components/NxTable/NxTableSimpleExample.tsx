/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxTable,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

const NxTableSimpleExample = () => {
  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell>Header 1</NxTableCell>
          <NxTableCell>Header 2</NxTableCell>
          <NxTableCell>Header 3</NxTableCell>
          <NxTableCell isNumeric>Header 4</NxTableCell>
          <NxTableCell>Header 5</NxTableCell>
        </NxTableRow>
      </NxTableHead>
      <tbody>
        <NxTableRow>
          <NxTableCell>Content 1</NxTableCell>
          <NxTableCell>Content 2</NxTableCell>
          <NxTableCell>Content 3</NxTableCell>
          <NxTableCell isNumeric>4</NxTableCell>
          <NxTableCell>Content 5</NxTableCell>
        </NxTableRow>
        <NxTableRow>
          <NxTableCell>Content 1</NxTableCell>
          <NxTableCell>Content 2</NxTableCell>
          <NxTableCell>Content 3</NxTableCell>
          <NxTableCell isNumeric>4</NxTableCell>
          <NxTableCell>Content 5</NxTableCell>
        </NxTableRow>
      </tbody>
    </NxTable>
  );
};

export default NxTableSimpleExample;
