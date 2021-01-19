/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';

import { NxTableRowProps, nxTableRowPropTypes} from './types';
import { HeaderContext } from './contexts';
export { NxTableRowProps };

const NxTableRow = function NxTableRow(props: NxTableRowProps) {
  const {isFilterHeader = false, isClickable = false, className, selected, children, ...attrs} = props,
      isHeader = useContext(HeaderContext);

  const classes = classnames('nx-table-row', className, {
    'nx-table-row--header': isHeader,
    'nx-clickable': isClickable,
    'nx-table-row--filter-header': isFilterHeader,
    selected
  });

  return (
    <tr tabIndex={isClickable ? 0 : -1} className={classes} {...attrs}>{children}</tr>
  );
};

NxTableRow.propTypes = nxTableRowPropTypes;

export default NxTableRow;
