/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { DataItem, NxFilterDropdown, NxTable, NxTableContainer, useToggle } from '@sonatype/react-shared-components';

const options: DataItem<string>[] = [
  { id: 'Cc', displayName: 'Cc - Other, Control' },
  { id: 'Ll', displayName: 'Ll - Letter, lowercase' },
  { id: 'Lu', displayName: 'Lu - Letter, uppercase' },
  { id: 'Nd', displayName: 'Nd - Number, decimal digit' },
  { id: 'Pc', displayName: 'Pc - Punctuation, connector' },
  { id: 'Pd', displayName: 'Pd - Punctuation, dash' },
  { id: 'Pe', displayName: 'Pe - Punctuation, close' },
  { id: 'Po', displayName: 'Po - Punctuation, other' },
  { id: 'Ps', displayName: 'Ps - Punctuation, open' },
  { id: 'Sc', displayName: 'Sc - Symbol, currency' },
  { id: 'Sk', displayName: 'Sk - Symbol, modifier' },
  { id: 'Sm', displayName: 'Sm - Symbol, math' },
  { id: 'Zs', displayName: 'Zs - Separator, space' }
];

const data = [
  { codepoint: '0000', glyph: '', category: 'Cc' },
  { codepoint: '0001', glyph: '', category: 'Cc' },
  { codepoint: '0002', glyph: '', category: 'Cc' },
  { codepoint: '0003', glyph: '', category: 'Cc' },
  { codepoint: '0004', glyph: '', category: 'Cc' },
  { codepoint: '0005', glyph: '', category: 'Cc' },
  { codepoint: '0006', glyph: '', category: 'Cc' },
  { codepoint: '0007', glyph: '', category: 'Cc' },
  { codepoint: '0008', glyph: '', category: 'Cc' },
  { codepoint: '0009', glyph: '', category: 'Cc' },
  { codepoint: '000A', glyph: '', category: 'Cc' },
  { codepoint: '000B', glyph: '', category: 'Cc' },
  { codepoint: '000C', glyph: '', category: 'Cc' },
  { codepoint: '000D', glyph: '', category: 'Cc' },
  { codepoint: '000E', glyph: '', category: 'Cc' },
  { codepoint: '000F', glyph: '', category: 'Cc' },
  { codepoint: '0010', glyph: '', category: 'Cc' },
  { codepoint: '0011', glyph: '', category: 'Cc' },
  { codepoint: '0012', glyph: '', category: 'Cc' },
  { codepoint: '0013', glyph: '', category: 'Cc' },
  { codepoint: '0014', glyph: '', category: 'Cc' },
  { codepoint: '0015', glyph: '', category: 'Cc' },
  { codepoint: '0016', glyph: '', category: 'Cc' },
  { codepoint: '0017', glyph: '', category: 'Cc' },
  { codepoint: '0018', glyph: '', category: 'Cc' },
  { codepoint: '0019', glyph: '', category: 'Cc' },
  { codepoint: '001A', glyph: '', category: 'Cc' },
  { codepoint: '001B', glyph: '', category: 'Cc' },
  { codepoint: '001C', glyph: '', category: 'Cc' },
  { codepoint: '001D', glyph: '', category: 'Cc' },
  { codepoint: '001E', glyph: '', category: 'Cc' },
  { codepoint: '001F', glyph: '', category: 'Cc' },
  { codepoint: '0020', glyph: ' ', category: 'Zs' },
  { codepoint: '0021', glyph: '!', category: 'Po' },
  { codepoint: '0022', glyph: '"', category: 'Po' },
  { codepoint: '0023', glyph: '#', category: 'Po' },
  { codepoint: '0024', glyph: '$', category: 'Sc' },
  { codepoint: '0025', glyph: '%', category: 'Po' },
  { codepoint: '0026', glyph: '&', category: 'Po' },
  { codepoint: '0027', glyph: '\'', category: 'Po' },
  { codepoint: '0028', glyph: '(', category: 'Ps' },
  { codepoint: '0029', glyph: ')', category: 'Pe' },
  { codepoint: '002A', glyph: '*', category: 'Po' },
  { codepoint: '002B', glyph: '+', category: 'Sm' },
  { codepoint: '002C', glyph: ',', category: 'Po' },
  { codepoint: '002D', glyph: '-', category: 'Pd' },
  { codepoint: '002E', glyph: '.', category: 'Po' },
  { codepoint: '002F', glyph: '/', category: 'Po' },
  { codepoint: '0030', glyph: '0', category: 'Nd' },
  { codepoint: '0031', glyph: '1', category: 'Nd' },
  { codepoint: '0032', glyph: '2', category: 'Nd' },
  { codepoint: '0033', glyph: '3', category: 'Nd' },
  { codepoint: '0034', glyph: '4', category: 'Nd' },
  { codepoint: '0035', glyph: '5', category: 'Nd' },
  { codepoint: '0036', glyph: '6', category: 'Nd' },
  { codepoint: '0037', glyph: '7', category: 'Nd' },
  { codepoint: '0038', glyph: '8', category: 'Nd' },
  { codepoint: '0039', glyph: '9', category: 'Nd' },
  { codepoint: '003A', glyph: ':', category: 'Po' },
  { codepoint: '003B', glyph: ';', category: 'Po' },
  { codepoint: '003C', glyph: '<', category: 'Sm' },
  { codepoint: '003D', glyph: '=', category: 'Sm' },
  { codepoint: '003E', glyph: '>', category: 'Sm' },
  { codepoint: '003F', glyph: '?', category: 'Po' },
  { codepoint: '0040', glyph: '@', category: 'Po' },
  { codepoint: '0041', glyph: 'A', category: 'Lu' },
  { codepoint: '0042', glyph: 'B', category: 'Lu' },
  { codepoint: '0043', glyph: 'C', category: 'Lu' },
  { codepoint: '0044', glyph: 'D', category: 'Lu' },
  { codepoint: '0045', glyph: 'E', category: 'Lu' },
  { codepoint: '0046', glyph: 'F', category: 'Lu' },
  { codepoint: '0047', glyph: 'G', category: 'Lu' },
  { codepoint: '0048', glyph: 'H', category: 'Lu' },
  { codepoint: '0049', glyph: 'I', category: 'Lu' },
  { codepoint: '004A', glyph: 'J', category: 'Lu' },
  { codepoint: '004B', glyph: 'K', category: 'Lu' },
  { codepoint: '004C', glyph: 'L', category: 'Lu' },
  { codepoint: '004D', glyph: 'M', category: 'Lu' },
  { codepoint: '004E', glyph: 'N', category: 'Lu' },
  { codepoint: '004F', glyph: 'O', category: 'Lu' },
  { codepoint: '0050', glyph: 'P', category: 'Lu' },
  { codepoint: '0051', glyph: 'Q', category: 'Lu' },
  { codepoint: '0052', glyph: 'R', category: 'Lu' },
  { codepoint: '0053', glyph: 'S', category: 'Lu' },
  { codepoint: '0054', glyph: 'T', category: 'Lu' },
  { codepoint: '0055', glyph: 'U', category: 'Lu' },
  { codepoint: '0056', glyph: 'V', category: 'Lu' },
  { codepoint: '0057', glyph: 'W', category: 'Lu' },
  { codepoint: '0058', glyph: 'X', category: 'Lu' },
  { codepoint: '0059', glyph: 'Y', category: 'Lu' },
  { codepoint: '005A', glyph: 'Z', category: 'Lu' },
  { codepoint: '005B', glyph: '[', category: 'Ps' },
  { codepoint: '005C', glyph: '\\', category: 'Po' },
  { codepoint: '005D', glyph: ']', category: 'Pe' },
  { codepoint: '005E', glyph: '^', category: 'Sk' },
  { codepoint: '005F', glyph: '_', category: 'Pc' },
  { codepoint: '0060', glyph: '`', category: 'Sk' },
  { codepoint: '0061', glyph: 'a', category: 'Ll' },
  { codepoint: '0062', glyph: 'b', category: 'Ll' },
  { codepoint: '0063', glyph: 'c', category: 'Ll' },
  { codepoint: '0064', glyph: 'd', category: 'Ll' },
  { codepoint: '0065', glyph: 'e', category: 'Ll' },
  { codepoint: '0066', glyph: 'f', category: 'Ll' },
  { codepoint: '0067', glyph: 'g', category: 'Ll' },
  { codepoint: '0068', glyph: 'h', category: 'Ll' },
  { codepoint: '0069', glyph: 'i', category: 'Ll' },
  { codepoint: '006A', glyph: 'j', category: 'Ll' },
  { codepoint: '006B', glyph: 'k', category: 'Ll' },
  { codepoint: '006C', glyph: 'l', category: 'Ll' },
  { codepoint: '006D', glyph: 'm', category: 'Ll' },
  { codepoint: '006E', glyph: 'n', category: 'Ll' },
  { codepoint: '006F', glyph: 'o', category: 'Ll' },
  { codepoint: '0070', glyph: 'p', category: 'Ll' },
  { codepoint: '0071', glyph: 'q', category: 'Ll' },
  { codepoint: '0072', glyph: 'r', category: 'Ll' },
  { codepoint: '0073', glyph: 's', category: 'Ll' },
  { codepoint: '0074', glyph: 't', category: 'Ll' },
  { codepoint: '0075', glyph: 'u', category: 'Ll' },
  { codepoint: '0076', glyph: 'v', category: 'Ll' },
  { codepoint: '0077', glyph: 'w', category: 'Ll' },
  { codepoint: '0078', glyph: 'x', category: 'Ll' },
  { codepoint: '0079', glyph: 'y', category: 'Ll' },
  { codepoint: '007A', glyph: 'z', category: 'Ll' },
  { codepoint: '007B', glyph: '{', category: 'Ps' },
  { codepoint: '007C', glyph: '|', category: 'Sm' },
  { codepoint: '007D', glyph: '}', category: 'Pe' },
  { codepoint: '007E', glyph: '~', category: 'Sm' },
  { codepoint: '007F', glyph: '', category: 'Cc' }
];

const NxFilterDropdownExample = () => {
  const [isOpen, onToggleCollapse] = useToggle(false),
      [categoryFilter, onCategoryFilterChange] = useState<Set<string>>(new Set()),

      // When no filter options are selected, do not filter at all on that column
      filteredData = categoryFilter.size ? data.filter(({ category }) => categoryFilter.has(category)) : data;

  return (
    <NxTableContainer className="filter-dropdown-example nx-scrollable">
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Codepoint</NxTable.Cell>
            <NxTable.Cell>Glyph</NxTable.Cell>
            <NxTable.Cell>General Category</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row isFilterHeader>
            <NxTable.Cell />
            <NxTable.Cell />
            <NxTable.Cell>
              <NxFilterDropdown isOpen={isOpen}
                                onToggleCollapse={onToggleCollapse}
                                options={options}
                                selectedIds={categoryFilter}
                                onChange={onCategoryFilterChange} />
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          {
            filteredData.map(({ codepoint, glyph, category }) => (
              <NxTable.Row key={codepoint}>
                <NxTable.Cell>{codepoint}</NxTable.Cell>
                <NxTable.Cell>{glyph}</NxTable.Cell>
                <NxTable.Cell>{category}</NxTable.Cell>
              </NxTable.Row>
            ))
          }
        </NxTable.Body>
      </NxTable>
    </NxTableContainer>
  );
};

export default NxFilterDropdownExample;
