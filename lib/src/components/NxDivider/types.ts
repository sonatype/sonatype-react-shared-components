/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ValidationMap } from 'react';
import PropTypes from 'prop-types';

export interface NxDividerProps extends HTMLAttributes<HTMLElement> {
  horizontal?: boolean | null;
  vertical?: boolean | null;
}

export const nxDividerPropTypes: ValidationMap<NxDividerProps> = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool
};
