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
  const { children, className } = props;
  const classes = classnames('nx-list__subtext', className);
  return <span className={classes}>{children}</span>;
};

NxListSubtext.propTypes = nxListSubtextPropTypes;

export default NxListSubtext;
