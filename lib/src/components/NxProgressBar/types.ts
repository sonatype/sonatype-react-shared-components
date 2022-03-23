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

interface BaseProps extends HTMLAttributes<Omit<HTMLProgressElement, 'value' | 'max'>> {
  inlineCounter?: boolean | null;
  label: string;
  labelSuccess?: string | null;
  max?: number | null;
  showCounter?: boolean | null;
  value: number;
  variant?: NX_PROGRESS_BAR_VARIANT_TYPE | null;
}

interface PropsWithError extends BaseProps {
  hasError: true;
  labelError: string;
}

interface PropsWithoutError extends BaseProps {
  hasError?: false | null;
  labelError?: null;
}

export type Props = PropsWithError | PropsWithoutError;

export const propTypes: PropTypes.ValidationMap<Props> = {
  inlineCounter: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelError: (props, propName) =>
    (props.hasError === true && (!props[propName] || typeof props[propName] !== 'string'))
      ? new Error(`${propName} is required when hasError is true`) : null,
  labelSuccess: PropTypes.string,
  max: PropTypes.number,
  showCounter: PropTypes.bool,
  value: PropTypes.number.isRequired,
  variant: PropTypes.oneOf(NX_PROGRESS_BAR_VARIANTS)
};
