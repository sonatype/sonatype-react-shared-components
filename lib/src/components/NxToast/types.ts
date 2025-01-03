/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode, ReactElement, DialogHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

type CloseableElementWithRoleProps = Pick<DialogHTMLAttributes<HTMLElement>, 'role' | 'onClose'>;

export interface NxToastProps extends HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  children: ReactElement<CloseableElementWithRoleProps>;
}

export const nxToastPropTypes: PropTypes.ValidationMap<NxToastProps> = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired as PropTypes.Validator<ReactElement<CloseableElementWithRoleProps>>
};

export type NxToastContainerContextType = {
  onToastClosing: (toast: HTMLElement | null) => void;
};

//NxToastContainer
export interface NxToastContainerProps {
  children: ReactNode
}

export const nxToastContainerPropTypes: PropTypes.ValidationMap<NxToastContainerProps> = {
  children: PropTypes.any
};
