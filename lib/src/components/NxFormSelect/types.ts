/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { SelectHTMLAttributes } from 'react';

export interface StateProps {
  value: string | number;
  isPristine: boolean;
}

export type Props = SelectHTMLAttributes<HTMLSelectElement> & StateProps;

export const propTypes: PropTypes.ValidationMap<Props> = {
  isPristine: PropTypes.bool.isRequired
};
