/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { LiHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

interface NonCollapsibleItemProps {
  collapsible?: false | null;
}

interface CollapsibleItemProps {
  collapsible: true;
  isOpen: boolean;
  onToggleCollapse: (() => void);
}

export type ItemProps = LiHTMLAttributes<HTMLLIElement> & (NonCollapsibleItemProps | CollapsibleItemProps) & {
  onActivate?: () => void;
}


export interface StatefulItemProps extends LiHTMLAttributes<HTMLLIElement> {
  collapsible?: boolean | null;
  defaultOpen?: boolean | null;
}

export const itemPropTypes = {
  collapsible: PropTypes.bool,
  isOpen: PropTypes.bool,
  onToggleCollapse: PropTypes.func
};

export const statefulItemPropTypes: PropTypes.ValidationMap<StatefulItemProps> = {
  collapsible: PropTypes.bool,
  defaultOpen: PropTypes.bool
};
