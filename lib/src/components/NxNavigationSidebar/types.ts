/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap, ReactNode, HTMLAttributes } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Props {
  isOpen: boolean;
  className?: string | null;
  toggleOpenIcon: IconDefinition;
  toggleCloseIcon: IconDefinition;
  onToggleClick: (() => void);
  logoImg?: string | null;
  logoText?: string | null;
  logoLink: string;
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
  logoImg: PropTypes.string,
  logoText: PropTypes.string,
  logoLink: PropTypes.string.isRequired,
  helpLink: PropTypes.string,
  helpText: PropTypes.string,
  collapsedReleaseText: PropTypes.string,
  expandedReleaseText: PropTypes.string,
  attributions: PropTypes.arrayOf(PropTypes.string)
};

export type NxNavigationSidebarContentProps = HTMLAttributes<HTMLDivElement> & {
  navigation?: boolean | null;
  className?: string | null;
  children: ReactNode | ReactNode[];
};

export const nxNavigationSidebarContentPropTypes: ValidationMap<NxNavigationSidebarContentProps> = {
  navigation: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
