/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode } from 'react';
import * as PropTypes from 'prop-types';

export type Props = {
  children?: ReactNode;
  'aria-label'?: string;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  children: PropTypes.node
};
