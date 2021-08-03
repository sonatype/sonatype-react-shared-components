/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import classnames from 'classnames';
import React, { forwardRef } from 'react';
import {NxListDescriptionTermProps, nxListDescriptionTermPropTypes} from './types';

const NxListDescriptionTerm = forwardRef<HTMLElement, NxListDescriptionTermProps>(
    (props: NxListDescriptionTermProps, ref) => {
      const { children, className, ...attrs} = props;
      const dtClassName = classnames('nx-list__term', className);
      return <dt ref={ref} className={dtClassName} {...attrs}>{children}</dt>;
    });

NxListDescriptionTerm.propTypes = nxListDescriptionTermPropTypes;

export default NxListDescriptionTerm;
