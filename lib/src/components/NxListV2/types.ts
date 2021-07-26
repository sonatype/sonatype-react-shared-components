/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, LiHTMLAttributes, WeakValidationMap, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';

export type NxListProps = HTMLAttributes<HTMLUListElement> & {
  bulleted?: boolean;
  children?: ReactElement | ReactElement[] | null | ReactNode;
  toggleTooltip?: TooltipConfigProps | string | null;
};

export const nxListPropTypes: WeakValidationMap<NxListProps> = {
  bulleted: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
    PropTypes.element.isRequired
  ]),
  toggleTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string])
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
  truncate: PropTypes.bool
};

export type NxListSubtextProps = {
  children?: ReactNode,
  truncate?: boolean
};

export const nxListSubtextPropTypes: WeakValidationMap<NxListSubtextProps> = {
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
  selected?: boolean
};

export const nxListButtonPropTypes: WeakValidationMap<NxListButtonProps> = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired
  ]),
  selected: PropTypes.bool
};

export type NxListLinkProps = {
  children?: ReactNode,
  href: string,
  selected?: boolean
};

export const nxListLinkPropTypes: WeakValidationMap<NxListLinkProps> = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired
  ]),
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
