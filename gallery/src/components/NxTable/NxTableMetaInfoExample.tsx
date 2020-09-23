/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow,
  NxWarningAlert
} from '@sonatype/react-shared-components';

const NxTableLoadingExample = () => {
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
      <NxTableBody>
        <NxTableRow>
          <NxTableCell colSpan={5} metaInfo>
            <NxWarningAlert>
              This table data cannot be displayed due to quantum entanglement, or something.
            </NxWarningAlert>
          </NxTableCell>
        </NxTableRow>
      </NxTableBody>
    </NxTable>
  );
};

export default NxTableLoadingExample;
