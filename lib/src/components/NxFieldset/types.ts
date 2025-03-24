/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithRef, ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import { ValidationErrors } from '../../util/validationUtil';

export interface Props extends ComponentPropsWithRef<'fieldset'> {
  label: Exclude<ReactNode, null | undefined>;
  sublabel?: ReactNode | null;
  isRequired?: boolean | null;
  validationErrors?: ValidationErrors;
  isPristine?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  label: PropTypes.node.isRequired,
  sublabel: PropTypes.node,
  isRequired: PropTypes.bool,
  validationErrors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string]),
  isPristine: PropTypes.bool
};

// The following are for the state helpers
export type RadioValidator = (value: string | null) => ValidationErrors;
export type CheckboxValidator = (values: string[]) => ValidationErrors;
export type TransferListValidator<T> = (selectedItems: T) => ValidationErrors;
export type RadioSetter<T extends string = string> = (v: T | null) => void;
export type CheckboxState = [boolean, () => void];
export type CheckboxInitValues<K extends string | number> = Record<K, boolean>;
export type CheckboxStates<K extends string | number> = Record<K, CheckboxState>;

export interface RadioStateProps<T extends string = string> {
  value: T | null;
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export interface CheckboxStateProps<T extends string = string> {
  values: T[];
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export interface TransferListStateProps<K> {
  selectedItems: K;
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export interface CheckboxGroupHookReturnValue<K extends string | number> {
  states: CheckboxStates<K>;
  isPristine: boolean;
  validationErrors: ValidationErrors;
}

export interface TransferListHookReturnValue<K> {
  state: [K, (selectedItems: K) => void];
  isPristine: boolean;
  validationErrors: ValidationErrors;
}
