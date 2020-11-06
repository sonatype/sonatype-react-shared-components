/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {HTMLAttributes, ReactNode} from 'react';
import PropTypes from 'prop-types';

// Final Props are the HTMLProps & our re-definitions
export type Props = HTMLAttributes<HTMLTableSectionElement> & {
  isLoading?: boolean | null;
  error?: string | null;
  emptyMessage?: ReactNode | null;
  columns?: number | null;
  retryHandler?: (() => void) | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  emptyMessage: PropTypes.node,
  columns: PropTypes.number,
  retryHandler: PropTypes.func,
  children: PropTypes.node
};
