/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

export interface Props {
  message?: string | null;
  successMessage?: string | null;
  success?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  message: PropTypes.string,
  successMessage: PropTypes.string,
  success: PropTypes.bool
};
