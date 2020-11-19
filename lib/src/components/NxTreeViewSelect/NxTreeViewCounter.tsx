/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint react/prop-types: 0 */
import React, {FunctionComponent, ReactNode} from 'react';
import classnames from 'classnames';

export interface Props {
  isActive?: boolean | null;
  children: ReactNode;
  id: string;
}

const NxTreeViewCounter: FunctionComponent<Props> = function NxTreeViewCounter({isActive, ...otherProps}) {
  const classes = classnames('nx-counter', {'nx-counter--active': isActive});
  return <div { ...otherProps } className={classes} />;
};

export default NxTreeViewCounter;
