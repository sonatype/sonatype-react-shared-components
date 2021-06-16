/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useState } from 'react';
import { NxPageHeader, NxPageMain, NxLoadWrapper } from '@sonatype/react-shared-components';

export default function LegacyLoadWrapperLayout() {
  const [loading, setLoading] = useState(true),
      [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setError('This is an example error');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <NxPageHeader />
      <div className="nx-page-content">
        <NxLoadWrapper loading={loading} retryHandler={() => {}} error={error}>
          <NxPageMain/>
        </NxLoadWrapper>
      </div>
    </>
  );
}
