/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxProgressBarExample from './NxProgressBarExample';
import NxProgressBarSuccessExample from './NxProgressBarSuccessExample';
import NxProgressBarErrorExample from './NxProgressBarErrorExample';
import NxProgressBarInlineExample from './NxProgressBarInlineExample';

const nxProgressBarExampleCode = require('./NxProgressBarExample?raw');
const nxProgressBarSuccessExampleCode = require('./NxProgressBarSuccessExample?raw');
const nxProgressBarErrorExampleCode = require('./NxProgressBarErrorExample?raw');
const nxProgressBarInlineExampleCode = require('./NxProgressBarInlineExample?raw');

const NxPaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        Progress indicator component showing the completion progress
        of a task with support of labels and percentage counter.
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
            <NxTable.Cell><NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>0 &ge; number &le; <NxCode>max</NxCode></NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>Value indicating progress. A number from  0 to <NxCode>max</NxCode>.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>max</NxCode></NxTable.Cell>
            <NxTable.Cell>0 &gt; number, number &ge; <NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is set to 100.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>variant</NxCode></NxTable.Cell>
            <NxTable.Cell>
              "inline" | "small" | "normal" | "full"
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is set to "normal", this will set the width to 300px.
              Whent it is set to "small", the width is set to 100px.
              Percentage counter will still be displayed but labels will hidden.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>showCounter</NxCode></NxTable.Cell>
            <NxTable.Cell>
              boolean
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is <NxCode>false</NxCode>. Show a counter showing the progress percentage.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>inlineCounter</NxCode></NxTable.Cell>
            <NxTable.Cell>
              boolean
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is <NxCode>false</NxCode>.
              Show the counter inline with the progress bar.
              If this is set to true, labels will not be shown.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              string
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Shows a label under the progress bar.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>labelSuccess</NxCode></NxTable.Cell>
            <NxTable.Cell>
              string
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Shows a success label when progress reached 100%.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>labelError</NxCode></NxTable.Cell>
            <NxTable.Cell>
              string
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              This label is shown when <NxCode>hasError</NxCode> is set to true.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>hasError</NxCode></NxTable.Cell>
            <NxTable.Cell>
              boolean
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Sets progress to 0. show <NxCode>labelError</NxCode> if it is set.
              Changes the counter color to red.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxProgressBar Example"
                        id="nx-progress-bar-example"
                        liveExample={NxProgressBarExample}
                        codeExamples={nxProgressBarExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Success Example"
                        id="nx-progress-bar-success-example"
                        liveExample={NxProgressBarSuccessExample}
                        codeExamples={nxProgressBarSuccessExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Error Example"
                        id="nx-progress-bar-error-example"
                        liveExample={NxProgressBarErrorExample}
                        codeExamples={nxProgressBarErrorExampleCode}>
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Inline Example"
                        id="nx-progress-bar-inline-example"
                        liveExample={NxProgressBarInlineExample}
                        codeExamples={nxProgressBarInlineExampleCode}>
    </GalleryExampleTile>
  </>;

export default NxPaginationPage;
