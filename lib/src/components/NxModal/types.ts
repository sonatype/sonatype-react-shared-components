/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {HTMLAttributes} from 'react';
import * as PropTypes from 'prop-types';

export type CloseHandler = (evt: Event) => void;
export const NX_MODAL_VARIANTS = ['wide', 'normal', 'narrow'] as const;
export type NX_MODAL_VARIANT_TYPE = (typeof NX_MODAL_VARIANTS)[number];

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  variant?: NX_MODAL_VARIANT_TYPE | null;
}

interface CurrentProps extends BaseProps {
  onCancel: CloseHandler;
  onClose?: never;
}

interface DeprecatedProps extends BaseProps {
  onClose: CloseHandler;
  onCancel?: never;
}

// Effectively, either onClose or onCancel must be specified
export type Props = CurrentProps | DeprecatedProps;

export const propTypes = {
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(NX_MODAL_VARIANTS)
} as PropTypes.ValidationMap<Props>;
