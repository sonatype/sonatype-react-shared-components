/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxListActionProps, nxListActionPropTypes} from './types';

const NxListAction = (props: NxListActionProps) => {
  const { children } = props;
  return (
    <div className="nx-list__actions">
      {children}
    </div>
  );
};

NxListAction.propTypes = nxListActionPropTypes;

export default NxListAction;
