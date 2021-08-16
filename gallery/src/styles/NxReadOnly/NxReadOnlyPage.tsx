/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode, NxP, NxTextLink, NxTable } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import './NxReadOnlyGridExample.scss';

const nxReadOnlyDlExampleCode = require('./NxReadOnlyDlExample.html'),
    nxReadOnlyGridExampleCode = require('./NxReadOnlyGridExample.html'),
    nxReadOnlyGridExampleStyles = require('./NxReadOnlyGridExample.scss?raw');

const gridCode = [nxReadOnlyGridExampleCode, { content: nxReadOnlyGridExampleStyles, language: 'scss' }];

const NxReadOnlyPage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>.nx-read-only</NxCode> is a design pattern for when you wish to display read-only
          data in a form or elsewhere in a "label followed by content" visual pattern. Typically this occurs when
          displaying data in a form, and when displaying an info grid. <NxCode>.nx-read-only</NxCode> is laid out
          using a description list (<NxCode>&lt;dl&gt;</NxCode>) as the container.
        </NxP>
        <NxP>
          When displayed as a grid, <NxCode>.nx-read-only</NxCode> is often wrapped in
          an <NxCode>.nx-grid-col</NxCode> alongside other <NxCode>.nx-grid-col</NxCode>s wrapping
          other <NxCode>.nx-read-only</NxCode>s in order the create the effect of several grid sections separated
          by vertical dividers. For an example of that combination, see the{' '}
          <NxTextLink href="#/pages/Read-Only%20Grid%20Tile%20Layout">Read-Only Grid Tile Layout</NxTextLink> page.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Class</NxTable.Cell>
              <NxTable.Cell>Convenience Component</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-read-only</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxReadOnly</NxCode></NxTable.Cell>
              <NxTable.Cell>Top level</NxTable.Cell>
              <NxTable.Cell>
                This is the basic wrapper class. It is applied to the <NxCode>&lt;dl&gt;</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-read-only--grid</NxCode></NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>Modifier of <NxCode>.nx-read-only</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This class preps the <NxCode>nx-read-only</NxCode> to display its entries in a grid. While this class
                adds the basic grid properties (<NxCode>display</NxCode>, <NxCode>gap</NxCode>, etc) it is up to
                the caller to specify additional CSS to define their desired grid layout in terms of the number
                and arrangement of the grid cells.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-read-only__label</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxReadOnly.Label</NxCode></NxTable.Cell>
              <NxTable.Cell>Element</NxTable.Cell>
              <NxTable.Cell>
                This class is applied to the <NxCode>&lt;dt&gt;</NxCode>, it represents the label for
                the data below.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-read-only__data</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxReadOnly.Data</NxCode></NxTable.Cell>
              <NxTable.Cell>Element</NxTable.Cell>
              <NxTable.Cell>
                This class is applied to any <NxCode>&lt;dd&gt;</NxCode>'s that appear. The data
                displayed can be any string or HTML markup.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>.nx-read-only__item</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>NxReadOnly.Item</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Child of <NxCode>.nx-read-only--grid</NxCode>, parent of <NxCode>.nx-read-only__label</NxCode> and
                {' '}<NxCode>.nx-read-only__data</NxCode>.
              </NxTable.Cell>
              <NxTable.Cell>
                When creating an <NxCode>.nx-read-only</NxCode> with a grid layout,
                each <NxCode>&lt;dt&gt;</NxCode>/<NxCode>&lt;dd&gt;</NxCode> group must be wrapped
                in a div with this class. This class/element should not be used in non-grid layouts.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Simple Example"
                          id="nx-read-only-simple-example"
                          codeExamples={nxReadOnlyDlExampleCode}
                          htmlExample={nxReadOnlyDlExampleCode}>
        Standard <NxCode>nx-read-only</NxCode> layouts, by default all text wraps.
      </GalleryExampleTile>

      <GalleryExampleTile title="Grid Example"
                          id="nx-read-only-grid-example"
                          codeExamples={gridCode}
                          htmlExample={nxReadOnlyGridExampleCode}>
        An <NxCode>nx-read-only</NxCode> arranged in a grid. The exact layout of the grid is custom to this example.
        In typical usage, the layout of the grid would be usage-specific requiring the use
        of <NxCode>grid-template</NxCode> and/or <NxCode>grid-area</NxCode> CSS properties.  Note the use of
        <NxCode>.nx-read-only__item</NxCode> wrapping each set
        of <NxCode>&lt;dt&gt;</NxCode>/<NxCode>&lt;dd&gt;</NxCode>s.
      </GalleryExampleTile>
    </>
  );
};

export default NxReadOnlyPage;
