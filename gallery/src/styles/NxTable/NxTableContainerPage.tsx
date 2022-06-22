/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxWarningAlert, NxTable, NxP, NxCode, NxTextLink, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxTableScrollingExample from './NxTableScrollingExample';

const NxTableFooterCode = require('./NxTableFooterExample.html'),
    NxTableScrollingCode = require('./NxTableScrollingExample.tsx?raw'),
    NxTableUnfilledScrollContainerCode = require('./NxTableUnfilledScrollContainerExample.html'),
    NxTableUnfilledContainerWithFooterCode = require('./NxTableUnfilledContainerWithFooterExample.html');

const NxTableContainerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Some table layouts require an extra wrapper element around
        the <NxCode>&lt;table&gt;</NxCode> proper, that appears visually as part of the table.
        For these situations, a wrapper element using the <NxCode>.nx-table-container</NxCode> class
        can be constructed around the table. This setup is needed for the following functionality:
      </NxP>
      <NxList bulleted>
        <NxList.Item>
          <NxList.Text>Scrolling tables</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Tables with pagination</NxList.Text>
        </NxList.Item>
      </NxList>
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
            <NxTable.Cell><NxCode>.nx-table-container</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTableContainer</NxCode></NxTable.Cell>
            <NxTable.Cell>Element wrapping an <NxCode>.nx-table</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Removes the border from the table itself and instead replicates it on the container element. This allows
              layout patterns within the visually-apparent table that aren't supported
              on <NxCode>&lt;table&gt;</NxCode> itself.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-scrollable--table-container</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Element wrapping an <NxCode>.nx-table</NxCode></NxTable.Cell>
            <NxTable.Cell>
              <NxWarningAlert>
                Deprecated. Replaced by <NxCode>.nx-table-container</NxCode>.
              </NxWarningAlert>
              This class was originally supposed to be used in conjunction
              with <NxCode>.nx-table--scrollable</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-scrollable</NxCode></NxTable.Cell>
            <NxTable.Cell/>
            <NxTable.Cell>Same element as <NxCode>.nx-table-container</NxCode></NxTable.Cell>
            <NxTable.Cell>
              The container element should also have the <NxCode>.nx-scrollable</NxCode> class
              when table scrolling is desired.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-table-container__footer</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxTableContainer<br/>.Footer</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Child of <NxCode>.nx-table-container</NxCode>, after
              the <NxCode>.nx-table</NxCode>.
            </NxTable.Cell>
            <NxTable.Cell>
              Container for elements which should be displayed as if they are a table footer, but affixed to the
              bottom of the container, regardless of the size of the
              actual <NxCode>&lt;table&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NX Table Footer Example"
                        htmlExample={NxTableFooterCode}
                        codeExamples={NxTableFooterCode}>
      A demonstration of a table with a footer element which for the sake of example just contains a button.
      The most common real-world use-case for a footer is a pagination bar, which can be seen in
      the <NxTextLink href="#/pages/Table"><NxCode>NxTable</NxCode></NxTextLink> react
      component examples.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Scrolling Example"
                        id="nx-table-scrolling-example"
                        liveExample={NxTableScrollingExample}
                        codeExamples={NxTableScrollingCode}>
      A demonstration of a table that scrolls due to the presence of a height-constrained, scrolling wrapper element.
      The headers and footer stay stationary as the rows scroll. All tables that scroll "by themselves" (as opposed
      to being part of some broader section of the page that scrolls) should be implemented in this manner in order
      to get the sticky behavior. For scrollable containers which, on the other hand, contain more content in
      addition to a table, sticky headers should not be used and therefore the scrolling-related classes and
      elements should not be used on the table.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Unfilled Example with Footer"
                        id="nx-table-unfilled-with-footer-example"
                        htmlExample={NxTableUnfilledContainerWithFooterCode}
                        codeExamples={NxTableUnfilledContainerWithFooterCode}>
      This example demonstrates what happens when a table is set up with an explicit height and a footer, but fewer
      rows than would be necessary to fill up the height. The footer sticks to the bottoms of the container.
    </GalleryExampleTile>

    <GalleryExampleTile title="NX Table Unfilled Scroll Container Example"
                        id="nx-table-unfilled-scroll-container-example"
                        htmlExample={NxTableUnfilledScrollContainerCode}
                        codeExamples={NxTableUnfilledScrollContainerCode}>
      This example demonstrates what happens when a table is set up to enable scrolling, but does not have enough
      content to cause scrolling.
    </GalleryExampleTile>
  </>;

export default NxTableContainerPage;
