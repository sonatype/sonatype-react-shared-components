/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { InputHTMLAttributes, LabelHTMLAttributes, Validator } from 'react';
import * as PropTypes from 'prop-types';

export type InputAttributesProp =
  Omit<InputHTMLAttributes<HTMLInputElement>,
  'disabled' | 'checked' | 'readOnly' | 'onChange'>;

interface BaseProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  checkboxId?: string | null;
  disabled?: boolean | null;
  overflowTooltip?: boolean | null;
  inputAttributes?: InputAttributesProp;
}

export interface Props extends BaseProps {
  onChange?: ((newVal: boolean) => void) | null;
  isChecked: boolean;
}

export interface StatefulProps extends BaseProps {
  onChange?: ((isChecked: boolean) => void) | null;
  defaultChecked: boolean;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  checkboxId: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  overflowTooltip: PropTypes.bool,
  inputAttributes: PropTypes.object as Validator<InputAttributesProp>
};

export const statefulPropTypes: PropTypes.ValidationMap<StatefulProps> = {
  checkboxId: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  overflowTooltip: PropTypes.bool,
  inputAttributes: PropTypes.object as Validator<InputAttributesProp>
};
