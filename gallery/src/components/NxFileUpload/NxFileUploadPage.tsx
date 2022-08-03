/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTable, NxTextLink, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFileUploadExample from './NxFileUploadExample';

const nxFileUploadCode = require('./NxFileUploadExample?raw');

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxFileUpload</NxCode> is an RSC user interface for a file-selection form field
        (an <NxCode>&lt;input type="file"&gt;</NxCode>). It supports the selection of a single file only - multiple
        file selection is not supported. Once a file is selected, the name and size of the file is displayed along
        with a button to clear the selection.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>files</NxTable.Cell>
              <NxTable.Cell>FileList | null</NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                The{' '}
                <NxCode>
                  <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/API/FileList" external>
                    FileList
                  </NxTextLink>
                </NxCode>
                {' '}representing the user's current file selection, if any. Because this component does not support
                multiple files, this <NxCode>FileList</NxCode> should contain at most one <NxCode>File</NxCode>.
                Typically will be null before the user makes a selection.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onChange</NxTable.Cell>
              <NxTable.Cell>(FileList | null) =&gt; void</NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                A callback which is called whenever the user changes their file selection. The new selection,
                in the form of a <NxCode>FileList</NxCode>, is passed as the parameter. If the user has cleared their
                selection, the callback will receive <NxCode>null</NxCode>. Otherwise, the <NxCode>FileList</NxCode>
                will always contain a single <NxCode>File</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isRequired</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Should be set to true if file selection is required for the surrounding form to be submitted.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isPristine</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                Only relevant when <NxCode>isRequired</NxCode> is true, this prop sets whether the input is currently
                pristine (has not yet had its value adjusted by the user), in which case the validation error is not
                shown.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Like many React components, <NxCode>NxFileUpload</NxCode> can receive a <NxCode>className</NxCode>. Note
                however that this <NxCode>className</NxCode> is applied to the top-level <NxCode>&lt;div&gt;</NxCode>
                {' '}within the component, and not to the <NxCode>&lt;input&gt;</NxCode> like most other native props.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;input type="file"&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/input/file">
                  HTML file input Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                NxFileUpload supports any HTML attribute that's normally supported
                by <NxCode>&lt;input type="file"&gt;</NxCode>, except for <NxCode>multiple</NxCode>. Note however that 
                the <NxCode>input</NxCode> is not the top-level DOM element within this component
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-file-upload-example"
                        liveExample={NxFileUploadExample}
                        codeExamples={nxFileUploadCode}>
      A basic example of an <NxCode>NxFileUpload</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTextInputPage;
