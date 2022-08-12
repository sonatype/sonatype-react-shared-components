/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

type ButtonAttributeOmissions = 'disabled' | 'className' | 'onClick';

export interface ButtonItemProps extends HTMLAttributes<HTMLDivElement> {
  onClick: () => void;
  term: Exclude<ReactNode, undefined | null>;
  description: Exclude<ReactNode, undefined | null>;
  selected?: boolean | null;
  disabled?: boolean | null;
  buttonClassName?: string | null;
  buttonAttributes?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, ButtonAttributeOmissions> | null;
}

export interface Props extends HTMLAttributes<HTMLElement> {
  emptyMessage?: string | null;
}

export const buttonItemPropTypes: PropTypes.ValidationMap<ButtonItemProps> = {
  onClick: PropTypes.func.isRequired,
  term: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClassName: PropTypes.string
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  emptyMessage: PropTypes.string
};
