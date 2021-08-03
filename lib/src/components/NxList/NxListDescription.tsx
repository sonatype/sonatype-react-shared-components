/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import classNames from 'classnames';
import React, { forwardRef } from 'react';
import {NxListDescriptionProps, nxListDescriptionTermPropTypes} from './types';

const NxListDescription = forwardRef<HTMLElement, NxListDescriptionProps>((props: NxListDescriptionProps, ref) => {
  const { children, className, ...attrs} = props;
  const ddClassNames = classNames('nx-list__description', className);
  return <dd ref={ref} className={ddClassNames} {...attrs}>{children}</dd>;
});

NxListDescription.propTypes = nxListDescriptionTermPropTypes;

export default NxListDescription;
