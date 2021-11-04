/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { omit } from 'ramda';

import NxTextInput, { } from '../../components/NxTextInput/NxTextInput';

import {
  Props,
  propTypes
} from './types';

export { Props, PublicProps, StateProps, propTypes } from './types';

const NxDateInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const filteredProps = omit(['type'], props);

  return <NxTextInput type="date"
                      ref={ref}
                      { ...filteredProps } />;
});

NxDateInput.propTypes = propTypes;

export default NxDateInput;
