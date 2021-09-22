/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { InputHTMLAttributes, LabelHTMLAttributes, Validator } from 'react';
import * as PropTypes from 'prop-types';

type CheckboxAttributesProp =
  Omit<InputHTMLAttributes<HTMLInputElement>,
  'id' | 'disabled' | 'checked' | 'readonly' | 'onChange'>;

export type Props = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> & {
  inputId?: string | null;
  onChange?: (() => void) | null;
  isChecked: boolean;
  disabled?: boolean | null;
  checkboxAttributes: CheckboxAttributesProp;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  inputId: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  checkboxAttributes: PropTypes.object as Validator<CheckboxAttributesProp>
};
