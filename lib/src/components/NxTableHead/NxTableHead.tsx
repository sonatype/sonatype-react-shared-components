/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {addPropsToChildren} from '../../util/childUtil';

import { Props } from './types';
export {Props} from './types';

const NxTableHead = function NxTableHead(props: Props) {
  const {className, children, ...attrs} = props;

  return (
    <thead className={className} {...attrs}>
      {addPropsToChildren(children, {isHeader: true})}
    </thead>
  );
};

export default NxTableHead;
