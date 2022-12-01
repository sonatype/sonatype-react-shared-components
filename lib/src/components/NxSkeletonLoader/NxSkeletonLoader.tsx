/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { createContext, ReactNode } from 'react';
import withClass from '../../util/withClass';

import './NxSkeletonLoader.scss';

export const SkeletonContext = createContext(false);

function _NxSkeletonLoader({ children }: { children: ReactNode }) {
  return (
    <div className="nx-skeleton-loader" aria-busy="true">
      <div className="nx-skeleton-loader__status" role="status">Loading…</div>
      <SkeletonContext.Provider value={true}>{children}</SkeletonContext.Provider>
    </div>
  );
}

const NxSkeletonLoader = Object.assign(_NxSkeletonLoader, {
  Block: withClass('div', 'nx-skeleton-loader__block'),
  Text: withClass('span', 'nx-skeleton-loader__text')
});

export default NxSkeletonLoader;
