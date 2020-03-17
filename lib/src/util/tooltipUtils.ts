/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { Props as TooltipProps, propTypes as tooltipPropTypes } from '../components/NxTooltip/types';

export type TooltipConfigProps = Omit<TooltipProps, 'children'>;

// PropType's typescript magic that infers the Props types from the ValidationMap doesn't seem to work right,
// which is why this cast is here
export const tooltipPropTypesShape = PropTypes.shape(tooltipPropTypes) as PropTypes.Requireable<TooltipProps>;

export function wrapTooltipProps(tooltipProp: string | TooltipConfigProps): TooltipConfigProps {
  return typeof tooltipProp === 'string' ? { title: tooltipProp } : tooltipProp;
}
