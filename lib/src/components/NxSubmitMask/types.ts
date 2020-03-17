/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

export interface Props {
  fullscreen?: boolean | null;
  message?: string | null;
  successMessage?: string | null;
  success?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  fullscreen: PropTypes.bool,
  message: PropTypes.string,
  successMessage: PropTypes.string,
  success: PropTypes.bool
};
