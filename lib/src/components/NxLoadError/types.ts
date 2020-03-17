/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  error?: string | null;
  titleMessage?: string | null;
  retryHandler?: (() => void) | null;
};

// In a strictly typescript environment, PropTypes are mostly redundant.  However, they still provide safety when this
// project is consumed by javascript projects
export const propTypes: PropTypes.ValidationMap<Props> = {
  error: PropTypes.string,
  titleMessage: PropTypes.string,
  retryHandler: PropTypes.func
};

