/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithRef, MouseEvent } from 'react';
import * as PropTypes from 'prop-types';

export interface HeaderContextType {
  onClick: (evt: MouseEvent) => void;
  open: boolean;
  accordionId: string;
}

export interface Props extends Omit<ComponentPropsWithRef<'details'>, 'onToggle'> {
  onToggle?: ((open: boolean) => void) | null;
}

export type HeaderProps = ComponentPropsWithRef<'header'>;

export const propTypes: PropTypes.ValidationMap<Props> = {
  onToggle: PropTypes.func
};
