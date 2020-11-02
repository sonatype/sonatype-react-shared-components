/**
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ValidationMap, MouseEvent, HTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  className?: string | null;
  onPrevPageSelect: ((evt: MouseEvent) => void);
  onNextPageSelect: ((evt: MouseEvent) => void);
}

export const propTypes: ValidationMap<Props> = {
  className: PropTypes.string,
  onPrevPageSelect: PropTypes.func.isRequired,
  onNextPageSelect: PropTypes.func.isRequired
};
