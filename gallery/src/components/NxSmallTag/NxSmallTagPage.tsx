/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxTable, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxSmallTagExample from './NxSmallTagExample';
import NxSmallTagInTableExample from './NxSmallTagInTableExample';

const NxSmallTagExampleCode = require('./NxSmallTagExample?raw');
const NxSmallTagInTableExampleCode = require('./NxSmallTagInTableExample?raw');

const NxSmallTagPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxSmallTag</NxCode> is an inline component
        intended to call out product features ("Beta", "Custom", "Labs", etc). It is informational
        whereas <NxCode>NxTag</NxCode> is functional. There is a set of colors for small tags that can be specified
        via props.
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
          <NxTable.Row>
            <NxTable.Cell>color</NxTable.Cell>
            <NxTable.Cell>
              'blue' | 'green' | 'indigo' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'turquoise'
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>pink</NxTable.Cell>
            <NxTable.Cell>
              If no <NxCode>color</NxCode> is specified then the default pink color is used.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;label&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label">
                HTML label Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              <NxCode>NxSmallTag</NxCode> supports any html attribute that's normally supported by
              {' '}<NxCode>&lt;label&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Small Tag Example"
                        id="nx-small-tag-example"
                        liveExample={NxSmallTagExample}
                        codeExamples={NxSmallTagExampleCode}>
      Example of small tags in all available colors.
    </GalleryExampleTile>

    <GalleryExampleTile title="Small Tag In Table Example"
                        id="nx-small-tag-in-table-example"
                        liveExample={NxSmallTagInTableExample}
                        codeExamples={NxSmallTagInTableExampleCode}>
      Example of small tags in the table.
    </GalleryExampleTile>
  </>;

export default NxSmallTagPage;
