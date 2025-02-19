/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import NxFileUpload from '../NxFileUpload';
import { StatefulProps as Props, statefulPropTypes } from '../types';

export { Props };

export default function NxStatefulFileUpload(props: Props) {
  const { onChange: onChangeProp, ...otherProps } = props,
      [files, setFiles] = useState<FileList | null>(null),
      [isPristine, setIsPristine] = useState(true);

  function onChange(files: FileList | null) {
    setIsPristine(false);
    setFiles(files);
    onChangeProp?.(files);
  }

  return <NxFileUpload { ...otherProps } { ...{ files, isPristine, onChange } } />;
}

NxStatefulFileUpload.propTypes = statefulPropTypes;
