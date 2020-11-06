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

import { NxTableProps, nxTablePropTypes } from './types';
export { NxTableProps };

const NxTable = function NxTableElement(props: NxTableProps) {
  const {className, children, ...attrs} = props;

  const thead = only(children, NxTableHead);
  const trow = thead && only(thead.props.children, NxTableRow);
  let tbody = only(children, NxTableBody);
  if (trow && tbody) {
    tbody = React.cloneElement(tbody, { columns: React.Children.count(trow.props.children)});
  }

  return (
    <table className={classnames('nx-table', className)} {...attrs}>
      {thead}
      {tbody}
    </table>
  );
};

NxTable.propTypes = nxTablePropTypes;

export default NxTable;
