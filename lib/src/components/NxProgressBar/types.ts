/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';

export const NX_PROGRESS_BAR_VARIANTS = ['inline', 'small', 'normal', 'full'] as const;
export type NX_PROGRESS_BAR_VARIANT_TYPE = (typeof NX_PROGRESS_BAR_VARIANTS)[number];

export interface Props extends HTMLAttributes<Omit<HTMLProgressElement, 'value' | 'max'>> {
  hasError?: boolean | null;
  inlineCounter?: boolean | null;
  label?: string | null;
  labelError?: string | null;
  labelSuccess?: string | null;
  max?: number | null;
  showCounter?: boolean | null;
  value: number;
  variant?: NX_PROGRESS_BAR_VARIANT_TYPE | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  hasError: PropTypes.bool,
  inlineCounter: PropTypes.bool,
  label: PropTypes.string,
  labelError: PropTypes.string,
  labelSuccess: PropTypes.string,
  max: PropTypes.number,
  showCounter: PropTypes.bool,
  value: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(NX_PROGRESS_BAR_VARIANTS)
};
