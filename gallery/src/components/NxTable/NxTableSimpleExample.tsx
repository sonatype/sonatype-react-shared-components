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
  NxFontAwesomeIcon
} from '@sonatype/react-shared-components';
import { faAtom, faBatteryEmpty, faCarBattery } from '@fortawesome/free-solid-svg-icons';

const NxTableSimpleExample = () => {
  return (
    <NxTable>
      <NxTableHead>
        <NxTableRow>
          <NxTableCell scope="col">Header 1</NxTableCell>
          <NxTableCell scope="col">Header 2</NxTableCell>
          <NxTableCell scope="col">Header 3</NxTableCell>
          <NxTableCell scope="col" isNumeric>Header 4</NxTableCell>
          <NxTableCell scope="col" hasIcon>Header 5 - icons</NxTableCell>
        </NxTableRow>
      </NxTableHead>
      <NxTableBody>
        <NxTableRow>
          <NxTableCell>Content 1</NxTableCell>
          <NxTableCell>Content 2</NxTableCell>
          <NxTableCell>Content 3</NxTableCell>
          <NxTableCell isNumeric>4</NxTableCell>
          <NxTableCell hasIcon>
            <NxFontAwesomeIcon icon={faAtom} />
            <NxFontAwesomeIcon icon={faCarBattery} />
          </NxTableCell>
        </NxTableRow>
        <NxTableRow>
          <NxTableCell>Content 1</NxTableCell>
          <NxTableCell>Content 2</NxTableCell>
          <NxTableCell>Content 3</NxTableCell>
          <NxTableCell isNumeric>4</NxTableCell>
          <NxTableCell hasIcon>
            <NxFontAwesomeIcon icon={faBatteryEmpty} />
          </NxTableCell>
        </NxTableRow>
      </NxTableBody>
    </NxTable>
  );
};

export default NxTableSimpleExample;
