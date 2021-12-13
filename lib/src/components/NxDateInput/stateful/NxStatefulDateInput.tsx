/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';

import { PrivateNxStatefulTextInput } from '../../NxTextInput/stateful/NxStatefulTextInput';

import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

const NxStatefulDateInput = forwardRef<HTMLDivElement, Props>(
    (props, ref) => <PrivateNxStatefulTextInput { ...props } type="date" ref={ref} />
);

NxStatefulDateInput.propTypes = propTypes;

export default NxStatefulDateInput;
