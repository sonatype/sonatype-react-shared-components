/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxFileUpload } from '@sonatype/react-shared-components';

export default function NxFileUploadExample() {
  const [files, setFiles] = useState<FileList | null>(null);

  return <NxFileUpload files={files} onChange={setFiles} aria-label="simple file upload" />;
}
