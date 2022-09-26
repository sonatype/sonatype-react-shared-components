/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxIndeterminatePaginationFirstPageExample from './NxIndeterminatePaginationFirstPageExample';
import NxIndeterminatePaginationLastPageExample from './NxIndeterminatePaginationLastPageExample';
import NxIndeterminatePaginationFirstAndLastPageExample from './NxIndeterminatePaginationFirstAndLastPageExample';
import NxIndeterminatePaginationExample from './NxIndeterminatePaginationExample';

const nxIndeterminatePaginationCode = require('./NxIndeterminatePaginationExample?raw');
const nxIndeterminatePaginationFirstPageCode = require('./NxIndeterminatePaginationFirstPageExample?raw');
const nxIndeterminatePaginationLastPageCode = require('./NxIndeterminatePaginationLastPageExample?raw');
const nxIndeterminatePaginationFirstAndLastPageCode = require('./NxIndeterminatePaginationFirstAndLastPageExample?raw');

const NxIndeterminatePaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A pagination control for use in cases where the current page number and total number of pages is indeterminate.
        This component simply allows the user to navigate to the next and previous pages.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>onPrevPageSelect</NxCode></NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The callback handler for when the previous page button is clicked. The mouse event is passed as
              an argument.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>onNextPageSelect</NxCode></NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              The callback handler for when the next page button is clicked. The mouse event is passed as
              an argument.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>isFirstPage</NxCode></NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If this is set to true, the previous button is disabled.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>isLastPage</NxCode></NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If this is set to true, the next button is disabled.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxIndeterminatePagination</NxCode> supports any HTML attribute that's normally
              supported by <NxCode>&lt;div&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>

    </GalleryDescriptionTile>

    <GalleryExampleTile title="Default Example"
                        id="nx-indeterminate-pagination-example"
                        liveExample={NxIndeterminatePaginationExample}
                        codeExamples={nxIndeterminatePaginationCode}>
      An <NxCode>NxIndeterminatePagination</NxCode> component.
    </GalleryExampleTile>

    <GalleryExampleTile title="First Page Example"
                        id="nx-indeterminate-pagination-first-page-example"
                        liveExample={NxIndeterminatePaginationFirstPageExample}
                        codeExamples={nxIndeterminatePaginationFirstPageCode}>
      An<NxCode>NxIndeterminatePagination</NxCode> first page example.{' '}
      The previous button is disabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="Last Page Example"
                        id="nx-indeterminate-pagination-last-page-example"
                        liveExample={NxIndeterminatePaginationLastPageExample}
                        codeExamples={nxIndeterminatePaginationLastPageCode}>
      An <NxCode>NxIndeterminatePagination</NxCode> last page example.{' '}
      The next button is disabled.
    </GalleryExampleTile>

    <GalleryExampleTile title="First And Last Page Example"
                        id="nx-indeterminate-pagination-example"
                        liveExample={NxIndeterminatePaginationFirstAndLastPageExample}
                        codeExamples={nxIndeterminatePaginationFirstAndLastPageCode}>
      An <NxCode>NxIndeterminatePagination</NxCode> first and last page example.{' '}
      Notice that both buttons are disabled.
    </GalleryExampleTile>
  </>;

export default NxIndeterminatePaginationPage;
