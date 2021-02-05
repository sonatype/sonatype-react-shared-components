/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { WeakValidationMap, ReactElement, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { without } from 'ramda';

import { NX_BUTTON_VARIANTS, NX_BUTTON_VARIANT_TYPE } from '../NxButton/types';

// variants of NxButton that are not supported on NxSegmentedButton
const invalidButtonVariants = ['icon-only', 'error'] as const;

export const NX_SEGMENTED_BUTTON_VARIANTS = without(invalidButtonVariants, NX_BUTTON_VARIANTS);
export type NX_SEGMENTED_BUTTON_VARIANT_TYPE =
  Exclude<NX_BUTTON_VARIANT_TYPE, (typeof invalidButtonVariants)[number]>;

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  variant: NX_SEGMENTED_BUTTON_VARIANT_TYPE;
  children: ReactElement | ReactElement[];
  buttonContent: ReactNode;
  isOpen: boolean;
  onToggleOpen: () => void;
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean | null;
}

export const propTypes: WeakValidationMap<Props> = {
  variant: PropTypes.oneOf(NX_SEGMENTED_BUTTON_VARIANTS).isRequired,
  children: PropTypes.node.isRequired,
  buttonContent: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
