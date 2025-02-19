/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps, ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export const NX_SMALL_TAG_COLORS =
  ['blue', 'green', 'indigo', 'orange', 'pink', 'purple', 'red', 'teal', 'turquoise'] as const;
export type NX_SMALL_TAG_COLOR_TYPE = (typeof NX_SMALL_TAG_COLORS)[number];

export interface Props extends Omit<ComponentProps<'label'>, 'color'> {
  children: ReactNode;
  color?: NX_SMALL_TAG_COLOR_TYPE | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(NX_SMALL_TAG_COLORS)
};
