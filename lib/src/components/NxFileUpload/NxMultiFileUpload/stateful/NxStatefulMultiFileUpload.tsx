/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState } from 'react';
import NxMultiFileUpload from '../NxMultiFileUpload';
import { initialState, userInput } from '../../stateHelpers';
import { StatefulProps as Props, statefulPropTypes } from '../../types';

export { Props };

const NxStatefulMultiFileUpload = forwardRef<HTMLDivElement, Props>(function NxStatefulMultiFileUpload(props, ref) {
  const { onChange: onChangeProp, ...otherProps } = props,
      [filesState, setFilesState] = useState(initialState(null));

  function onChange(files: FileList | null) {
    setFilesState(userInput(files));
    onChangeProp?.(files);
  }

  return <NxMultiFileUpload ref={ref} { ...otherProps } onChange={onChange} { ...filesState } />;
});

NxStatefulMultiFileUpload.propTypes = statefulPropTypes;

export default NxStatefulMultiFileUpload;
