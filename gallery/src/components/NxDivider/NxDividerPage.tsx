/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxH3, NxTile, NxInfoAlert, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxDividerHorizontalExample from './NxDividerHorizontalExample';
import NxDividerVerticalExample from './NxDividerVerticalExample';

const NxDividerHorizontalExampleCode = require('./NxDividerHorizontalExample?raw'),
    NxDividerVerticalExampleCode = require('./NxDividerVerticalExample?raw');

const NxDividerPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxDivider</NxCode> renders either a horizontal or vertical divider.
        The <NxCode>NxDivider</NxCode> component accepts either a <NxCode>horizontal</NxCode> or
        a <NxCode>vertical</NxCode> prop to render a horizontal or a vertical divider respectively.
      </NxP>
      <NxP>
        The horizontal divider is inherently composed of an <NxCode>{'<hr>'}</NxCode> whereas the
        vertical divider is composed of a <NxCode>{'<div>'}</NxCode>.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxDivider</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>horizontal</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Renders a horizontal divider.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>vertical</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                Renders a vertical divider.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes" external>
                  HTML attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>no</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxDivider</NxCode> supports any HTML attribute that's normally supported
                by an HTML element.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
        <NxInfoAlert>
          If the <NxCode>horizontal</NxCode> or <NxCode>vertical</NxCode> prop is not specified,
          then <NxCode>{'<NxDivider />'}</NxCode> renders a horizontal divider by default.
        </NxInfoAlert>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Horizontal Example"
                        liveExample={NxDividerHorizontalExample}
                        codeExamples={NxDividerHorizontalExampleCode}>
      A simple example of a horizontal <NxCode>NxDivider</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Simple Vertical Example"
                        liveExample={NxDividerVerticalExample}
                        codeExamples={NxDividerVerticalExampleCode}>
      A simple example of a vertical <NxCode>NxDivider</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxDividerPage;
