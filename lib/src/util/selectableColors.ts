/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { map } from 'ramda';

import './selectableColors.scss';

export const selectableColors =
    ['purple', 'pink', 'blue', 'red', 'turquoise', 'orange', 'yellow', 'kiwi', 'sky', 'indigo'] as const;

export const selectableColorClasses: readonly string[] =
    map(color => `nx-selectable-color--${color}`, selectableColors);

// These color names are deprecated aliases for some of the current ones. They should still be accepted in any APIs
// where a SelectableColor name is expected
type DeprecatedSelectableColor = 'light-blue' | 'green' | 'lime';

export type SelectableColor = (typeof selectableColors)[number] | DeprecatedSelectableColor;
