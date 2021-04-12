/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ValidationMap } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends Omit<HTMLAttributes<HTMLDListElement>, 'className' | 'children'> {
  criticalCount: number;
  severeCount: number;
  moderateCount: number;
  lowCount: number;
  layout?: string | null;
  className?: string | null;
}

export const propTypes: ValidationMap<Props> = {
  criticalCount: PropTypes.number.isRequired,
  severeCount: PropTypes.number.isRequired,
  moderateCount: PropTypes.number.isRequired,
  lowCount: PropTypes.number.isRequired,
  layout: PropTypes.string,
  className: PropTypes.string
};
