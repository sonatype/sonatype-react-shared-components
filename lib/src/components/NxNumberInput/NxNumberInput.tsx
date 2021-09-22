/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

import '../NxTextInput/NxTextInput.scss';
import './NxNumberInput.scss';

import { Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
export { Props, PublicProps, StateProps, propTypes } from './types';

const NxNumberInput = forwardRef<HTMLDivElement, Props>(function NxNumberInput({ className, ...otherProps }, ref) {
  const classes = classnames('nx-number-input', className);

  return <NxTextInput className={classes} ref={ref} { ...otherProps } type="number" />;
});

NxNumberInput.propTypes = propTypes;

export default NxNumberInput;
