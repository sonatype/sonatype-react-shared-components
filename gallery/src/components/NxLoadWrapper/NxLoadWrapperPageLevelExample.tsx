/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxLoadWrapper } from '@sonatype/react-shared-components';

const errorMessage = `This is an example of a page-level alert. Use your browser's back button to return to
    another page of the RSC gallery.`


const NxLoadWrapperErrorRetryExample = () => {
  const [error, setError] = useState<string | null>(errorMessage);

  function retryHandler() {
    setError(null);
  }

  return (
    <NxLoadWrapper error={error} retryHandler={retryHandler}>
      <aside className="nx-page-sidebar">Sidebar stuff</aside>
      <main className="nx-page-sidebar">Children will not render until after Retry</main>
    </NxLoadWrapper>
  );
};

export default NxLoadWrapperErrorRetryExample;
