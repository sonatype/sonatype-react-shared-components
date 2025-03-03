/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';

import { Props as AbstractNxPageHeaderProps, propTypes as abstractNxPageHeaderPropTypes }
  from '../AbstractNxPageHeader/types';

export interface ProductInfo {
  name: string;
  version?: string | null;
}

export interface LogoProps {
  path: string;
  alt: string;
  darkModePath?: string | null;
}

export interface Props extends Omit<AbstractNxPageHeaderProps, 'logo' | 'productInfoContent'> {
  productInfo?: ProductInfo | null;
  logo?: LogoProps | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...omit(['logo', 'productInfoContent'], abstractNxPageHeaderPropTypes),
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string
  }),
  logo: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    darkModePath: PropTypes.string
  })
};
