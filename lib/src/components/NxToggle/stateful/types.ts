/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentProps } from 'react';
import * as PropTypes from 'prop-types';

import { InputAttributesProp } from '../types';

export interface Props extends Omit<ComponentProps<'label'>, 'onChange'> {
  inputId?: string | null;
  onChange?: ((isChecked: boolean) => void) | null;
  defaultChecked: boolean;
  disabled?: boolean | null;
  inputAttributes?: InputAttributesProp;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  inputId: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  inputAttributes: PropTypes.object as PropTypes.Validator<InputAttributesProp>
};
