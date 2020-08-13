/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export interface Props {
  error?: string | null;
  loading?: boolean | null;
  children: ReactNode | (() => ReactNode) | null;

  // The optionalness of this is deprecated; to be removed in 2.0
  retryHandler?: (() => void) | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ]),
  retryHandler: PropTypes.func
};
