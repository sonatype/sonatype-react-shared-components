/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, WeakValidationMap} from 'react';
import * as PropTypes from 'prop-types';

export interface Props {
  onTagSelect?: (() => void) | null;
  tagSelected?: boolean;
  children: ReactNode;
  className?: string | null;
}
export const propTypes: WeakValidationMap<Props> = {
  onTagSelect: PropTypes.func,
  tagSelected: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string
};
