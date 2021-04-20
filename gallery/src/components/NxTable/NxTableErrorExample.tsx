/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable } from '@sonatype/react-shared-components';

const NxTableLoadingExample = () => {
  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Header 1</NxTable.Cell>
          <NxTable.Cell>Header 2</NxTable.Cell>
          <NxTable.Cell>Header 3</NxTable.Cell>
          <NxTable.Cell isNumeric>Header 4</NxTable.Cell>
          <NxTable.Cell>Header 5</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body error="Failed to load list message" retryHandler={() => {}} />
    </NxTable>
  );
};

export default NxTableLoadingExample;
