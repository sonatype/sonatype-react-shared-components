/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'react';
import { Props as NxFormGroupProps, propTypes as nxFormGroupPropTypes } from '../NxFormGroup/types';
import { omit } from 'ramda';

export interface Props extends Omit<NxFormGroupProps, 'children' | 'isRequired'> {
  content: string;
}

export const propTypes: ValidationMap<Props> = {
  ...omit(['children', 'isRequired'], nxFormGroupPropTypes),
  content: PropTypes.string.isRequired
};
