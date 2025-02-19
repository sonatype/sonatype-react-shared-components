/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ReactNode, ComponentProps } from 'react';
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

export const propTypes: PropTypes.ValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  toggleOpenIcon: PropTypes.object.isRequired as PropTypes.Validator<IconDefinition>,
  toggleCloseIcon: PropTypes.object.isRequired as PropTypes.Validator<IconDefinition>,
  onToggleClick: PropTypes.func.isRequired,
  logoImg: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired,
  children: PropTypes.node
};

export type NxGlobalSidebarNavigationProps = ComponentProps<'div'>;

export const nxGlobalSidebarNavigationPropTypes = {
  className: PropTypes.string
};

export interface NxGlobalSidebarNavigationLinkProps extends ComponentProps<'a'> {
  isSelected?: boolean | null;
  icon: IconDefinition;
  text: RequiredReactNode;
  href: string;
}

export const nxGlobalSidebarNavigationLinkPropTypes: PropTypes.ValidationMap<NxGlobalSidebarNavigationLinkProps> = {
  isSelected: PropTypes.bool,
  icon: PropTypes.object.isRequired as PropTypes.Validator<IconDefinition>,
  text: PropTypes.node.isRequired as PropTypes.Validator<RequiredReactNode>,
  href: PropTypes.string.isRequired
};

export interface NxGlobalSidebarFooterProps extends ComponentProps<'div'> {
  supportText?: ReactNode | null;
  supportLink?: string | null;
  releaseText?: ReactNode | null;
  productTagLine?: ReactNode | null;
  showCreatedBy?: boolean | null;
}

export const nxGlobalSidebarFooterPropTypes: PropTypes.ValidationMap<NxGlobalSidebarFooterProps> = {
  supportText: PropTypes.node,
  supportLink: PropTypes.string,
  releaseText: PropTypes.node,
  productTagLine: PropTypes.node,
  showCreatedBy: PropTypes.bool
};
