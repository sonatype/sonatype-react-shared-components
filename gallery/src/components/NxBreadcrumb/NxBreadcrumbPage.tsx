/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxAccordion, NxCode, NxH2, NxH3, NxInfoAlert, NxP, NxStatefulAccordion, NxTable, NxTextLink, NxTile }
  from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxBreadcrumbExample from './NxBreadcrumbExample';
import NxBreadcrumbLongSegmentsExample from './NxBreadcrumbLongSegmentsExample';
import NxBreadcrumbConstrainedWidthExample from './NxBreadcrumbConstrainedWidthExample';
import NxBreadcrumbManySegmentsExample from './NxBreadcrumbManySegmentsExample';
import NxBreadcrumbManyLongSegmentsExample from './NxBreadcrumbManyLongSegmentsExample';
import NxBreadcrumbOneSegmentExample from './NxBreadcrumbOneSegmentExample';
import NxBreadcrumbFourSegmentsExample from './NxBreadcrumbFourSegmentsExample';
import NxBreadcrumbFiveSegmentsExample from './NxBreadcrumbFiveSegmentsExample';
import CodeExample from '../../CodeExample';
import { GalleryTileFooter } from '../../gallery-components/GalleryTileFooter';

const exampleCode = require('./NxBreadcrumbExample?raw'),
    longSegmentsExampleCode = require('./NxBreadcrumbLongSegmentsExample?raw'),
    constrainedWidthExampleCode = require('./NxBreadcrumbConstrainedWidthExample?raw'),
    manySegmentsExampleCode = require('./NxBreadcrumbManySegmentsExample?raw'),
    manyLongSegmentsExampleCode = require('./NxBreadcrumbManyLongSegmentsExample?raw'),
    oneSegmentExampleCode = require('./NxBreadcrumbOneSegmentExample?raw'),
    fourSegmentsExampleCode = require('./NxBreadcrumbFourSegmentsExample?raw'),
    fiveSegmentsExampleCode = require('./NxBreadcrumbFiveSegmentsExample?raw'),
    globalheaderExampleCode = require('./NxBreadcrumbGlobalHeaderExample?raw');

const NxBreadcrumbPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxBreadcrumb</NxCode> constructs a breadcrumb-style navigation aid useful for hierarchical pages.
        The component receives an ordered list of named pages, starting at the root of the hierarchy and traversing
        down to the current page. Generally, for each of these "crumbs" the component renders a link. The last
        crumb, which represents the current page, is not rendered as a link but rather as plain text. The component
        renders up to four pages/links in a line of text. If there are more than four crumbs, then only the root
        crumb and the final two crumbs are rendered inline, and the rest are populated into a dropdown menu.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
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
              <NxTable.Cell>crumbs</NxTable.Cell>
              <NxTable.Cell>
                Array of objects each containing <NxCode>name</NxCode> and <NxCode>href</NxCode> strings
              </NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>
                The sequence of ancestor pages in the hierarchy, ending in the final page. This list
                must contain at least two entries in order for <NxCode>NxBreadcrumb</NxCode> to render anything at
                all; if it contains one or zero entries, no breadcrumb DOM will be rendered. The first entry in this
                list must represent the root page in the hierarchy. From there, each item must represent the next
                ancestor down the chain on the way to the current page, and the last entry must represent the current
                page. The <NxCode>name</NxCode> within each entry is the rendered label for the crumb, while
                the <NxCode>href</NxCode> is the URL of the page in question.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isDropdownOpen</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>Whether or not the dropdown (if present) is open or closed</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onToggleDropdown</NxTable.Cell>
              <NxTable.Cell>Function</NxTable.Cell>
              <NxTable.Cell>Yes</NxTable.Cell>
              <NxTable.Cell>The callback to execute when the user toggles the open state of the dropdown</NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;nav&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/nav">
                  HTML nav Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxBreadcrumb</NxCode> supports any HTML attribute that's normally
                supported by <NxCode>&lt;nav&gt;</NxCode> elements.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Semantics and Accessibility</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          <NxCode>NxBreadcrumb</NxCode> renders as a <NxCode>&lt;nav&gt;</NxCode> element with its default role
          of <NxCode>navigation</NxCode>. It has a default accessible name of "breadcrumbs" which may be overridden
          by specifying an alternative <NxCode>aria-label</NxCode> prop.
        </NxP>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>A Note about the Examples</NxH3>
        </NxTile.SubsectionHeader>
        <NxInfoAlert>
          <NxCode>NxBreadcrumb</NxCode> should only be used with links that navigate within the current application
          in a hierarchical manner. Using it in such a way here, within the RSC gallery, is not feasible as there
          are not deep hiearchies within the organization of the gallery. As a result, the examples below have
          all been constructed using links to external, third-party websites. In practice, this is not how they
          would be used.
        </NxInfoAlert>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        id="nx-breadcrumb-simple-example"
                        liveExample={NxBreadcrumbExample}
                        codeExamples={exampleCode}>
      A simple example of <NxCode>NxBreadcrumb</NxCode> showing three path segments with short names.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Long Segments"
                        id="nx-breadcrumb-long-segments-example"
                        liveExample={NxBreadcrumbLongSegmentsExample}
                        codeExamples={longSegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> showing three path segments with long names. Truncation occurs
      such that the longest name is truncated first, until it reaches the length of the second-longest name, after
      which point those two truncate at equal lengths until reaching the length of the third-longest name, and so
      on until all names are truncated to the equal lengths. In this example, there is enough space that only the
      longest name truncates.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Constrained Width"
                        id="nx-breadcrumb-constrained-width-example"
                        liveExample={NxBreadcrumbConstrainedWidthExample}
                        codeExamples={constrainedWidthExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> within a container that is narrower
      than <NxCode>NxBreadcrumb</NxCode>'s maximum width. <NxCode>NxBreadcrumb</NxCode> shrinks to fit within the
      container, and all of the names must truncate in order to fit.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Many Segments"
                        id="nx-breadcrumb-many-segments-example"
                        liveExample={NxBreadcrumbManySegmentsExample}
                        codeExamples={manySegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with many segments, such that it gets a dropdown menu.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Many Long Segments"
                        id="nx-breadcrumb-many-long-segments-example"
                        liveExample={NxBreadcrumbManyLongSegmentsExample}
                        codeExamples={manyLongSegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with many segments with long names. In addition to the overflow and
      truncation handling, the width of the dropdown expands to an extent before also causing truncation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with One Segment"
                        id="nx-breadcrumb-one-segment-example"
                        liveExample={NxBreadcrumbOneSegmentExample}
                        codeExamples={oneSegmentExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with only one segment. This is a special case in which the
      component renders nothing at all – not even the one segment that it was given.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Four Segments"
                        id="nx-breadcrumb-four-segments-example"
                        liveExample={NxBreadcrumbFourSegmentsExample}
                        codeExamples={fourSegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with exactly four segments. This is the largest number of segments
      that may be present before the dropdown will be rendered – the dropdown will always contain at least two items.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Five Segments"
                        id="nx-breadcrumb-five-segments-example"
                        liveExample={NxBreadcrumbFiveSegmentsExample}
                        codeExamples={fiveSegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with exactly five segments. This is the smallest number of segments
      that will cause the dropdown to be rendered (containing two of the segments).
    </GalleryExampleTile>
  </>;

export default NxBreadcrumbPage;
