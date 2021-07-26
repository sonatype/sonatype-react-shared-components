/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, LiHTMLAttributes, WeakValidationMap, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired
  ])
};

export type NxListTextProps = {
  children?: ReactNode,
  truncate?: boolean
};

export const nxListTextProps: WeakValidationMap<NxListTextProps> = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired
  ]),
  truncate: PropTypes.bool
};

export type NxListSubtextProps = {
  children?: ReactNode,
  truncate?: boolean
};

export const nxListSubtextPropTypes: WeakValidationMap<NxListSubtextProps> = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired
  ]),
  truncate: PropTypes.bool
};

export type NxListActionProps = {
  title?: string,
  icon?: IconDefinition,
  children?: ReactNode;
};

export const nxListActionPropTypes: WeakValidationMap<NxListActionProps> = {
  title: PropTypes.string,
  icon: PropTypes.any,
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
