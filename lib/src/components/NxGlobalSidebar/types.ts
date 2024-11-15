/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap, HTMLAttributes, AnchorHTMLAttributes, Validator, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import RequiredReactNode from '../../util/RequiredReactNode';

export interface Props {
  isOpen: boolean;
  className?: string | null;
  toggleOpenIcon: IconDefinition;
  toggleCloseIcon: IconDefinition;
  onToggleClick: (() => void);
  logoImg: string;
  logoAltText: string;
  logoLink: string;
  children?: ReactNode | null;
}

export const propTypes: ValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  toggleOpenIcon: PropTypes.object.isRequired as Validator<IconDefinition>,
  toggleCloseIcon: PropTypes.object.isRequired as Validator<IconDefinition>,
  onToggleClick: PropTypes.func.isRequired,
  logoImg: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired,
  children: PropTypes.node
};

export type NxGlobalSidebarNavigationProps = HTMLAttributes<HTMLDivElement>;

// Casting to hack around flaws in react's typings: the typings for HTMLAttributes.className don't claim to accept null,
// but non-required proptypes do, and the actual implementation does
export const nxGlobalSidebarNavigationPropTypes = {
  className: PropTypes.string
};

export interface NxGlobalSidebarNavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isSelected?: boolean | null;
  icon: IconDefinition;
  text: RequiredReactNode;
  href: string;
}

export const nxGlobalSidebarNavigationLinkPropTypes: ValidationMap<NxGlobalSidebarNavigationLinkProps> = {
  isSelected: PropTypes.bool,
  icon: PropTypes.object.isRequired as Validator<IconDefinition>,
  text: PropTypes.node.isRequired as Validator<RequiredReactNode>,
  href: PropTypes.string.isRequired
};

export interface NxGlobalSidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  supportText?: ReactNode | null;
  supportLink?: string | null;
  releaseText?: ReactNode | null;
  productTagLine?: ReactNode | null;
  showCreatedBy?: boolean | null;
}

export const nxGlobalSidebarFooterPropTypes: ValidationMap<NxGlobalSidebarFooterProps> = {
  supportText: PropTypes.node,
  supportLink: PropTypes.string,
  releaseText: PropTypes.node,
  productTagLine: PropTypes.node,
  showCreatedBy: PropTypes.bool
};
