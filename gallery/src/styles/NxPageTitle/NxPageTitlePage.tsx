/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxP, NxCode } from '@sonatype/react-shared-components';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxPageTitlePolicyViolationIndicatorExample from './NxPageTitlePolicyViolationIndicatorExample';
import NxPageTitleEverythingExample from './NxPageTitleEverythingExample';

const nxPageTitleCode = require('./NxPageTitleExample.html'),
    nxPageTitleActionsCode = require('./NxPageTitleActionsExample.html'),
    nxPageTitleSubtitleCode = require('./NxPageTitleSubtitleExample.html'),
    nxPageTitlePolicyViolationIndicatorCode =
      require('./NxPageTitlePolicyViolationIndicatorExample.tsx?raw'),
    nxPageTitleEverythingCode = require('./NxPageTitleEverythingExample.tsx?raw');

const NxPageTitlePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>nx-page-title</NxCode> is used at the top of a page, it always has a title, and can also
        have a sub-title, descriptive text, and space for tags or other indicators.
      </NxP>
      <NxP>
        In addition <NxCode>.nx-page-title</NxCode> can have buttons inline with the title.
      </NxP>
      <NxP>
        Note: <NxCode>.nx-page-title</NxCode> replaces
        <NxCode>.nx-tile--top-tile</NxCode> and <NxCode>.nx-tile--title-only</NxCode>.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Convenience Component</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-page-title</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageTitle</NxCode></NxTable.Cell>
            <NxTable.Cell>Top level</NxTable.Cell>
            <NxTable.Cell>
              This is the basic wrapper class. The title text is almost always contained in an
              <NxCode>&lt;h1&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-page-title__headings</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageTitle.Headings</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              If there is a sub-title then the <NxCode>&lt;h1&gt;</NxCode> &amp; <NxCode>&lt;h2&gt;</NxCode> should
              both be wrapped in a containing <NxCode>&lt;hgroup&gt;</NxCode> with this class. If there
              is only an <NxCode>&lt;h1&gt;</NxCode> then this element and its class are optional.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-page-title__sub-title</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageTitle.Subtitle</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              If there is sub-title text it should be wrapped in a containing
              <NxCode>&lt;H2&gt;</NxCode> with this class.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-btn-bar</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxBtnBar</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>.nx-page-title</NxCode> supports the inclusion of buttons on its right-hand side.
              This is accomplished by adding an <NxCode>.nx-btn-bar</NxCode> after the heading elements.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-page-title__description</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageTitle.Description</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              If there is page level descriptive text it should be wrapped in a containing
              <NxCode>&lt;div&gt;</NxCode> with this class.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-page-title__tags</NxCode></NxTable.Cell>
            <NxTable.Cell><NxCode>NxPageTitle.Tags</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Any "tags" to place in the page header, such as <NxCode>NxTag</NxCode> or
              <NxCode>NxPolicyViolationIndicator</NxCode>, should be wrapped by this element.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic page title"
                        id="nx-page-title-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleCode}
                        codeExamples={nxPageTitleCode}>
      A simple example of an <NxCode>nx-page-title</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with actions"
                        id="nx-page-title-actions-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleActionsCode}
                        codeExamples={nxPageTitleActionsCode}>
      An example of <NxCode>nx-page-title</NxCode> with action buttons.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with sub-title and page description"
                        id="nx-page-title-subtitle-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleSubtitleCode}
                        codeExamples={nxPageTitleSubtitleCode}>
      A simple example of an <NxCode>nx-page-title</NxCode> with a sub-title.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with NxPolicyViolationIndicator"
                        id="nx-page-title-policy-violation-indicator-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxPageTitlePolicyViolationIndicatorExample}
                        codeExamples={nxPageTitlePolicyViolationIndicatorCode}>
      An example of a page title with an <NxCode>NxPolicyViolationIndicator</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with everything"
                        id="nx-page-title-everything-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxPageTitleEverythingExample}
                        codeExamples={nxPageTitleEverythingCode}>
      A simple example of an <NxCode>nx-page-title</NxCode> with a sub-title, actions, tags, and a page
      description.
    </GalleryExampleTile>
  </>;

export default NxPageTitlePage;
