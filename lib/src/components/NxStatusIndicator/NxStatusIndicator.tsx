/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import withClass from '../../util/withClass';
import { Props } from './types';

const NxStatusIndicator = withClass('span', 'nx-status-indicator', 'status');

function mkModifiedStatusIndicator(modifier: string) {
  return forwardRef<HTMLSpanElement, Props>(function ({ className, ...otherProps }, ref) {
    return <NxStatusIndicator ref={ref}
                              className={classnames(`nx-status-indicator--${modifier}`, className)}
                              { ...otherProps } />;
  });
}

export const NxNegativeStatusIndicator = mkModifiedStatusIndicator('negative');
export const NxPositiveStatusIndicator = mkModifiedStatusIndicator('positive');
export const NxIntermediateStatusIndicator = mkModifiedStatusIndicator('intermediate');
export const NxErrorStatusIndicator = mkModifiedStatusIndicator('error');
