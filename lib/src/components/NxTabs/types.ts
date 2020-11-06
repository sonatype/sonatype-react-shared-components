/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactNode, HTMLAttributes, LiHTMLAttributes } from 'react';
import PropTypes from 'prop-types';

export type NxTabsProps = HTMLAttributes<HTMLDivElement> & {
  activeTab?: number | null ;
  onTabSelect: ((index: number) => void);
  children?: ReactNode | null;
};

export type NxTabListProps = HTMLAttributes<HTMLUListElement>;
export type NxTabPanelProps = HTMLAttributes<HTMLDivElement>;
export type NxTabProps = LiHTMLAttributes<HTMLLIElement> & {
  index?: number | null;
};

export const propTypes: PropTypes.ValidationMap<NxTabsProps> = {
  activeTab: PropTypes.number,
  onTabSelect: PropTypes.func.isRequired,
  children: PropTypes.node
};
