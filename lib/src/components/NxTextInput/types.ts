/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import {InputHTMLAttributes, TextareaHTMLAttributes} from 'react';

/**
 * The valid values for the `type` Prop
 */
export const inputTypes = ['textarea', 'text', 'password'] as const;

// See https://stackoverflow.com/a/45486495
export type NxTextInputType = (typeof inputTypes)[number];

export type ValidationErrors = string | string[] | null;
export type Validator = ((val: string) => ValidationErrors) | null;

/**
 * Props whose value will typically change as the text input on the page is used, as opposed to props which
 * are typically constant for a given text input.
 */
export interface StateProps {
  value: string;
  trimmedValue: string;
  isPristine: boolean;
  validationErrors?: ValidationErrors;
}

// Imported props from react to provide support for all the regular html attributes
type FusedProps = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>;
// Leave out props to be re-defined
export type HTMLProps = Omit<FusedProps, 'onChange'|'onKeyPress'|'type'|'defaultValue'>;

// Final Props are the HTMLProps & our re-definitions
export type Props = Omit<StateProps, 'trimmedValue'> & HTMLProps & {
  type?: NxTextInputType | null;
  onChange?: ((newVal: string) => void) | null;
  onKeyPress?: ((keyCode: string) => void) | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  type: PropTypes.oneOf([...inputTypes, undefined]),
  value: PropTypes.string.isRequired,
  isPristine: PropTypes.bool.isRequired,
  validationErrors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string]),
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};
