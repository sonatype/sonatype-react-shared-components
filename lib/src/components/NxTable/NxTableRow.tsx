/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import {addPropsToChildren} from '../../util/childUtil';

import { NxTableRowProps, nxTableRowPropTypes} from './types';
export { NxTableRowProps };

const NxTableRow = function NxTableRow(props: NxTableRowProps) {
  const {isHeader = false, isFilterHeader = false, isClickable = false, className, children, ...attrs} = props;
  const classes = classnames('nx-table-row', className, {
    'nx-table-row--header': isHeader,
    'nx-clickable': isClickable,
    'nx-table-row--filter-header': isFilterHeader
  });

  return (
    <tr className={classes} {...attrs}>
      {addPropsToChildren(children, {isHeader})}
    </tr>
  );
};

NxTableRow.propTypes = nxTableRowPropTypes;

export default NxTableRow;
