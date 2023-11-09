/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode, WeakValidationMap } from 'react';
import * as PropTypes from 'prop-types';

export const NX_DRAWER_VARIANTS = ['normal', 'narrow'] as const;
export type NX_DRAWER_VARIANT_TYPE = (typeof NX_DRAWER_VARIANTS)[number];

export type OpenState = 'open' | 'closed' | 'opening' | 'closing';

export interface Props extends HTMLAttributes<HTMLDialogElement> {
  open: boolean;
  onClose: () => void;
  onCancel?: (() => void) | null;
  children?: ReactNode;
  variant?: NX_DRAWER_VARIANT_TYPE | null;
  closeDisabled?: boolean | null;
  closeBtnTooltip?: string | null;
}

export type NxDrawerHeaderProps = HTMLAttributes<HTMLElement>;

export type NxDrawerHeaderTitleProps = HTMLAttributes<HTMLHeadingElement>;

export interface NxDrawerContextValue {
  closeDrawer: () => void;
  closeDisabled?: boolean | null;
  closeBtnTooltip?: string | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  variant: PropTypes.oneOf(NX_DRAWER_VARIANTS),
  closeDisabled: PropTypes.bool,
  closeBtnTooltip: PropTypes.string
};

export const nxDrawerHeaderTitlePropTypes: WeakValidationMap<NxDrawerHeaderTitleProps> = {
  className: PropTypes.string,
  children: PropTypes.node
};
