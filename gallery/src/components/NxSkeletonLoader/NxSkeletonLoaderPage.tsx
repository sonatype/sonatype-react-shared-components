/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxH2, NxP, NxSkeletonLoader, NxThreatCounter, NxTile } from '@sonatype/react-shared-components';
import React from 'react';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

export default function NxSkeletonLoaderPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <NxSkeletonLoader.Block style={{ height: '100px', width: '100px' }}/>
        <NxSkeletonLoader.Block style={{ marginLeft: '300px', height: '100px', width: '100px' }}/>
        <NxSkeletonLoader.Block style={{ height: '100px', width: '400px' }}/>
        <div className="gallery-example--checkered-background">
          <div className="gallery-example-live">
            <NxSkeletonLoader>
              <NxTile>
                <NxTile.Header>
                  <NxTile.Headings>
                    <NxTile.HeaderTitle>
                      <NxH2>Foo Bar</NxH2>
                    </NxTile.HeaderTitle>
                    <NxTile.HeaderSubtitle>apgiadfpgnapogadopfjia</NxTile.HeaderSubtitle>
                  </NxTile.Headings>
                </NxTile.Header>
                <NxTile.Content>
                  <NxP>Foo bar</NxP>
                  <NxThreatCounter criticalCount={1} severeCount={20} moderateCount={0} layout="grid" />
                </NxTile.Content>
              </NxTile>
            </NxSkeletonLoader>
          </div>
        </div>
        <NxP>Foo bar<br/>Aasdf<br/>qwerty</NxP>
      </GalleryDescriptionTile>
    </>
  );
}
