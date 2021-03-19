/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { WeakValidationMap } from 'react';
import { omit } from 'ramda';

import { Props as NxSegmentedButtonProps, propTypes as nxSegmentedButtonPropTypes } from '../types';

export type Props = Omit<NxSegmentedButtonProps, 'isOpen' | 'onToggleCollapse' | 'onClose'>;

export const propTypes: WeakValidationMap<Props> =
    omit(['isOpen', 'onToggleCollapse', 'onClose'], nxSegmentedButtonPropTypes);
