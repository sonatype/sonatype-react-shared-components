/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, useRef, useEffect, useState } from 'react';
import classnames from 'classnames';
import { join, map, prop, filter } from 'ramda';

import { NxTableRowProps, nxTableRowPropTypes} from './types';
import { HeaderContext, RowContext } from './contexts';
export { NxTableRowProps };

const NxTableRow = function NxTableRow(props: NxTableRowProps) {
  const {
        isFilterHeader = false,
        isClickable = false,
        className,
        selected,
        children,
        clickAccessibleLabel,
        ...attrs
      } = props,
      isHeader = useContext(HeaderContext),

      // For the default accessibility label on the chevron button, we need the text content of the row.
      // This component uses the DOM to retrieve that and provides it via RowContext
      [rowTextContent, setRowTextContent] = useState(''),
      rowRef = useRef<HTMLTableRowElement>(null);

  const classes = classnames('nx-table-row', className, {
    'nx-table-row--header': isHeader,
    'nx-clickable': isClickable,
    'nx-table-row--filter-header': isFilterHeader,
    selected
  });

  useEffect(function() {
    // unused if clickAccessibleLabel is set
    if (!clickAccessibleLabel && rowRef.current) {
      const row = rowRef.current,
          cells = Array.from(row.querySelectorAll('td, th')),
          cellTexts = filter(s => !!s, map(prop('textContent'), cells)),
          rowText = join('; ', cellTexts);

      setRowTextContent(rowText);
    }
  }, [clickAccessibleLabel, children]);

  return (
    <tr ref={rowRef} className={classes} {...attrs}>
      <RowContext.Provider value={clickAccessibleLabel || rowTextContent}>
        {children}
      </RowContext.Provider>
    </tr>
  );
};

NxTableRow.propTypes = nxTableRowPropTypes;

export default NxTableRow;
