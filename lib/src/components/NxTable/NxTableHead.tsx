/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTableHeadProps, nxTableHeadPropTypes } from './types';
import { HeaderContext } from './contexts';
export { NxTableHeadProps };

const NxTableHead = function NxTableHead(props: NxTableHeadProps) {
  const {children, ...attrs} = props;

  return (
    <thead {...attrs}>
      <HeaderContext.Provider value={true}>
        {children}
      </HeaderContext.Provider>
    </thead>
  );
};

NxTableHead.propTypes = nxTableHeadPropTypes;

export default NxTableHead;
