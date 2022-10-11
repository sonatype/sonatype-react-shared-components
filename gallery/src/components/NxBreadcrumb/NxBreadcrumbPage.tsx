/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxBreadcrumbExample from './NxBreadcrumbExample';
import NxBreadcrumbLongSegmentsExample from './NxBreadcrumbLongSegmentsExample';
import NxBreadcrumbConstrainedWidthExample from './NxBreadcrumbConstrainedWidthExample';
import NxBreadcrumbManySegmentsExample from './NxBreadcrumbManySegmentsExample';
import NxBreadcrumbManyLongSegmentsExample from './NxBreadcrumbManyLongSegmentsExample';
import NxBreadcrumbOneSegmentExample from './NxBreadcrumbOneSegmentExample';

const exampleCode = require('./NxBreadcrumbExample?raw'),
    longSegmentsExampleCode = require('./NxBreadcrumbLongSegmentsExample?raw'),
    constrainedWidthExampleCode = require('./NxBreadcrumbConstrainedWidthExample?raw'),
    manySegmentsExampleCode = require('./NxBreadcrumbManySegmentsExample?raw'),
    manyLongSegmentsExampleCode = require('./NxBreadcrumbManyLongSegmentsExample?raw'),
    oneSegmentExampleCode = require('./NxBreadcrumbOneSegmentExample?raw');

const NxBreadcrumbPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP />
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxBreadcrumbExample}
                        codeExamples={exampleCode}>
      A simple example of <NxCode>NxBreadcrumb</NxCode> showing three path segments with short names
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Long Segments"
                        liveExample={NxBreadcrumbLongSegmentsExample}
                        codeExamples={longSegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> showing three path segments with long names which will truncate
      proportionally such that the component maintains its default maximum width
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Constrained Width"
                        liveExample={NxBreadcrumbConstrainedWidthExample}
                        codeExamples={constrainedWidthExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> within a container that is narrower
      than <NxCode>NxBreadcrumb</NxCode>'s maximum width. <NxCode>NxBreadcrumb</NxCode> shrinks to fit within the
      container, and the truncation of the longs adjusts accordingly.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Many Segments"
                        liveExample={NxBreadcrumbManySegmentsExample}
                        codeExamples={manySegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with many segments, such that it gets a dropdown menu
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with Many Long Segments"
                        liveExample={NxBreadcrumbManyLongSegmentsExample}
                        codeExamples={manyLongSegmentsExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with many segments with long names. In addition to the overflow and
      truncation handling, the width of the dropdown expands to an extent before also causing truncation.
    </GalleryExampleTile>

    <GalleryExampleTile title="Example with One Segment"
                        liveExample={NxBreadcrumbOneSegmentExample}
                        codeExamples={oneSegmentExampleCode}>
      An example of <NxCode>NxBreadcrumb</NxCode> with only one segment. This is a special case in which the
      component renders nothing at all – not even the one segment that it was given.
    </GalleryExampleTile>
  </>;

export default NxBreadcrumbPage;
