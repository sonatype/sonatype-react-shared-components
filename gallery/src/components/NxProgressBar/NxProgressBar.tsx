/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxProgressBarInlineExample from './NxProgressBarInlineExample';
import NxProgressBarSmallExample from './NxProgressBarSmallExample';
import NxProgressBarNormalExample from './NxProgressBarNormalExample';
import NxProgressBarFullExample from './NxProgressBarFullExample';

const nxProgressBarInlineExampleCode = require('./NxProgressBarInlineExample?raw');
const nxProgressBarSmallExampleCode = require('./NxProgressBarSmallExample?raw');
const nxProgressBarNormalExampleCode = require('./NxProgressBarNormalExample?raw');
const nxProgressBarFullExampleCode = require('./NxProgressBarFullExample?raw');

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
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              If this label is specified the component progress is set to 0% and
              error styling is applied.
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
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxProgressBar Normal Example"
                        id="nx-progress-bar-normal-example"
                        liveExample={NxProgressBarNormalExample}
                        codeExamples={nxProgressBarNormalExampleCode}>
      Examples of "normal" variant (default) <NxCode>NxProgressBar</NxCode> showing 0% progress,
      a partial-progress, success (100% progress), and error state progress bar with and without inlineCounter.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Small Example"
                        id="nx-progress-bar-small-example"
                        liveExample={NxProgressBarSmallExample}
                        codeExamples={nxProgressBarSmallExampleCode}>
      Examples of "small" variant <NxCode>NxProgressBar</NxCode> showing 0% progress,
      a partial-progress, success (100% progress), and error state progress bar with and without inlineCounter.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Full Example"
                        id="nx-progress-bar-full-example"
                        liveExample={NxProgressBarFullExample}
                        codeExamples={nxProgressBarFullExampleCode}>
      Examples of "full" variant <NxCode>NxProgressBar</NxCode> showing 0% progress,
      a partial-progress, success (100% progress), and error state progress bar with and without inlineCounter.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxProgressBar Inline Variant Example"
                        id="nx-progress-bar-inline-example"
                        liveExample={NxProgressBarInlineExample}
                        codeExamples={nxProgressBarInlineExampleCode}>
      Examples of "inline" variant <NxCode>NxProgressBar</NxCode> showing 0% progress,
      a partial-progress, success (100% progress), and error state progress bar.
      Notice this variant hides the percentage counter and label.
    </GalleryExampleTile>
  </>;

export default NxPaginationPage;
