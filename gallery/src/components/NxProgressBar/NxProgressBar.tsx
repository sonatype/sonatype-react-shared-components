/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxProgressBarExample from './NxProgressBarExample';
import NxProgressBarSuccessExample from './NxProgressBarSuccessExample';
import NxProgressBarErrorExample from './NxProgressBarErrorExample';

const nxProgressBarExampleCode = require('./NxProgressBarExample?raw');
const nxProgressBarSuccessExampleCode = require('./NxProgressBarSuccessExample?raw');
const nxProgressBarErrorExampleCode = require('./NxProgressBarErrorExample?raw');

const NxPaginationPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A progress indicator component showing the completion progress
        of a task with support for labels and percentage counter.
        This component does not support indeterminate state.
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
            <NxTable.Cell>number &gt; 0 and number &ge; <NxCode>value</NxCode></NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is set to 100.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              string
            </NxTable.Cell>
            <NxTable.Cell>yes</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                Default label under the progress bar.
                If <NxCode>labelSuccess</NxCode> is not specified, this label will remain
                shown but with the success style when progress reaches 100%.
              </NxP>
              <NxP>
                When the <NxCode>variant</NxCode> is "small" or "inline" or{' '}
                <NxCode>inlineCounter</NxCode> is set to true, the label will not be displayed.
                Instead, it will be assigned as an aria-label to the progress element.
              </NxP>
              <NxP>
                This is a required property for accessibility.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>labelSuccess</NxCode></NxTable.Cell>
            <NxTable.Cell>
              string
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Shows this label when progress reached 100%.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>labelError</NxCode></NxTable.Cell>
            <NxTable.Cell>
              string
            </NxTable.Cell>
            <NxTable.Cell>Required only when <NxCode>hasError</NxCode> is true</NxTable.Cell>
            <NxTable.Cell>
              This label is shown when <NxCode>hasError</NxCode> is true.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>variant</NxCode></NxTable.Cell>
            <NxTable.Cell>
              "inline" | "small" | "normal" | "full"
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                <strong>"inline": </strong>
                The progress will be an inline element.
                Width is set to 150px and height to 16px.
                Both percentage counter and the label will be hidden.
              </NxP>
              <NxP>
                <strong>"small": </strong>
                The progress width is set to 100px.
                Supports <NxCode>showCounter</NxCode> and <NxCode>inlineCounter</NxCode> but the label will be hidden.
              </NxP>
              <NxP>
                <strong>"normal" (default): </strong>
                The width is set to 300px.
                Supports <NxCode>showCounter</NxCode>, <NxCode>inlineCounter</NxCode>, and label.
              </NxP>
              <NxP>
                <strong>"full": </strong>
                The width will extend to the width of the container.
                Minimum width of 300px.
                Supports <NxCode>showCounter</NxCode>, <NxCode>inlineCounter</NxCode>, and label.
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>showCounter</NxCode></NxTable.Cell>
            <NxTable.Cell>
              boolean
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is set to <NxCode>true</NxCode>.
              Shows a counter indicating the progress percentage.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>inlineCounter</NxCode></NxTable.Cell>
            <NxTable.Cell>
              boolean
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              By default this is set to <NxCode>false</NxCode>.
              Place the percentage counter inline with the progress bar.
              If this is set to true, the label will not be shown.
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
      Examples of all the variations of <NxCode>NxProgressBar</NxCode> with labels set and{' '}
      <NxCode>showCounter</NxCode> set to true.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Success Example"
                        id="nx-progress-bar-success-example"
                        liveExample={NxProgressBarSuccessExample}
                        codeExamples={nxProgressBarSuccessExampleCode}>
      Examples of success state (When progress reached 100%).
      Notice that <NxCode>label</NxCode> is shown in the success style when progress reaches 100%.
      If <NxCode>labelSuccess</NxCode> is specified it will be shown instead of <NxCode>label</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Error Example"
                        id="nx-progress-bar-error-example"
                        liveExample={NxProgressBarErrorExample}
                        codeExamples={nxProgressBarErrorExampleCode}>
      Examples of error state (when <NxCode>hasError</NxCode> is set to true).
      Notice that progress is displayed as 0% when it is in the error state.
      <NxCode>labelError</NxCode> is displayed when specified if <NxCode>hasError</NxCode> is true.
    </GalleryExampleTile>
  </>;

export default NxPaginationPage;
