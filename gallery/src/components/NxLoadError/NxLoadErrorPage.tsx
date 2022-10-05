/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxLoadErrorSimpleExample from './NxLoadErrorSimpleExample';
import NxLoadErrorNoCloseExample from './NxLoadErrorNoCloseExample';
import NxLoadErrorRetryExample from './NxLoadErrorRetryExample';
import NxLoadErrorRetryLongMessageExample from './NxLoadErrorRetryLongMessageExample';

const simpleSourceCode = require('./NxLoadErrorSimpleExample?raw');
const noCloseSourceCode = require('./NxLoadErrorNoCloseExample?raw');
const retrySourceCode = require('./NxLoadErrorRetryExample?raw');
const retryLongMessageSourceCode = require('./NxLoadErrorRetryExample?raw');

const NxLoadErrorPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>Error message with optional Retry button</NxP>
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
              A message that represents an error that occurred.  If null or undefined, NxLoadError will not render
              anything
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>titleMessage</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A message to display before the error output. Defaults to 'An error occurred loading data.'
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>retryHandler</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If this is defined, a Retry button will be rendered with type "button" or "submit" if
              <NxCode>useSubmitRetry</NxCode> is also set to true,
              which executes this function when clicked.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>useSubmitRetry</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If this is set to true, a Retry button will be rendered with type "submit".
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onClose</NxTable.Cell>
            <NxTable.Cell>Function</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A handler that dismisses the alert when called.
              See <NxTextLink href="#/page/NxAlert"><NxCode>NxAlert</NxCode></NxTextLink> for details. This never
              be specified at the same time as <NxCode>retryHandler</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Standard Example with Retry Button"
                        id="nx-load-error-retry-example"
                        codeExamples={retrySourceCode}
                        liveExample={NxLoadErrorRetryExample}>
      In this example, the error is cleared on retry. Note that
      the <NxCode>NxLoadError</NxCode> component
      disappears when that happens. This is the most common usage
      of <NxCode>NxLoadError</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Close Button"
                        codeExamples={simpleSourceCode}
                        liveExample={NxLoadErrorSimpleExample}>
      This example demonstrates a basic <NxCode>NxLoadError</NxCode> for cases where a Retry action
      does not make sense. In most cases, when an <NxCode>NxLoadError</NxCode> does
      not have a Retry button, it should have a Close button. Additionally, this example demonstrates that the
      error message may be JSX as opposed to just a simple string
    </GalleryExampleTile>

    <GalleryExampleTile title="Example without Close Button"
                        codeExamples={noCloseSourceCode}
                        liveExample={NxLoadErrorNoCloseExample}>
      This example demonstrates an <NxCode>NxLoadError</NxCode> which has neither a Retry button nor a
      Close button. This arrangement should only be used for cases where both of the following are true:
      <ol>
        <li>
          The <NxCode>NxLoadError</NxCode> is the only component within the main area of the page.
        </li>
        <li>
          Retrying the load would not help.
        </li>
      </ol>
      Most typically, these conditions are met when the user manually navigates the page URL to an invalid route.
    </GalleryExampleTile>

    <GalleryExampleTile title="Retry Button with Long Text"
                        id="nx-load-error-long-retry-example"
                        codeExamples={retryLongMessageSourceCode}
                        liveExample={NxLoadErrorRetryLongMessageExample}>
      This example demonstrates that when the text is long, the Retry button falls
      underneath of it but still on the right-hand side of the alert.
    </GalleryExampleTile>
  </>;

export default NxLoadErrorPage;
