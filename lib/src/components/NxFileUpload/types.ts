/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { InputHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export interface SelectedFileProps {
  file: File;
  onDismiss: () => void;
}

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'multiple'> {
  onChange: (files: FileList | null) => void;
  files: FileList | null;
  isRequired?: boolean | null;
  isPristine?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  onChange: PropTypes.func.isRequired,
  files: PropTypes.object as PropTypes.Validator<FileList | null>,
  isRequired: PropTypes.bool,
  isPristine: PropTypes.bool
};
