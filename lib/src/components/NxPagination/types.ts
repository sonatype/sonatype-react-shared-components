/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps, MouseEvent } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends Omit<ComponentProps<'div'>, 'onChange'> {
  pageCount: number;
  currentPage?: number | null;
  onChange: ((newPage: number, evt: MouseEvent) => void);
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  pageCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
