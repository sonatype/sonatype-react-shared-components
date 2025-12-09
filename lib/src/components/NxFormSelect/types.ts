/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithoutRef, Ref } from 'react';
import * as PropTypes from 'prop-types';
import { ValidationErrors } from '../../util/validationUtil';

export interface Props extends Omit<ComponentPropsWithoutRef<'select'>, 'onChange'> {
  ref?: Ref<HTMLDivElement>;
  isPristine?: boolean | null;
  validatable?: boolean | null;
  validationErrors?: ValidationErrors;
  onChange?: ((val: string) => void) | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  isPristine: PropTypes.bool,
  validatable: PropTypes.bool,
  validationErrors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string.isRequired), PropTypes.string])
};
