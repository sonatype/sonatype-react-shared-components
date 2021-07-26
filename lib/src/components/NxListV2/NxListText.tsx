/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxListTextProps, nxListTextProps} from './types';

const NxListText = (props: NxListTextProps) => {
  const { children, truncate } = props;
  return <span className={`nx-list__text ${truncate ? 'nx-truncate-ellipsis' : ''}`}>{children}</span>;
};

NxListText.propTypes = nxListTextProps;

export default NxListText;
