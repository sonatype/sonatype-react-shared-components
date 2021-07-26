/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxListItemSubtextProps} from './types';

const NxListItemSubtext = (props: NxListItemSubtextProps) => {
  const { children, truncate } = props;
  return <span className={`nx-list__subtext ${truncate && 'nx-truncate-ellipsis'}`}>{children}</span>;
};

export default NxListItemSubtext;
