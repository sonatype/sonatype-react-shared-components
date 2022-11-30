/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { createContext, HTMLAttributes, ReactNode } from 'react';

import './NxSkeletonLoader.scss';

export const SkeletonContext = createContext(false);

function _NxSkeletonLoader({ children }: { children: ReactNode }) {
  return (
    <SkeletonContext.Provider value={true}>{children}</SkeletonContext.Provider>
  );
}

function Block(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div role="status" className="nx-skeleton-loader__block" { ...props } />
  );
}

const NxSkeletonLoader = Object.assign(_NxSkeletonLoader, { Block });

export default NxSkeletonLoader;
