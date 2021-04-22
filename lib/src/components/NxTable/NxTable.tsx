/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import {only} from '../../util/childUtil';
import NxTableHead from './NxTableHead';
import NxTableBody from './NxTableBody';
import NxTableRow from './NxTableRow';
import NxTableCell from './NxTableCell';
import { ColumnCountContext } from './contexts';

import { NxTableProps, nxTablePropTypes } from './types';
export { NxTableProps };

const NxTable = function NxTableElement(props: NxTableProps) {
  const {className, children, ...attrs} = props,
      thead = only(children, NxTableHead),
      tbody = only(children, NxTableBody),
      trow = thead && only(thead.props.children, NxTableRow),
      columns = trow ? React.Children.count(trow.props.children) : 0;

  return (
    <table className={classnames('nx-table', className)} {...attrs}>
      <ColumnCountContext.Provider value={columns}>
        {thead}
        {tbody}
      </ColumnCountContext.Provider>
    </table>
  );
};

NxTable.Body = NxTableBody;
NxTable.Head = NxTableHead;
NxTable.Row = NxTableRow;
NxTable.Cell = NxTableCell;

NxTable.propTypes = nxTablePropTypes;

export default NxTable;
