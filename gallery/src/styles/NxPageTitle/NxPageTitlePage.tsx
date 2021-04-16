/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';
import { GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxP, NxCode } from '@sonatype/react-shared-components';

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
        <code className="nx-code">nx-page-title</code> is used at the top of a page, it always has a title, and can also
        have a sub-title, descriptive text, and space for tags or other indicators.
      </NxP>
      <NxP>
        In addition <code className="nx-code">.nx-page-title</code> can have buttons inline with the title.
      </NxP>
      <NxP>
        Note: <code className="nx-code">.nx-page-title</code> replaces
        <code className="nx-code">.nx-tile--top-tile</code> and <code className="nx-code">.nx-tile--title-only</code>.
      </NxP>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Convenience Component</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-page-title</code></td>
            <td className="nx-cell"><code className="nx-code">NxPageTitle</code></td>
            <td className="nx-cell">Top level</td>
            <td className="nx-cell">
              This is the basic wrapper class. The title text is almost always contained in an
              <code className="nx-code">&lt;h1&gt;</code>.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-page-title__page-icon</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Class for an icon that appears to the left of the page title.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-page-title__description</code></td>
            <td className="nx-cell"><code className="nx-code">NxPageTitle.Description</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              If there is page level descriptive text it should be wrapped in a containing
              <code className="nx-code">&lt;div&gt;</code> with this class.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><code className="nx-code">.nx-page-title__tags</code></td>
            <td className="nx-cell"><code className="nx-code">NxPageTitle.Tags</code></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Any "tags" to place in the page header, such as <NxCode>NxTag</NxCode> or
              <NxCode>NxPolicyViolationIndicator</NxCode>, should be wrapped by this element.
            </td>
          </tr>
        </tbody>
      </table>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic page title"
                        id="nx-page-title-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleCode}
                        codeExamples={nxPageTitleCode}>
      A simple example of an <code className="nx-code">nx-page-title</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with actions"
                        id="nx-page-title-actions-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleActionsCode}
                        codeExamples={nxPageTitleActionsCode}>
      An example of <code className="nx-code">nx-page-title</code> with actions in the form of a drop-down.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with sub-title and page description"
                        id="nx-page-title-subtitle-example"
                        defaultCheckeredBackground={true}
                        htmlExample={nxPageTitleSubtitleCode}
                        codeExamples={nxPageTitleSubtitleCode}>
      A simple example of an <code className="nx-code">nx-page-title</code> with a sub-title.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with NxPolicyViolationIndicator"
                        id="nx-page-title-policy-violation-indicator-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxPageTitlePolicyViolationIndicatorExample}
                        codeExamples={nxPageTitlePolicyViolationIndicatorCode}>
      An example of a page title with an <code className="nx-code">NxPolicyViolationIndicator</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Page title with everything"
                        id="nx-page-title-everything-example"
                        defaultCheckeredBackground={true}
                        liveExample={NxPageTitleEverythingExample}
                        codeExamples={nxPageTitleEverythingCode}>
      A simple example of an <code className="nx-code">nx-page-title</code> with a sub-title, actions, tags, and a page
      description.
    </GalleryExampleTile>
  </>;

export default NxPageTitlePage;
