/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ValidationMap } from 'react';
import * as PropTypes from 'prop-types';
import { omit } from 'ramda';

import { Props as StatelessProps, propTypes as statelessPropTypes } from '../types';

export type Props = Omit<StatelessProps, 'open'> & {
  defaultOpen?: boolean | null;
};

export const propTypes: ValidationMap<Props> = {
  ...omit(['open'], statelessPropTypes),
  defaultOpen: PropTypes.bool
};
