/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export interface HeaderLinkProps {
  name: string;
  href: string;
  current?: boolean | null;
}

export interface Props {
  logo: ReactNode;
  links?: HeaderLinkProps[] | null;
  homeLink?: string | null;
  productInfoContent?: ReactNode | null;
  className?: string | null;
  children?: ReactNode | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  logo: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    current: PropTypes.bool
  }).isRequired),
  homeLink: PropTypes.string,
  productInfoContent: PropTypes.node,
  className: PropTypes.string
};
