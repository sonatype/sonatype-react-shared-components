/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { FormHTMLAttributes, ValidationMap, ReactNode } from 'react';
import * as PropTypes from 'prop-types';
import { ValidationErrors, propTypes as nxTextInputPropTypes } from '../NxTextInput/types';

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
  loading?: boolean | null;
  doLoad?: () => void | null;
  onSubmit: () => void;
  onCancel?: () => void;
  loadError?: string | null;
  submitError?: string | null;
  validationErrors?: ValidationErrors;
  submitBtnClasses?: string | null;
  submitBtnText?: string | null;
  submitMaskState?: boolean | null;
  submitMaskMessage?: string | null;
  submitMaskSuccessMessage?: string | null;
  submitMaskFullscreen?: boolean | null;
  children: ReactNode;
  additionalFooterBtns?: ReactNode | null;
}

export const propTypes: ValidationMap<Props> = {
  loading: PropTypes.bool,
  doLoad: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  loadError: PropTypes.string,
  submitError: PropTypes.string,
  validationErrors: nxTextInputPropTypes.validationErrors,
  submitBtnClasses: PropTypes.string,
  submitBtnText: PropTypes.string,
  submitMaskState: PropTypes.bool,
  submitMaskMessage: PropTypes.string,
  submitMaskSuccessMessage: PropTypes.string,
  submitMaskFullscreen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  additionalFooterBtns: PropTypes.node
};
