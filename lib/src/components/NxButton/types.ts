/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import {ButtonHTMLAttributes, WeakValidationMap} from 'react';

export const NX_BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary', 'icon-only', 'error'] as const;
export type NX_BUTTON_VARIANT_TYPE = (typeof NX_BUTTON_VARIANTS)[number]; // See https://stackoverflow.com/a/45486495

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: NX_BUTTON_VARIANT_TYPE;
  inline?: boolean;
  iconOnly?: boolean;
}

export const propTypes: WeakValidationMap<Props> = {
  variant: PropTypes.oneOf(NX_BUTTON_VARIANTS),
  inline: PropTypes.bool,
  iconOnly: PropTypes.bool
};
