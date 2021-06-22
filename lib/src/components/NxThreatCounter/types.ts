/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { HTMLAttributes, ValidationMap } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends Omit<HTMLAttributes<HTMLDListElement>, 'className' | 'children'> {
  criticalCount?: number | null;
  severeCount?: number | null;
  moderateCount?: number | null;
  lowCount?: number | null;
  noneCount?: number | null;
  layout?: string | null;
  className?: string | null;
}

export const propTypes: ValidationMap<Props> = {
  criticalCount: PropTypes.number,
  severeCount: PropTypes.number,
  moderateCount: PropTypes.number,
  lowCount: PropTypes.number,
  noneCount: PropTypes.number,
  layout: PropTypes.string,
  className: PropTypes.string
};
