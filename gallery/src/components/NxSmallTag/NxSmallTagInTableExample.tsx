/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxSmallTag, NxTable } from '@sonatype/react-shared-components';

function NxSmallTagInTableExample() {
  return (
    <>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Header 1</NxTable.Cell>
            <NxTable.Cell>Header 2</NxTable.Cell>
            <NxTable.Cell>Header 3</NxTable.Cell>
            <NxTable.Cell>Header 4</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>
              <span>Content 1</span>
              <NxSmallTag>Pink</NxSmallTag>
            </NxTable.Cell>
            <NxTable.Cell>Content 2</NxTable.Cell>
            <NxTable.Cell>Content 3</NxTable.Cell>
            <NxTable.Cell>Content 4</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>
              <span>Content 1</span>
              <NxSmallTag>Pink</NxSmallTag>
            </NxTable.Cell>
            <NxTable.Cell>Content 2</NxTable.Cell>
            <NxTable.Cell>Content 3</NxTable.Cell>
            <NxTable.Cell>Content 4</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </>
  );
}

export default NxSmallTagInTableExample;
