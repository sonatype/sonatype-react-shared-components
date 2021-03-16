/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap, HTMLAttributes, Validator, ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired),
    PropTypes.element
  ])
};

export type NxNavigationSidebarContentProps = HTMLAttributes<HTMLDivElement>;

// Casting to hack around flaws in react's typings: the typings for HTMLAttributes.className don't claim to accept null,
// but non-required proptypes do, and the actual implementation does
export const nxNavigationSidebarContentPropTypes = {
  className: PropTypes.string
} as ValidationMap<NxNavigationSidebarContentProps>;

export interface NxNavigationSidebarLinkProps {
  isSelected?: boolean | null;
  className?: string | null;
  icon: IconDefinition;
  text: string;
  href: string;
}

export const nxNavigationSidebarLinkPropTypes: ValidationMap<NxNavigationSidebarLinkProps> = {
  isSelected: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.object.isRequired as Validator<IconDefinition>,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};
