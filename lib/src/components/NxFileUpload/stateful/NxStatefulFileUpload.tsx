/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import NxFileUpload from '../NxFileUpload';
import { StatefulProps as Props } from '../types';

export { Props };

export default function NxStatefulFileUpload({ onChange: onChangeProp, ...otherProps }: Props) {
  const [files, setFiles] = useState<FileList | null>(null);

  function onChange(files: FileList | null) {
    setFiles(files);
    onChangeProp(files);
  }

  return <NxFileUpload { ...otherProps } files={files} onChange={onChange} />;
}
