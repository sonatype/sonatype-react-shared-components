/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import {NxListTextProps, nxListTextPropTypes} from './types';

const NxListText = (props: NxListTextProps) => {
  const { children, className } = props;
  const classes = classnames('nx-list__text', className);
  return <span className={classes}>{children}</span>;
};

NxListText.propTypes = nxListTextPropTypes;

export default NxListText;
