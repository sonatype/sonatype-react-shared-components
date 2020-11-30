/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, HTMLAttributes } from 'react';

import NxTableRow from './NxTableRow';
import { ColumnCountContext } from './contexts';
import NxTableCell from './NxTableCell';

const NxTableMetaInfoFooter = function NxTableMetaInfoFooter(props: HTMLAttributes<HTMLTableSectionElement>) {
  const { children, ...attrs } = props,
      columns = useContext(ColumnCountContext);

  return (
    <tfoot { ...attrs }>
      <NxTableRow>
        <NxTableCell metaInfo colSpan={columns || undefined}>
          {children}
        </NxTableCell>
      </NxTableRow>
    </tfoot>
  );
};

export default NxTableMetaInfoFooter;
