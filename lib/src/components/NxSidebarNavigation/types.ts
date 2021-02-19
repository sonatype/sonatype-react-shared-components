/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { WeakValidationMap, ReactNode } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SidebarNavLinkProps {
  name: string;
  href: string;
  icon: IconProp;
  current?: boolean | null;
}

export interface Props {
  isOpen: boolean;
  className?: string | null;
  onToggleClick: (() => void);
  logo: ReactNode;
  logoText: string;
  logoLink: string;
  links: SidebarNavLinkProps[];
  helpLink?: string | null;
  helpText?: string | null;
  collapsedReleaseText?: string | null;
  expandedReleaseText?: string | null;
  attributions?: string[] | null;
};

export const sidebarNavLinkPropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  current: PropTypes.bool
});

export const propTypes: WeakValidationMap<Props> = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onToggleClick: PropTypes.func.isRequired,
  logo: PropTypes.node.isRequired,
  logoText: PropTypes.string.isRequired,
  logoLink: PropTypes.string,
  links: PropTypes.arrayOf(sidebarNavLinkPropTypes),
  helpLink: PropTypes.string,
  helpText: PropTypes.string,
  collapsedReleaseText: PropTypes.string,
  expandedReleaseText: PropTypes.string,
  attributions: PropTypes.arrayOf(PropTypes.string)
};
