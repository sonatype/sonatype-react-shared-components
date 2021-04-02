/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import React, { ReactElement, HTMLAttributes, ReactNode, KeyboardEventHandler } from 'react';
import { without } from 'ramda';

import { NX_BUTTON_VARIANTS, NX_BUTTON_VARIANT_TYPE } from '../NxButton/types';

// variants of NxButton that are not supported on NxSegmentedButton
const invalidButtonVariants = ['icon-only', 'error'] as const;

export type NX_SEGMENTED_BUTTON_VARIANT_TYPE =
  Exclude<NX_BUTTON_VARIANT_TYPE, (typeof invalidButtonVariants)[number]>;

export const NX_SEGMENTED_BUTTON_VARIANTS =
    without(invalidButtonVariants, NX_BUTTON_VARIANTS) as NX_SEGMENTED_BUTTON_VARIANT_TYPE[];

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  variant: NX_SEGMENTED_BUTTON_VARIANT_TYPE;
  children: ReactElement | ReactElement[];
  buttonContent: ReactNode;
  isOpen: boolean;
  onToggleOpen: () => void;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseKeyDown?: KeyboardEventHandler | null;
  onCloseClick?: ((e: MouseEvent) => void) | null;
  disabled?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  variant: PropTypes.oneOf(NX_SEGMENTED_BUTTON_VARIANTS).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
  ]).isRequired,
  buttonContent: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onCloseKeyDown: PropTypes.func,
  onCloseClick: PropTypes.func,
  disabled: PropTypes.bool
};
