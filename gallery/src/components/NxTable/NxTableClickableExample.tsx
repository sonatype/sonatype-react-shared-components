/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable } from '@sonatype/react-shared-components';

const NxTableClickableExample = () => {
  const rows = [
    { name: 'Name 1' },
    { name: 'Name 2', selected: true },
    { name: 'Name 3' }
  ];

  return (
    <NxTable>
      <NxTable.Head>
        <NxTable.Row>
          <NxTable.Cell>Name</NxTable.Cell>
          <NxTable.Cell>Header 2</NxTable.Cell>
          <NxTable.Cell chevron />
        </NxTable.Row>
      </NxTable.Head>
      <NxTable.Body>
        {rows.map(({ name, selected = false }) =>
          <NxTable.Row key={name} isClickable selected={selected} onClick={() => alert(`Clicked ${name}`)}>
            <NxTable.Cell>{name}</NxTable.Cell>
            <NxTable.Cell>Content</NxTable.Cell>
            <NxTable.Cell chevron/>
          </NxTable.Row>
        )}
        <NxTableRow isClickable onClick={() => alert('Clicked last row')} clickAccessibleLabel="The last row">
          <NxTableCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lorem vitae dolor mattis imperdiet a ac
            nisl. Maecenas quis dapibus lacus, non lacinia dolor. In hac habitasse platea dictumst. Sed sit amet
            nulla facilisis, elementum tellus quis, mattis turpis. Vivamus accumsan, purus vel maximus condimentum,
            augue quam hendrerit velit, sed finibus nulla justo sit amet est. Nam tincidunt efficitur dapibus.
            Quisque et pellentesque ante. Sed porttitor sem ipsum, sit amet blandit felis hendrerit nec. Suspendisse
            congue, tortor tristique sollicitudin consectetur, sapien purus posuere massa, eget finibus nulla ipsum
            sed sapien.
          </NxTableCell>
          <NxTableCell>Content</NxTableCell>
          <NxTableCell chevron/>
        </NxTableRow>
      </NxTableBody>
    </NxTable>
  );
};

export default NxTableClickableExample;
