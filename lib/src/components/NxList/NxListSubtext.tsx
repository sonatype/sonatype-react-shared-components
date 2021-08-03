/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {NxListSubtextProps, nxListSubtextPropTypes} from './types';

const NxListSubtext = forwardRef<HTMLSpanElement, NxListSubtextProps>((props: NxListSubtextProps, ref) => {
  const { children, className, ...attrs } = props;
  const classes = classnames('nx-list__subtext', className);
  return (
    <span ref={ref} className={classes} {...attrs}>
      {children}
    </span>
  );
});

NxListSubtext.propTypes = nxListSubtextPropTypes;

export default NxListSubtext;
