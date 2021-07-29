/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import classnames from 'classnames';
import React from 'react';
import {NxListSubtextProps, nxListSubtextPropTypes} from './types';

const NxListSubtext = (props: NxListSubtextProps) => {
  const { children, truncate } = props;
  const className = classnames('nx-list__subtext', {'nx-truncate-ellipsis': truncate});
  return <span className={className}>{children}</span>;
};

NxListSubtext.propTypes = nxListSubtextPropTypes;

export default NxListSubtext;
