/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import * as PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';

export interface LogoProps {
  lightPath: string;
  darkPath: string;
  altText: string;
}

export interface Props extends HTMLAttributes<HTMLElement> {
  logoProps?: LogoProps | null;
  homeHref: string;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  logoProps: PropTypes.shape({
    lightPath: PropTypes.string.isRequired,
    darkPath: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
  }),
  homeHref: PropTypes.string.isRequired
};
