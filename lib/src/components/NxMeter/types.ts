/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { MeterHTMLAttributes, ReactNode, Ref } from 'react';

export interface Props extends Omit<MeterHTMLAttributes<HTMLMeterElement>, 'max' | 'min' | 'low' | 'high' | 'optimum'> {
  max?: number | null;
  value: number;
  children: Exclude<ReactNode, null | undefined>;
  ref?: Ref<HTMLMeterElement>;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};
