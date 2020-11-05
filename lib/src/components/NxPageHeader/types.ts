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

interface ProductInfo {
  name: string;
  version? : string | null;
}

export type Props = Omit<AbstractNxPageHeaderProps, 'logo' | 'productInfoContent'> & {
  productInfo?: ProductInfo | null;
}

export const propTypes: ValidationMap<Props> = {
  ...omit(['logo', 'productInfoContent'], abstractNxPageHeaderPropTypes),
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string
  })
};
