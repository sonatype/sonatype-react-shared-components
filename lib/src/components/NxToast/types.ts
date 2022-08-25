/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode, ReactElement } from 'react';
import * as PropTypes from 'prop-types';

export interface NxToastProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children: ReactElement;
}

export const nxToastPropTypes: PropTypes.ValidationMap<NxToastProps> = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export type NxToastContainerContextType = {
  onToastClosing: (toast: HTMLElement | null) => void;
};

//NxToastContainer
export type NxToastContainerProps = {
  children: ReactNode | null
};

export const nxToastContainerPropTypes: PropTypes.ValidationMap<NxToastContainerProps> = {
  children: PropTypes.any
};
