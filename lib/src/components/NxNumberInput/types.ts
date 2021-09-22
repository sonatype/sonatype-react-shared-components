/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { PublicProps as NxTextInputProps } from '../NxTextInput/types';

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

export type NumberInputElement = HTMLInputElement;

export type Props = Omit<NxTextInputProps, 'type'>;

export type PublicProps = Omit<Props, 'prefixContent'>;

export const propTypes: PropTypes.ValidationMap<PublicProps> = {
  value: PropTypes.string.isRequired,
  isPristine: PropTypes.bool.isRequired,
  validationErrors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string]),
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  validatable: PropTypes.bool
};
