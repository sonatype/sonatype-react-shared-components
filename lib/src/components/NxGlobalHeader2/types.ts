/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import * as PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLElement> {
  logoImg: string;
  logoAltText: string;
  logoLink: string;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  logoImg: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired
};
