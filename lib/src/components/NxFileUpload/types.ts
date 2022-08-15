/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { InputHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export interface SelectedFileProps {
  descriptionId: string;
  file: File;
  onDismiss: () => void;
}

// Props for NxStatefulFileUpload
export interface StatefulProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'multiple'> {
  onChange: (files: FileList | null) => void;
  isRequired?: boolean | null;
}

// Props representing bits of state that need to be managed
export interface StateProps {
  files: FileList | null;
  isPristine?: boolean | null;
}

// Props for NxFileUpload
export type Props = StatefulProps & StateProps;

export const statefulPropTypes: PropTypes.ValidationMap<StatefulProps> = {
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...statefulPropTypes,
  files: PropTypes.object as PropTypes.Validator<FileList | null>,
  isPristine: PropTypes.bool
};
