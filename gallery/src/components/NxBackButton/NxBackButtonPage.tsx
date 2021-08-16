/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTable, NxCode, NxP } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxBackButtonSimpleExample from './NxBackButtonSimpleExample';
import NxBackButtonTitleExample from './NxBackButtonTitleExample';
import NxBackButtonTextExample from './NxBackButtonTextExample';

const simpleSourceCode = require('./NxBackButtonSimpleExample?raw');
const titleSourceCode = require('./NxBackButtonTitleExample?raw');
const textSourceCode = require('./NxBackButtonTextExample?raw');

const NxBackButtonPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>A standard UI element for navigating back to a previous page</NxP>
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
            <NxTable.Cell>targetPageTitle</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>The name of the page to navigate to</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>text</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>Optional custom text to override the back button's default text logic</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>href</NxTable.Cell>
            <NxTable.Cell>URL</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The URL to navigate to when the back button is clicked</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Back button with no title or text specified"
                        id="nx-back-button-simple-example"
                        liveExample={NxBackButtonSimpleExample}
                        codeExamples={simpleSourceCode}>
      Basic <NxCode>NxBackButton</NxCode> example.
    </GalleryExampleTile>

    <GalleryExampleTile title="Back button with targetPageTitle specified"
                        id="nx-back-button-title-example"
                        liveExample={NxBackButtonTitleExample}
                        codeExamples={titleSourceCode}>
      A demonstration of using the <NxCode>targetPageTitle</NxCode> to generate the text content.
    </GalleryExampleTile>

    <GalleryExampleTile title="Back button with custom text specified"
                        id="nx-back-button-text-example"
                        liveExample={NxBackButtonTextExample}
                        codeExamples={textSourceCode}>
      A demonstration of using completely custom text for the <NxCode>NxBackButton</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxBackButtonPage;
