/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faEdit, faWalking } from '@fortawesome/free-solid-svg-icons';
import { NxH2, NxP, NxSkeletonLoader, NxSpan, NxTable, NxThreatCounter, NxThreatIndicator, NxTile }
  from '@sonatype/react-shared-components';
import React, { useEffect, useState } from 'react';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

export default function NxSkeletonLoaderPage() {
  const [showSecondTile, setShowSecondTile] = useState(false);

  useEffect(function() {
    setTimeout(() => { setShowSecondTile(true); }, 800);
  }, []);

  return (
    <>
      <GalleryDescriptionTile>
        {/*
        <NxSkeletonLoader.Block style={{ height: '100px', width: '100px' }}/>
        <NxSkeletonLoader.Block style={{ marginLeft: '300px', height: '100px', width: '100px' }}/>
        <NxSkeletonLoader.Block style={{ height: '100px', width: '400px' }}/>
        <NxSkeletonLoader.Block style={{ height: '100px', width: '3000px' }}/>
        */}
        {/* Large skeleton block with icon that is wider than it is tall */}
        <NxSkeletonLoader.Block style={{ height: '300px', width: '300px' }} icon={faEdit} />
        {/* Large skeleton block with icon that is taller than it is wide */}
        <NxSkeletonLoader.Block style={{ height: '300px', width: '300px' }} icon={faWalking} />
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
                  <NxTable>
                    <NxTable.Head>
                      <NxTable.Row>
                        <NxTable.Cell>Foo</NxTable.Cell>
                        <NxTable.Cell>Bar</NxTable.Cell>
                        <NxTable.Cell>Baz</NxTable.Cell>
                      </NxTable.Row>
                    </NxTable.Head>
                    <NxTable.Body>
                      <NxTable.Row>
                        <NxTable.Cell>
                          <NxThreatIndicator policyThreatLevel={8} />
                          <NxSpan>Foo</NxSpan>
                        </NxTable.Cell>
                        <NxTable.Cell>
                          <NxP>Bar</NxP>
                        </NxTable.Cell>
                        <NxTable.Cell>
                          <NxSpan>Baz</NxSpan>
                        </NxTable.Cell>
                      </NxTable.Row>
                    </NxTable.Body>
                  </NxTable>
                </NxTile.Content>
              </NxTile>
              { showSecondTile &&
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
                    <NxTable>
                      <NxTable.Head>
                        <NxTable.Row>
                          <NxTable.Cell>Foo</NxTable.Cell>
                          <NxTable.Cell>Bar</NxTable.Cell>
                          <NxTable.Cell>Baz</NxTable.Cell>
                        </NxTable.Row>
                      </NxTable.Head>
                      <NxTable.Body>
                        <NxTable.Row>
                          <NxTable.Cell>
                            <NxThreatIndicator policyThreatLevel={8} />
                            <NxSpan>Foo</NxSpan>
                          </NxTable.Cell>
                          <NxTable.Cell>
                            <NxP>Bar</NxP>
                          </NxTable.Cell>
                          <NxTable.Cell>
                            <NxSpan>Baz</NxSpan>
                          </NxTable.Cell>
                        </NxTable.Row>
                      </NxTable.Body>
                    </NxTable>
                  </NxTile.Content>
                </NxTile>
              }
            </NxSkeletonLoader>
          </div>
        </div>
        <NxP>Foo bar<br/>Aasdf<br/>qwerty</NxP>
      </GalleryDescriptionTile>
    </>
  );
}
