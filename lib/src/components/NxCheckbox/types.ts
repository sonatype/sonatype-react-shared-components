/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { LabelHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

export type Props = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> & {
  checkboxId?: string | null;
  onChange?: (() => void) | null;
  isChecked: boolean;
  disabled?: boolean | null;
};

// In a strictly typescript environment, PropTypes are mostly redundant.  However, they still provide safety when this
// project is consumed by javascript projects
export const propTypes: PropTypes.ValidationMap<Props> = {
  checkboxId: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

