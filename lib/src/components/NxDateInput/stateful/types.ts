/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';

import {
  Props as NxStatefulTextInputProps,
  propTypes as NxStatefulTextInputPropTypes
} from '../../NxTextInput/stateful/types';

export type Props = Omit<NxStatefulTextInputProps, 'type'>;

export const propTypes: PropTypes.ValidationMap<Props> = omit(['type'], NxStatefulTextInputPropTypes);
