/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {ReactNode, ReactChild} from 'react';
import * as PropTypes from 'prop-types';

import { TooltipConfigProps, tooltipPropTypesShape } from '../../util/tooltipUtils';

export interface Props {
  onToggleCollapse?: (() => void) | null;
  isOpen: boolean;
  disabled?: boolean | null;
  triggerContent: ReactNode;
  triggerTooltip?: TooltipConfigProps | string | null;
  children?: ReactNode;
  className?: string | null;
  id?: string | null;
}

// NxTreeViewChild takes exactly one child element
export interface NxTreeViewChildProps {
  children: ReactChild;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  onToggleCollapse: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  triggerContent: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  triggerTooltip: PropTypes.oneOfType([tooltipPropTypesShape, PropTypes.string]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  id: PropTypes.string
};

export const childPropTypes: React.WeakValidationMap<NxTreeViewChildProps> = {
  children: PropTypes.node
};
