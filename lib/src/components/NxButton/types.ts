/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import {ButtonHTMLAttributes, ValidationMap} from 'react';

export const NX_BUTTON_VARIANTS = ['primary', 'secondary', 'tertiary', 'icon-only', 'error'] as const;
export type NX_BUTTON_VARIANT_TYPE = (typeof NX_BUTTON_VARIANTS)[number]; // See https://stackoverflow.com/a/45486495

interface CommonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  // deprecated; only here to avoid type checker breaking changes. Remove in 3.0
  inline?: boolean;
  title?: string | null;
}

export interface IconOnlyButtonProps extends CommonProps {
  variant: 'icon-only';

  // In a future breaking change uncomment the line below to make `title` required for icon-only buttons
  //title: string;
}

export interface OtherButtonProps extends CommonProps {
  variant?: Omit<NX_BUTTON_VARIANT_TYPE, 'icon-only'> | null;
}

export type Props = IconOnlyButtonProps | OtherButtonProps;

export const propTypes: ValidationMap<Props> = {
  variant: PropTypes.oneOf(NX_BUTTON_VARIANTS),
  title: PropTypes.string
};
