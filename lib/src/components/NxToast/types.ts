/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, ReactElement, ComponentPropsWithRef } from 'react';
import * as PropTypes from 'prop-types';

type CloseableElementWithRoleProps = Pick<ComponentPropsWithRef<'dialog'>, 'role' | 'onClose'>;

export interface NxToastProps extends ComponentPropsWithRef<'div'> {
  onClose: () => void;
  children: ReactElement<CloseableElementWithRoleProps> | ReactElement<CloseableElementWithRoleProps>[];
}

export const nxToastPropTypes: PropTypes.ValidationMap<NxToastProps> = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    PropTypes.element.isRequired
  ]) as PropTypes.Validator<ReactElement<CloseableElementWithRoleProps>[]>
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
