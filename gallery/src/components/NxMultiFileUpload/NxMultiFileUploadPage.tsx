/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTable, NxTextLink, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxMultiFileUploadExample from './NxMultiFileUploadExample';
import NxMultiFileUploadComplexExample from './NxMultiFileUploadComplexExample';
import NxMultiFileUploadDisabledExample from './NxMultiFileUploadDisabledExample';

const nxMultiFileUploadCode = require('./NxMultiFileUploadExample?raw');
const nxMultiFileUploadComplexCode = require('./NxMultiFileUploadComplexExample?raw');
const nxMultiFileUploadDisabledCode = require('./NxMultiFileUploadDisabledExample?raw');

const NxTextInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxMultiFileUpload</NxCode> is an RSC user interface for a file-selection form field
        (an <NxCode>&lt;input type="file"&gt;</NxCode>). Multiple files can be selected with multiple calls
        to the <NxCode>onChange</NxCode> prop. Any selected files are displayed with the name and size of the
        file, along with a button to remove the selection.
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
                {' '}representing the user's current file selections, if any. Typically will be null before
                the user makes a selection.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onChange</NxTable.Cell>
              <NxTable.Cell>(FileList | null) =&gt; void</NxTable.Cell>
              <NxTable.Cell>true</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                A callback which is called whenever the user updates their file selections. The new selection
                {' '}/ selections, in the form of a <NxCode>FileList</NxCode>, is passed as the parameter, and
                added to any existing file selections. If the user has removed all of their selections, the
                callback will receive <NxCode>null</NxCode>. Otherwise, the <NxCode>FileList</NxCode>
                {' '}will always contain at least a single <NxCode>File</NxCode>.
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
                Should be set to true when <NxCode>isRequired</NxCode> is true, but <NxCode>NxMultiFileUpload</NxCode>
                {' '}has not yet been modified by the user.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>className</NxTable.Cell>
              <NxTable.Cell>string</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                Like many React components, <NxCode>NxMultiFileUpload</NxCode> can receive a <NxCode>className</NxCode>.
                {' '}Note however that this <NxCode>className</NxCode> is applied to the top-level
                {' ' }<NxCode>&lt;div&gt;</NxCode> within the component, and not to the <NxCode>&lt;input&gt;</NxCode>
                {' '}like most other native props.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>disabled</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell>
                When true, the component is disabled. On a native level, both the
                file <NxCode>&lt;input&gt;</NxCode> and the button are disabled. This state is only supported when
                no file selection has been made (e.g. when <NxCode>files</NxCode> is null).
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>ref</NxTable.Cell>
              <NxTable.Cell>Ref&lt;HTMLDivElement&gt;</NxTable.Cell>
              <NxTable.Cell>false</NxTable.Cell>
              <NxTable.Cell />
              <NxTable.Cell>
                This component can receive a React ref which gets set with the top-level HTML element of the component
                (a <NxCode>&lt;div&gt;</NxCode>). If DOM access to the <NxCode>&lt;input&gt;</NxCode> is desired, it
                may be accessed via the native DOM APIs on the <NxCode>&lt;div&gt;</NxCode>.
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
                by <NxCode>&lt;input type="file"&gt;</NxCode>. Note however that the <NxCode>input</NxCode> is
                not the top-level DOM element within this component
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>State Helpers</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Like <NxCode>NxTextInput</NxCode>, <NxCode>NxMultiFileUpload</NxCode> comes with helper functions to more
          conveniently manage its state. In this case, these helpers only manage the <NxCode>files</NxCode>
          and <NxCode>isPristine</NxCode> props – validation is not supported other than required value
          validation, which the component handles internally. The helper functions are available on
          the <NxCode>nxFileUploadStateHelpers</NxCode> export. Use of these helpers is not necessary
          on non-required file uploads, as the <NxCode>isPristine</NxCode> flag is not used there.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Parameters</NxTable.Cell>
              <NxTable.Cell>Return Value</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>initialValue</NxCode></NxTable.Cell>
              <NxTable.Cell>files: <NxCode>FileList | null</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Object containing <NxCode>files</NxCode> and <NxCode>isPristine</NxCode> properties
              </NxTable.Cell>
              <NxTable.Cell>
                This function sets up the initial state of a file upload. That is, it returns an object
                containing the specified file list (usually null) and the <NxCode>isPristine</NxCode> flag set
                to <NxCode>true</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>userInput</NxCode></NxTable.Cell>
              <NxTable.Cell>files: <NxCode>FileList | null</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Object containing <NxCode>files</NxCode> and <NxCode>isPristine</NxCode> properties
              </NxTable.Cell>
              <NxTable.Cell>
                This function represents a modification of the state of a file upload. That is, it returns an object
                containing the specified file list and the <NxCode>isPristine</NxCode> flag set
                to <NxCode>false</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxMultiFileUploadExample}
                        codeExamples={nxMultiFileUploadCode}>
      A basic example of an <NxCode>NxMultiFileUpload</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        id="nx-multi-file-upload-complex-example"
                        liveExample={NxMultiFileUploadComplexExample}
                        codeExamples={nxMultiFileUploadComplexCode}>
      An example of <NxCode>NxMultiFileUpload</NxCode> with required-field validation and various extra props. Notice
      that while the <NxCode>id</NxCode> and <NxCode>accept</NxCode> get applied to the <NxCode>&lt;input&gt;</NxCode>,
      the <NxCode>className</NxCode> gets applied to the enclosing <NxCode>&lt;div&gt;</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Disabled Example"
                        liveExample={NxMultiFileUploadDisabledExample}
                        codeExamples={nxMultiFileUploadDisabledCode}>
      An example of <NxCode>NxMultiFileUpload</NxCode> with the disabled prop set to true.
    </GalleryExampleTile>

  </>;

export default NxTextInputPage;
