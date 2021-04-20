/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faAtom, faBatteryEmpty, faCarBattery } from '@fortawesome/free-solid-svg-icons';

const NxTableSimpleExample = () => {
  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Header 1</NxTable.Cell>
          <NxTable.Cell>Header 2</NxTable.Cell>
          <NxTable.Cell>Header 3</NxTable.Cell>
          <NxTable.Cell isNumeric>Header 4</NxTable.Cell>
          <NxTable.Cell hasIcon>Header 5 - icons</NxTable.Cell>
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        <NxTable.Row>
          <NxTable.Cell>Content 1</NxTable.Cell>
          <NxTable.Cell>Content 2</NxTable.Cell>
          <NxTable.Cell>Content 3</NxTable.Cell>
          <NxTable.Cell isNumeric>4</NxTable.Cell>
          <NxTable.Cell hasIcon>
            <NxFontAwesomeIcon icon={faAtom} />
            <NxFontAwesomeIcon icon={faCarBattery} />
          </NxTable.Cell>
        </NxTable.Row>
        <NxTable.Row>
          <NxTable.Cell>Content 1</NxTable.Cell>
          <NxTable.Cell>Content 2</NxTable.Cell>
          <NxTable.Cell>Content 3</NxTable.Cell>
          <NxTable.Cell isNumeric>4</NxTable.Cell>
          <NxTable.Cell hasIcon>
            <NxFontAwesomeIcon icon={faBatteryEmpty} />
          </NxTable.Cell>
        </NxTable.Row>
      </NxTable.Body>
    </NxTable>
  );
};

export default NxTableSimpleExample;
