/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

import { NxTextInputType, PublicNxTextInputType, DivAttrs, InputAttrs, propTypes as nxTextInputPropTypes, Validator }
  from '../types';

export interface Props extends DivAttrs {
  type?: NxTextInputType | null;
  defaultValue?: string | null;
  validator?: Validator;
  onChange?: ((newVal: string) => void) | null;
  onKeyPress?: ((newVal: string) => void) | null;
  disabled?: boolean | null;
  placeholder?: string | undefined;
  inputAttributes?: InputAttrs;
}

export interface PublicProps extends Props {
  type?: PublicNxTextInputType | null;
}

export const propTypes: PropTypes.ValidationMap<PublicProps> = {
  type: nxTextInputPropTypes.type,
  defaultValue: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([undefined])]),
  validator: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func
};
