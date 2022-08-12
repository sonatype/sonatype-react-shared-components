/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

import { allToastTypes, ToastType } from '../../util/toastLevels';

export type Props = HTMLAttributes<HTMLDivElement>;

export const propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
} as PropTypes.ValidationMap<Props>;

export type NxToastProps = {
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

export type ToastModel = {
  toastId: number,
  type: ToastType,
  message: string
};

export type ToastAddModel = {
  type: ToastType,
  message: string
};

export type ToastContextType = {
  toasts: ToastModel[];
  addToast: (model: ToastAddModel) => void,
  removeToast: (id: number) => void
} | null;

//NxToastContainer
export type NxToastContainerProps = {
  // toasts: ToastModel[] | []
  children: ReactNode | null
};

export const nxToastContainerPropTypes: PropTypes.ValidationMap<NxToastContainerProps> = {
  // toasts: PropTypes.array,
  children: PropTypes.any
};

//NxToastProvider
export type NxToastProviderProps = {
  children: ReactNode | null
};

export const nxToastProviderPropTypes: PropTypes.ValidationMap<NxToastProviderProps> = {
  children: PropTypes.any
};
