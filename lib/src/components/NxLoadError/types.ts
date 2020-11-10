/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode } from 'react';
import * as PropTypes from 'prop-types';

import { Props as NxAlertProps, propTypes as nxAlertPropTypes } from '../NxAlert/types';

export type Props = NxAlertProps & {
  error?: ReactNode | null;
  titleMessage?: string | null;
  retryHandler?: (() => void) | null;
};

// In a strictly typescript environment, PropTypes are mostly redundant.  However, they still provide safety when this
// project is consumed by javascript projects
export const propTypes: PropTypes.ValidationMap<Props> = {
  ...nxAlertPropTypes,
  error: PropTypes.node,
  titleMessage: PropTypes.string,
  retryHandler: PropTypes.func
};

