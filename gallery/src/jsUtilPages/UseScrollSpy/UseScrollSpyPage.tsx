/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxCode, NxTable, NxTile, NxH3, NxInfoAlert } from '@sonatype/react-shared-components';

import { GalleryExampleTile, GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

import UseScrollSpyExample from './UseScrollSpyExample';

const useScrollSpyExampleCode = require('./UseScrollSpyExample?raw');

const UseScrollSpyPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>useScrollSpy</NxCode> is a React hook which facilitates tracking which of several sections on a page
        are currently scrolled into view. As the user scrolls, this hook triggers re-renders of the calling component
        and provides it with updated information about which of the provided refs is currently at the top of
        the visible scrolling area.
      </NxP>

      <NxInfoAlert>
        RSC's <NxCode>useScrollSpy</NxCode> is a wrapper around the
        third-party <NxCode>react-use-scrollspy</NxCode> package.
      </NxInfoAlert>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Parameters</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>refs</NxCode></NxTable.Cell>
              <NxTable.Cell>Object</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                This parameter should be an object whose values are the refs for each identifiable section within
                the scrollable region. The keys of the object are arbitrary names for the corresponding refs, which
                are used throughout the rest of the hook's API.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Return Value</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          This hook returns an object with the following properties:
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>activeRef</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>
                The name (from the <NxCode>refs</NxCode> parameter) of the ref which is currently active
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>scrollTo</NxTable.Cell>
              <NxTable.Cell>function</NxTable.Cell>
              <NxTable.Cell>
                A function which takes a ref name as its parameter and scrolls that ref to the top of the scroll
                container
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={UseScrollSpyExample}
                        codeExamples={useScrollSpyExampleCode}>
      An example of <NxCode>useScrollSpy</NxCode> used in conjunction with a custom UI for showing and adjusting the
      scroll.
    </GalleryExampleTile>
  </>;

export default UseScrollSpyPage;
