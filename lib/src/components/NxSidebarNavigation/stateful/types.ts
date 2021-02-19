/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { WeakValidationMap, ReactNode } from 'react';

import { SidebarNavLinkProps, sidebarNavLinkPropTypes } from '../types';

export interface Props {
  isDefaultOpen: boolean;
  className?: string | null;
  onToggleClick: ((newToggleState: boolean) => void);
  logo: ReactNode;
  logoText: string;
  logoLink: string;
  links: SidebarNavLinkProps[];
  helpLink?: string | null;
  helpText?: string | null;
  collapsedReleaseText?: string | null;
  expandedReleaseText?: string | null;
  attributions?: string[] | null;
}

export const propTypes: WeakValidationMap<Props> = {
  isDefaultOpen: PropTypes.bool.isRequired,
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
