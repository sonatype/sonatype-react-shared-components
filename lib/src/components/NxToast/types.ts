/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode, ReactElement } from 'react';
import * as PropTypes from 'prop-types';

// import { allToastTypes, ToastType } from '../../util/toastLevels';

export type Props = HTMLAttributes<HTMLDivElement>;

export const propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func
} as PropTypes.ValidationMap<Props>;

export const nxToastPropTypes: PropTypes.ValidationMap<NxToastProps> = {
  toastId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  previousFocusedElement: PropTypes.any
};

export interface NxToastProps {
  onClose: () => void;
  toastId: number;
  children: ReactElement;
  previousFocusedElement?: ReactNode;
}

export type ToastModel = {
  toastId: number;
};

export type NxToastContainerContext = {
  onToastClosing: ()=> void;
};

//NxToastContainer
export type NxToastContainerProps = {
  children: ReactNode | null
};

export const nxToastContainerPropTypes: PropTypes.ValidationMap<NxToastContainerProps> = {
  children: PropTypes.any
};
