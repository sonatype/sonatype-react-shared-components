/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { WeakValidationMap, ReactElement, HTMLAttributes, MouseEvent } from 'react';
import { without } from 'ramda';

import { NX_BUTTON_VARIANTS } from '../NxButton/types';

export const NX_SEGMENTED_BUTTON_VARIANTS = without(['icon-only', 'error'], NX_BUTTON_VARIANTS);
export type NX_SEGMENTED_BUTTON_VARIANT_TYPE = (typeof NX_SEGMENTED_BUTTON_VARIANTS)[number];

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  variant?: NX_SEGMENTED_BUTTON_VARIANT_TYPE;
  menuItems: ReactElement[];
  isOpen: boolean;
  onToggleOpen: () => void;
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean | null;
}

export const propTypes: WeakValidationMap<Props> = {
  variant: PropTypes.oneOf(NX_SEGMENTED_BUTTON_VARIANTS),
  menuItems: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggleOpen: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
