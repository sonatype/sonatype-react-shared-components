/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'react';
import { Props as NxFormGroupProps, propTypes as nxFormGroupPropTypes } from '../NxFormGroup/types';
import { PublicProps as NxTextInputProps, propTypes as nxTextInputPropTypes } from '../NxTextInput/types';
import { omit } from 'ramda';

type InputProps = Omit<NxTextInputProps, 'type' | 'value' | 'isPristine' | 'readOnly'>;

export interface Props extends Omit<NxFormGroupProps, 'children' | 'isRequired'> {
  content: string;
  onCopyUsingBtn?: (() => void) | null;
  inputProps?: InputProps | null;
}

export const propTypes: ValidationMap<Props> = {
  ...omit(['children', 'isRequired'], nxFormGroupPropTypes),
  content: PropTypes.string.isRequired,
  onCopyUsingBtn: PropTypes.func,
  inputProps: PropTypes.shape(omit(['type', 'value', 'isPristine', 'readOnly'], nxTextInputPropTypes))
};
