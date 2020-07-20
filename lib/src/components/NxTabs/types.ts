/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';

export type Props = HTMLAttributes<HTMLDivElement> & {
  activeTab?: number | null ;
  onTabSelect?: ((index: number) => void) | null;
  children?: ReactNode | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  activeTab: PropTypes.number,
  onTabSelect: PropTypes.func,
  children: PropTypes.node
};
