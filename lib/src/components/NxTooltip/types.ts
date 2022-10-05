/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ReactElement, ReactNode, RefAttributes } from 'react';
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';

const tooltipPlacements = [
  'top', 'bottom',
  'left', 'right',
  'top-middle', 'bottom-middle',
  'top-end', 'bottom-end'
] as const;

export type TooltipPlacement = (typeof tooltipPlacements)[number];

export interface Props<C extends HTMLElement = HTMLElement> {
  className?: string | null;
  onOpen?: (() => void) | null;
  onClose?: (() => void) | null;
  open?: boolean | null;
  placement?: TooltipPlacement | null;
  title?: ReactNode;
  children: ReactElement & RefAttributes<C>;
}

export type OverflowTooltipProps<C extends HTMLElement = HTMLElement> = Omit<Props<C>, 'open'>;

export const propTypes: PropTypes.ValidationMap<Props> = {
  className: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  placement: PropTypes.oneOf(tooltipPlacements),
  title: PropTypes.node
};

export const overflowTooltipPropTypes = omit(['open'], propTypes);
