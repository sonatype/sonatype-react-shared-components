/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ComponentProps } from 'react';

export const NX_PROGRESS_BAR_VARIANTS = ['inline', 'small', 'normal', 'full'] as const;
export type NX_PROGRESS_BAR_VARIANT_TYPE = (typeof NX_PROGRESS_BAR_VARIANTS)[number];

export interface StepsProps {
  max: number;
  value: number;
}

export interface Props extends Omit<ComponentProps<'progress'>, 'value' | 'max'> {
  inlineCounter?: boolean | null;
  label: string;
  labelSuccess?: string | null;
  labelError?: string | null;
  max?: number | null;
  showCounter?: boolean | null;
  showSteps?: boolean | null;
  value: number;
  variant?: NX_PROGRESS_BAR_VARIANT_TYPE | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  inlineCounter: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelError: PropTypes.string,
  labelSuccess: PropTypes.string,
  max: PropTypes.number,
  showCounter: PropTypes.bool,
  value: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(NX_PROGRESS_BAR_VARIANTS)
};
