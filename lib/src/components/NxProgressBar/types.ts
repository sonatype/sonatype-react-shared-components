/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<Omit<HTMLProgressElement, 'value' | 'max'>> {
  showCounter?: boolean | null;
  inlineCounter?: boolean | null;
  hasError?: boolean | null;
  label?: string | number | null;
  labelSuccess?: string | number | null;
  labelError?: string | number | null;
  variant?: 'inline' | 'small' | 'normal' | 'full';
  value: number;
  max?: number;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  showCounter: PropTypes.bool,
  inlineCounter: PropTypes.bool,
  hasError: PropTypes.bool
};
