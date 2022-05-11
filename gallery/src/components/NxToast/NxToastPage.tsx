/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxInfoAlert, NxP, NxTable } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxToastExample from './NxToastExample';
import NxToastMultipleExample from './NxToastMultipleExample';

const NxToastExampleCode = require('./NxToastExample?raw'),
    NxToastMultipleExampleCode = require('./NxToastMultipleExample?raw');

const NxToastPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxToastProvider</NxCode> is the wrapper component to display various kinds of toasts.
        The toasts can be either rendered on the top right or the center of the screen..
      </NxP>
      <NxInfoAlert>
        By default, the toasts are rendered on the top right of the screen.
        To have toasts that are centrally aligned, the prop <NxCode>isCentered</NxCode> needs to be provided.
      </NxInfoAlert>
      <NxP>
        Toasts variations include 'warning', 'success', 'info' and 'error'.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Default</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Toasts Example"
                        id="nx-toast-example"
                        liveExample={NxToastExample}
                        codeExamples={NxToastExampleCode}>
      An example of a the different types of toasts that can be displayed.
    </GalleryExampleTile>

    <GalleryExampleTile title="Multiple Toasts Example"
                        id="nx-toast-multiple-example"
                        liveExample={NxToastMultipleExample}
                        codeExamples={NxToastMultipleExampleCode}>
      An example of displaying multiple toasts at once. This example also shows how a toast
      appears and is stacked on top of other toasts.
    </GalleryExampleTile>
  </>;

export default NxToastPage;
