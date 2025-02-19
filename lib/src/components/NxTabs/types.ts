/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps, PropsWithChildren, ReactElement } from 'react';
import PropTypes from 'prop-types';

export interface TabContextType {
  activeTab?: number | null;
  rootId: string;
  index: number;
  onTabSelect: (index: number) => void;
}

export type NxTabsProps = ComponentProps<'div'> & {
  activeTab?: number | null ;
  onTabSelect: ((index: number) => void);
  children?: ReactElement<PropsWithChildren> | ReactElement<PropsWithChildren>[] | null;
};

export type NxTabListProps = ComponentProps<'ul'>;
export type NxTabPanelProps = ComponentProps<'div'>;
export type NxTabProps = ComponentProps<'li'> & {
  index?: number | null;
};

export const nxTabsPropTypes: PropTypes.ValidationMap<NxTabsProps> = {
  activeTab: PropTypes.number,
  onTabSelect: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element.isRequired)
  ]) as PropTypes.Validator<ReactElement<PropsWithChildren> | ReactElement<PropsWithChildren>[]>
};

export const nxTabPropTypes: PropTypes.ValidationMap<NxTabProps> = {
  index: PropTypes.number,
  children: PropTypes.node
};

export const nxTabListPropTypes: PropTypes.ValidationMap<NxTabListProps> = {
  children: PropTypes.node
};

export const nxTabPanelPropTypes = {
  className: PropTypes.string
} as PropTypes.ValidationMap<NxTabPanelProps>;
