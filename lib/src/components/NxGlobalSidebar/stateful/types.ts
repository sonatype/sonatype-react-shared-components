/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'react';
import { omit } from 'ramda';

import { Props as NxGlobalSidebarProps, propTypes as nxGlobalSidebarPropTypes } from '../types';

export interface Props extends Omit<NxGlobalSidebarProps, 'isOpen' | 'onToggleClick'> {
  isDefaultOpen: boolean
}

export const propTypes: ValidationMap<Props> = {
  ...omit(['isOpen', 'onToggleClick'], nxGlobalSidebarPropTypes),
  isDefaultOpen: PropTypes.bool.isRequired
};
