/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, LiHTMLAttributes, WeakValidationMap, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';

export type NxListProps = HTMLAttributes<HTMLUListElement> & {
  bulleted?: boolean;
  children?: ReactElement | ReactElement[] | null | ReactNode;
};

export const nxListPropTypes: WeakValidationMap<NxListProps> = {
  bulleted: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    PropTypes.element.isRequired
  ])
};

export type NxListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  selected?: boolean;
};

export const nxListItemPropTypes: WeakValidationMap<NxListItemProps> = {
  selected: PropTypes.bool
};

export type NxListTitleProps = {
  children?: ReactNode
};

export const nxListTitlePropTypes: WeakValidationMap<NxListTitleProps> = {
  children: PropTypes.element
};

export type NxListTextProps = {
  children?: ReactNode,
  truncate?: boolean
};

export const nxListTextPropTypes: WeakValidationMap<NxListTextProps> = {
  children: PropTypes.node,
  truncate: PropTypes.bool
};

export type NxListSubtextProps = {
  children?: ReactNode,
  truncate?: boolean
};

export const nxListSubtextPropTypes: WeakValidationMap<NxListSubtextProps> = {
  children: PropTypes.node,
  truncate: PropTypes.bool
};

export type NxListActionProps = {
  children?: ReactNode;
};

export const nxListActionPropTypes: WeakValidationMap<NxListActionProps> = {
  children: PropTypes.node
};

export type NxListButtonProps = {
  children?: ReactNode,
  disabled?: boolean,
  selected?: boolean
};

export const nxListButtonPropTypes: WeakValidationMap<NxListButtonProps> = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

export type NxListLinkProps = {
  children?: ReactNode,
  disabled?: boolean,
  href: string,
  selected?: boolean
};

export const nxListLinkPropTypes: WeakValidationMap<NxListLinkProps> = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
  selected: PropTypes.bool
};

export type NxListErrorProps = {
  errorMessage: string,
  onClick: (() => void) | null;
};

export const nxListErrorPropTypes: WeakValidationMap<NxListErrorProps> = {
  errorMessage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
