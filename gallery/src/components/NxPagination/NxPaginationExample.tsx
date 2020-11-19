/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxPagination } from '@sonatype/react-shared-components';

export default function NxPaginationExample() {
  const [page, setPage] = useState(17);

  return (
    <div>
      <div id="pagination-example-page" aria-live="polite" aria-atomic="true" aria-relevant="all">Example {page + 1}</div>
      <NxPagination aria-controls="pagination-example-page" onChange={setPage} pageCount={41} currentPage={page} />
    </div>
  );
}
