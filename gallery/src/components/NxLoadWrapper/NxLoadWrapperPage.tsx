/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadWrapperErrorRetryExample from './NxLoadWrapperErrorRetryExample';
import NxLoadWrapperLoadingExample from './NxLoadWrapperLoadingExample';
import NxLoadWrapperChildrenExample from './NxLoadWrapperChildrenExample';

const childrenSourceCode = require('./NxLoadWrapperChildrenExample?raw');
const loadingSourceCode = require('./NxLoadWrapperLoadingExample?raw');
const errorRetrySourceCode = require('./NxLoadWrapperErrorRetryExample?raw');

const NxLoadWrapperPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A component that will display either a loading spinner, an error message, or the specified child VDOM
      </NxP>
      <NxP>Props:</NxP>
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
            <NxTable.Cell>error</NxTable.Cell>
            <NxTable.Cell>string | JSX</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A message that represents an error that occurred.  If defined, will be rendered via NxLoadError
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>loading</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If true, and error is unset, a loading spinner will be rendered via NxLoadingSpinner
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>VDOM</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>VDOM to render if loading is false and error is not set</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>retryHandler</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>
              A Retry button will be rendered in the <NxCode>NxLoadError</NxCode> which
              executes this function when clicked.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxP>
        <NxCode>NxLoadWrapper</NxCode> is most often used inside of <NxCode>.nx-page-main</NxCode> or one of its
        descendants. However there are cases where it makes sense to use it at a higher level in order to control
        the display of both <NxCode>.nx-page-main</NxCode> and <NxCode>.nx-page-sidebar</NxCode> simultaneously.
        For examples of ths situation, see
        the <NxTextLink href="#/pages/Page%20Layout%20Examples">Page Layout Examples documentation</NxTextLink>.
      </NxP>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Renders children when not loading or in error"
                        liveExample={NxLoadWrapperChildrenExample}
                        codeExamples={childrenSourceCode}>
      An <NxCode>NxLoadWrapper</NxCode> in which
      neither <NxCode>loading</NxCode> nor <NxCode>error</NxCode> are
      set. As a result, the children are rendered.
    </GalleryExampleTile>

    <GalleryExampleTile title="Loading"
                        liveExample={NxLoadWrapperLoadingExample}
                        codeExamples={loadingSourceCode}>
      An <NxCode>NxLoadWrapper</NxCode> in which the <NxCode>loading</NxCode> flag is
      set, and thus the loading spinner is visible.
    </GalleryExampleTile>

    <GalleryExampleTile title="Error with retry button"
                        liveExample={NxLoadWrapperErrorRetryExample}
                        codeExamples={errorRetrySourceCode}>
      An <NxCode>NxLoadWrapper</NxCode> in which the <NxCode>error</NxCode> property
      is set along with a <NxCode>retryHandler</NxCode>, and thus
      an <NxCode>NxErrorAlert</NxCode> is rendered.
    </GalleryExampleTile>
  </>;

export default NxLoadWrapperPage;
