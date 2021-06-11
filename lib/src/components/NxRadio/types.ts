/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { LabelHTMLAttributes } from 'react';
import * as PropTypes from 'prop-types';

import { requiredNullableString } from '../../util/customPropTypes';

export type Props = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> & {
  name: string;
  value: string | null;
  onChange?: ((currentValue: string | null) => void) | null;
  isChecked: boolean;
  disabled?: boolean | null;
  radioId?: string | null;
  overflowTooltip?: boolean | null;
};

// In a strictly typescript environment, PropTypes are mostly redundant.  However, they still provide safety when this
// project is consumed by javascript projects
export const propTypes: PropTypes.ValidationMap<Props> = {
  name: PropTypes.string.isRequired,
  value: requiredNullableString,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  radioId: PropTypes.string,
  overflowTooltip: PropTypes.bool
};
