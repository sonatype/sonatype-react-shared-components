/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxSkeletonLoader, NxThreatCounter } from '@sonatype/react-shared-components';
import React from 'react';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

export default function NxSkeletonLoaderPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxSkeletonLoader.Block style={{ height: '100px', width: '100px' }}/>
        <NxSkeletonLoader.Block style={{ marginLeft: '300px', height: '100px', width: '100px' }}/>
        <NxSkeletonLoader.Block style={{ height: '100px', width: '400px' }}/>
        <NxSkeletonLoader>
          <NxThreatCounter criticalCount={1} severeCount={20} moderateCount={0} layout="grid" />
        </NxSkeletonLoader>
      </GalleryDescriptionTile>
    </>
  );
}
