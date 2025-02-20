/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import RequiredReactNode from '../../util/RequiredReactNode';

export interface Props {
  isOpen: boolean;
  className?: string | null;
  toggleOpenIcon: IconDefinition;
  toggleCloseIcon: IconDefinition;
  onToggleClick: (() => void);
  children?: ReactNode | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  toggleOpenIcon: PropTypes.object.isRequired as PropTypes.Validator<IconDefinition>,
  toggleCloseIcon: PropTypes.object.isRequired as PropTypes.Validator<IconDefinition>,
  onToggleClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export interface NxGlobalSidebar2NavigationLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isSelected?: boolean | null;
  icon: IconDefinition;
  text: RequiredReactNode;
  href: string;
}

export const nxGlobalSidebar2NavigationLinkPropTypes: PropTypes.ValidationMap<NxGlobalSidebar2NavigationLinkProps> = {
  isSelected: PropTypes.bool,
  icon: PropTypes.object.isRequired as PropTypes.Validator<IconDefinition>,
  text: PropTypes.node.isRequired as PropTypes.Validator<RequiredReactNode>,
  href: PropTypes.string.isRequired
};
