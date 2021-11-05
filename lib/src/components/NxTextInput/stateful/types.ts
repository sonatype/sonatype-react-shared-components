/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

import { NxTextInputType, HTMLProps, propTypes as nxTextInputPropTypes, Validator } from '../types';

export type Props = HTMLProps & {
  type?: NxTextInputType | null;
  defaultValue?: string | null;
  validator?: Validator;
  onChange?: ((newVal: string) => void) | null;
  onKeyPress?: ((newVal: string) => void) | null;
};

export const propTypes: PropTypes.ValidationMap<Props> = {
  type: nxTextInputPropTypes.type,
  defaultValue: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([undefined])]),
  validator: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};
