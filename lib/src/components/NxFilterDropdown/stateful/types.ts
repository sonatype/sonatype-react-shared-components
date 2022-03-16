/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { omit } from 'ramda';

import { Props as NxFilterDropdownProps, propTypes as nxFilterDropdownPropTypes } from '../types';

const propsToOmit = ['isOpen', 'onToggleCollapse'] as const

export type Props<T extends string | number = string> = Omit<NxFilterDropdownProps<T>, (typeof propsToOmit)[number]>;

export const propTypes = omit(propsToOmit, nxFilterDropdownPropTypes);
