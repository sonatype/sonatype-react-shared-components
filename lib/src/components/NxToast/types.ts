/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

import { allToastTypes, ToastType } from '../../util/toastLevels';

export type Props = HTMLAttributes<HTMLDivElement>;

export const propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
} as PropTypes.ValidationMap<Props>;

export type NxToastProps = HTMLAttributes<HTMLDivElement> & {
  toastId: number,
  type: ToastType;
  message: string;
  className?: string | null;
};

export const nxToastPropTypes: PropTypes.ValidationMap<NxToastProps> = {
  toastId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(allToastTypes).isRequired
};

export interface ToastModel {
  toastId: number,
  type: ToastType,
  message: string,
}

export type ToastContextType = {
  toasts: ToastModel[];
  addToast: (model: ToastModel) => void,
  removeToast: (id: number) => void,
} | null;
