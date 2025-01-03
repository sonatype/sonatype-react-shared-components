/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export type InputAttributesProp =
  Omit<InputHTMLAttributes<HTMLInputElement>,
  'disabled' | 'checked' | 'readonly' | 'onChange'>;

export type Props = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> & {
  inputId?: string | null;
  onChange?: ((newVal: boolean) => void) | null;
  isChecked: boolean;
  disabled?: boolean | null;
  inputAttributes?: InputAttributesProp;
};

// For testing
export type PropsWithAnyInputAttributes = Props & {
  inputAttributes?: { [key: string]: unknown };
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  inputId: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  inputAttributes: PropTypes.object as PropTypes.Validator<InputAttributesProp>
};
