/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap, ReactNode, HTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface NavigationSidebarLinkProps {
  name: string;
  href: string;
  icon: IconDefinition;
  current?: boolean | null;
}

export interface Props {
  isOpen: boolean;
  className?: string | null;
  toggleOpenIcon: IconDefinition;
  toggleCloseIcon: IconDefinition;
  onToggleClick: (() => void);
  logoImg: string;
  logoText: string;
  logoLink: string;
  links: NavigationSidebarLinkProps[];
  helpLink?: string | null;
  helpText?: string | null;
  collapsedReleaseText?: string | null;
  expandedReleaseText?: string | null;
  attributions?: string[] | null;
};

export const navigationSidebarLinkPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  current: PropTypes.bool
});

export const propTypes: ValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  toggleOpenIcon: PropTypes.object.isRequired,
  toggleCloseIcon: PropTypes.object.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  logoImg: PropTypes.string.isRequired,
  logoText: PropTypes.string.isRequired,
  logoLink: PropTypes.string,
  links: PropTypes.arrayOf(navigationSidebarLinkPropTypes),
  helpLink: PropTypes.string,
  helpText: PropTypes.string,
  collapsedReleaseText: PropTypes.string,
  expandedReleaseText: PropTypes.string,
  attributions: PropTypes.arrayOf(PropTypes.string)
};

export type NxNavigationSidebarContentProps = HTMLAttributes<HTMLDivElement> & {
  className?: string | null;
  children: ReactNode | ReactNode[];
};

export const nxNavigationSidebarContentPropTypes: ValidationMap<NxNavigationSidebarContentProps> = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
