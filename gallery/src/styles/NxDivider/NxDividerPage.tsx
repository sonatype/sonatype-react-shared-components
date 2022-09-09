/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile, NxInfoAlert, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxDividerCode = require('./NxDividerExample.html');

const NxDividerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>.nx-divider</NxCode> is the standard RSC class for rendering a horizontal divider.
      </NxP>
      <NxP>
        <NxCode>NxDivider</NxCode> is provided as a convenience component that encapsulates
        the <NxCode>.nx-divider</NxCode> class and an <NxCode>{'<hr>'}</NxCode> tag to create a horizontal divider.
      </NxP>
      <NxInfoAlert>
        The <NxCode>.nx-divider</NxCode> class is only used to create horizontal dividers.
        For vertical dividers, please refer to the Grid guidelines
        listed <NxTextLink href="#/pages/Grid">here</NxTextLink>.
      </NxInfoAlert>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDivider</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>class</NxTable.Cell>
              <NxTable.Cell>convenience component</NxTable.Cell>
              <NxTable.Cell>location</NxTable.Cell>
              <NxTable.Cell>details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>
                <NxCode>.nx-divider</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxDivider</NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Element</NxTable.Cell>
              <NxTable.Cell>Horizontal divider element.</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        htmlExample={nxDividerCode}
                        codeExamples={nxDividerCode}>
      A simple example of <NxCode>NxDivider</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxDividerPage;
