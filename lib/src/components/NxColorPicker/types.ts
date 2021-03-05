/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

import { Props as NxFieldsetProps, propTypes as nxFieldsetPropTypes } from '../NxFieldset/types';
import { SelectableColor, selectableColors } from '../../util/selectableColors';

export interface Props extends Omit<NxFieldsetProps, 'onChange'> {
  value?: SelectableColor | null;
  onChange?: ((currentValue: SelectableColor) => void) | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...nxFieldsetPropTypes,
  value: PropTypes.oneOf(selectableColors),
  onChange: PropTypes.func
};
