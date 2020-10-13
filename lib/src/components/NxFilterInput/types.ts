/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { HTMLAttributes } from 'react';

export type Props = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'|'placeholder'|'className'> & {
  value: string;
  onChange?: ((value: string) => void) | null;
  placeholder?: string | null;
  className?: string | null;
  inputId?: string | null;
  disabled?: boolean | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  inputId: PropTypes.string,
  disabled: PropTypes.bool
};
