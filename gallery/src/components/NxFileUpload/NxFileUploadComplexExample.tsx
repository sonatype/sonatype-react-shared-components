/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxFileUpload, nxFileUploadStateHelpers } from '@sonatype/react-shared-components';

export default function NxFileUploadComplexExample() {
  const [state, setState] = useState(nxFileUploadStateHelpers.initialState(null));

  function onChange(files: FileList | null) {
    setState(nxFileUploadStateHelpers.userInput(files));
  }

  return <NxFileUpload { ...state }
                       isRequired
                       onChange={onChange}
                       id="my-file-upload"
                       className="file-upload-class"
                       aria-label="complex file upload"
                       accept="text/plain,image/png"/>;
}
