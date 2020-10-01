/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {HTMLAttributes, WeakValidationMap} from 'react';
import * as PropTypes from 'prop-types';

export type CloseHandler = () => void;
export const NX_MODAL_VARIANTS = ['wide', 'normal', 'narrow'] as const;
export type NX_MODAL_VARIANT_TYPE = (typeof NX_MODAL_VARIANTS)[number];

export type Props = HTMLAttributes<HTMLDivElement> & {
  onClose: CloseHandler;
  variant?: NX_MODAL_VARIANT_TYPE;
};

export const propTypes: WeakValidationMap<Props> = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(NX_MODAL_VARIANTS)
};
