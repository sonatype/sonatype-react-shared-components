/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { SVGAttributes } from 'react';
import * as PropTypes from 'prop-types';
import { requiredPercentNumber, optionalPercentNumber } from '../../util/customPropTypes';

export interface Props extends SVGAttributes<SVGSVGElement>{
  percent: number;
  innerRadiusPercent?: number | null | undefined;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  percent: requiredPercentNumber,
  innerRadiusPercent: optionalPercentNumber
};
