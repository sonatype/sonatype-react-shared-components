/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {
  HTMLAttributes,
  LiHTMLAttributes,
  ValidationMap,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes
} from 'react';
import PropTypes from 'prop-types';

export interface NxListProps extends HTMLAttributes<HTMLUListElement> {
  bulleted?: boolean | null;
  emptyMessage?: ReactNode;
  error?: string | null;
  isLoading?: boolean | null;
  retryHandler?: (() => void) | null;
}

export const nxListPropTypes: ValidationMap<NxListProps> = {
  bulleted: PropTypes.bool,
  emptyMessage: PropTypes.node,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  retryHandler: PropTypes.func
};

export interface NxListButtonItemProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean | null,
  disabled?: boolean | null,
  buttonClassName?: string | null,
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement> | null,
}

export const nxListButtonItemPropTypes: ValidationMap<NxListButtonItemProps> = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonClassName: PropTypes.string,
  buttonAttributes: PropTypes.object
};

export interface NxListLinkItemProps extends LiHTMLAttributes<HTMLLIElement> {
  disabled?: boolean | null,
  selected?: boolean | null,
  href: string,
  anchorClassName?: string | null,
  anchorAttributes?: AnchorHTMLAttributes<HTMLAnchorElement> | null,
}

export const nxListLinkItemPropTypes: ValidationMap<NxListLinkItemProps> = {
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  href: PropTypes.string.isRequired,
  anchorClassName: PropTypes.string,
  anchorAttributes: PropTypes.object
};
