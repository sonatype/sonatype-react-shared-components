/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

type AttributeOmissions = 'disabled' | 'className' | 'onClick' | 'href';

export interface ButtonItemProps extends ComponentProps<'div'> {
  onClick: () => void;
  term: Exclude<ReactNode, undefined | null>;
  description: Exclude<ReactNode, undefined | null>;
  selected?: boolean | null;
  disabled?: boolean | null;
  buttonClassName?: string | null;
  buttonAttributes?: Omit<ComponentProps<'button'>, AttributeOmissions> | null;
}

export interface LinkItemProps extends ComponentProps<'div'> {
  href: string;
  term: Exclude<ReactNode, undefined | null>;
  description: Exclude<ReactNode, undefined | null>;
  selected?: boolean | null;
  disabled?: boolean | null;
  anchorClassName?: string | null;
  anchorAttributes?: Omit<ComponentProps<'a'>, AttributeOmissions> | null;
}

export interface Props extends ComponentProps<'dl'> {
  emptyMessage?: string | null;
}

export const buttonItemPropTypes: PropTypes.ValidationMap<ButtonItemProps> = {
  onClick: PropTypes.func.isRequired,
  term: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClassName: PropTypes.string,
  buttonAttributes: PropTypes.object
};

export const linkItemPropTypes: PropTypes.ValidationMap<LinkItemProps> = {
  href: PropTypes.string.isRequired,
  term: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  anchorClassName: PropTypes.string,
  anchorAttributes: PropTypes.object
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  emptyMessage: PropTypes.string
};
