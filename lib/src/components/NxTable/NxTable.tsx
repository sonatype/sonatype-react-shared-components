/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import {only, splitOutFirst} from '../../util/childUtil';
import NxTableHead from './NxTableHead';
import NxTableRow from './NxTableRow';
import { ColumnCountContext } from './contexts';

import { NxTableProps, nxTablePropTypes } from './types';
export { NxTableProps };

const NxTable = function NxTableElement(props: NxTableProps) {
  const {className, children, ...attrs} = props,
      [thead, otherChildren] = splitOutFirst(NxTableHead, children),
      trow = thead && only(thead.props.children, NxTableRow),
      columns = trow ? React.Children.count(trow.props.children) : 0;

  return (
    <table className={classnames('nx-table', className)} {...attrs}>
      <ColumnCountContext.Provider value={columns}>
        {thead}
        {otherChildren}
      </ColumnCountContext.Provider>
    </table>
  );
};

NxTable.propTypes = nxTablePropTypes;

export default NxTable;
