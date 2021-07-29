/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxLoadError } from '../..';
import { NxListErrorProps, nxListErrorPropTypes} from './types';

const NxListError = (props: NxListErrorProps) => {
  const { errorMessage, onClick } = props;
  return (
    <li className='nx-list__item nx-list__item--error'>
      <NxLoadError error={errorMessage} retryHandler={onClick} />
    </li>
  );
};

NxListError.propTypes = nxListErrorPropTypes;

export default NxListError;
