/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, ValidationMap } from 'react';
import * as PropTypes from 'prop-types';

interface ProductInfo {
  name: string;
  meta? : string | null;
  version? : string | null;
}

export interface HeaderLinkProps {
  name: string;
  href: string;
  current?: boolean | null;
}

export interface Props {
  links?: HeaderLinkProps[] | null;
  homeLink?: string | null;
  productInfo: ProductInfo;
  children?: ReactNode | null;
  logoPath?: string | null;
}

export const propTypes: ValidationMap<Props> = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    current: PropTypes.bool
  }).isRequired),
  homeLink: PropTypes.string,
  logoPath: PropTypes.string,
  productInfo: (PropTypes.shape({
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    version: PropTypes.string
  }).isRequired)
};
