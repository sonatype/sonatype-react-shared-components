/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ValidationMap } from 'react';
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';

import { Props as AbstractNxPageHeaderProps, propTypes as abstractNxPageHeaderPropTypes }
  from '../AbstractNxPageHeader/types';

export interface ProductInfo {
  name: string;
  meta? : string | null;
  version? : string | null;
}

export type Props = Omit<AbstractNxPageHeaderProps, 'logo' | 'productInfoContent'> & {
  productInfo: ProductInfo;
  logoPath?: string | null;
};

export const propTypes: ValidationMap<Props> = {
  ...omit(['logo', 'productInfoContent'], abstractNxPageHeaderPropTypes),
  logoPath: PropTypes.string,
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    version: PropTypes.string
  }).isRequired
};
