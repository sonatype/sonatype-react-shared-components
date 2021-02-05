/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxCodeSnippetExample from './NxCodeSnippetExample';

import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

const nxCodeSnippetCode = require('!!raw-loader!./NxCodeSnippetExample').default;

export default function NxCodeSnippetPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">NxCodeSnippet</code> creates a read-only text area containing the specified text
          content, along with a button enabling the user to easily copy that text content to the clipboard.
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Default</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>label</NxTableCell>
              <NxTableCell>string | ReactElement</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>The label for the text area's form group</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>sublabel</NxTableCell>
              <NxTableCell>string | ReactElement</NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>empty</NxTableCell>
              <NxTableCell>JSX content to render as the sublabel for the text area's form group</NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>content</NxTableCell>
              <NxTableCell>string</NxTableCell>
              <NxTableCell>Yes</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                The text content to display within the text area and for which to enable copying to the clipboard
              </NxTableCell>
            </NxTableRow>
            <NxTableRow>
              <NxTableCell>HTML <code className="nx-code">&lt;div&gt;</code> Attributes</NxTableCell>
              <NxTableCell>
                <a target="_blank"
                   rel="noopener"
                   href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                  HTML div Attributes
                </a>
              </NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell>N/A</NxTableCell>
              <NxTableCell>
                <code className="nx-code">NxCodeSnippet</code> supports any HTML attribute that's normally
                supported by <code className="nx-code">&lt;div&gt;</code>.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Example"
                          liveExample={NxCodeSnippetExample}
                          codeExamples={nxCodeSnippetCode}>
        An <code className="nx-code">NxCodeSnippet</code> with some content which can be copied to the clipboard.
        The snippet text in this example is an old submission to the International Obfuscated C Code
        Competition.
      </GalleryExampleTile>
    </>
  );
}

