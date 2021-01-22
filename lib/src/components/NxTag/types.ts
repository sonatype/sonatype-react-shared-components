/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, WeakValidationMap} from 'react';
import * as PropTypes from 'prop-types';

export const NX_TAG_COLORS = 
    ['light-blue', 'purple', 'pink', 'blue', 'red', 'green', 'orange', 'yellow', 'lime', 'indigo'] as const;
export type NX_TAG_COLORS_TYPE = (typeof NX_TAG_COLORS)[number]; // See https://stackoverflow.com/a/45486495

export interface Props {
  onTagSelect?: (() => void) | null;
  tagSelected?: boolean;
  children: ReactNode;
  tagColor?: NX_TAG_COLORS_TYPE;
  className?: string | null;
}

export const propTypes: WeakValidationMap<Props> = {
  onTagSelect: PropTypes.func,
  tagSelected: PropTypes.bool,
  children: PropTypes.string,
  tagColor: PropTypes.oneOf(NX_TAG_COLORS),
  className: PropTypes.string
};
