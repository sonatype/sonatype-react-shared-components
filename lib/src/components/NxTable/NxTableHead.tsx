/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {addPropsToChildren} from '../../util/childUtil';

import { NxTableHeadProps, nxTableHeadPropTypes } from './types';
export { NxTableHeadProps };

const NxTableHead = function NxTableHead(props: NxTableHeadProps) {
  const {children, ...attrs} = props;

  return (
    <thead {...attrs}>
      {addPropsToChildren(children, {isHeader: true})}
    </thead>
  );
};

NxTableHead.propTypes = nxTableHeadPropTypes;

export default NxTableHead;
