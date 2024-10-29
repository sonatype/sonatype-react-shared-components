/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { omit } from 'ramda';

import NxNavigationDropdown, { Props as StatelessProps } from '../NxNavigationDropdown';

export type Props = Omit<StatelessProps, 'isOpen' | 'onToggleCollapse'>;

export const propTypes = omit(['isOpen', 'onToggleCollapse'], NxNavigationDropdown.propTypes);
