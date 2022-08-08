/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxFileUpload } from '@sonatype/react-shared-components';

export default function NxFileUploadComplexExample() {
  const [files, setFiles] = useState<FileList | null>(null),
      [isPristine, setIsPristine] = useState(true);

  function onChange(files: FileList | null) {
    setFiles(files);
    setIsPristine(false);
  }

  return <NxFileUpload isRequired
                       isPristine={isPristine}
                       files={files}
                       onChange={onChange}
                       id="my-file-upload"
                       className="file-upload-class"
                       aria-label="complex file upload"
                       accept="text/plain,image/png"/>;
}
