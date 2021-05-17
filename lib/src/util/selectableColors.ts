/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { map } from 'ramda';

import './selectableColors.scss';

export const selectableColors =
    ['light-blue', 'purple', 'pink', 'blue', 'red', 'green', 'orange', 'yellow', 'lime'] as const;

export const selectableColorClasses: readonly string[] =
    map(color => `nx-selectable-color--${color}`, selectableColors);

export type SelectableColor = (typeof selectableColors)[number];
