/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { FormEvent, SelectHTMLAttributes } from 'react';

// Final Props are the HTMLProps & our re-definitions
export interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  onChange?: ((newVal: string, e: FormEvent<HTMLSelectElement>) => void) | null;
  value: string;
  isPristine: boolean;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  value: PropTypes.string.isRequired,
  isPristine: PropTypes.bool.isRequired,
  onChange: PropTypes.func
};
