/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import {
  NxTable,
  NxTableBody,
  NxTableCell,
  NxTableHead,
  NxTableRow
} from '@sonatype/react-shared-components';

import NxTabsSimpleExample from './NxStatefulTabsSimpleExample';

const tabsSimpleExampleCode = require('!!raw-loader!./NxStatefulTabsSimpleExample').default;

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <h5>NxStatefulTabs</h5>

        <p>
          The top-level container for tabbed navigation.
          The first child element must be a <code className="nx-code">&lt;NxTabList&gt;</code>.
          All other children must be <code className="nx-code">&lt;NxTab&gt;</code> components.
          There must be at least one <code className="nx-code">&lt;NxTab&gt;</code> for each
          <code className="nx-code">&lt;NxTabLabel&gt;</code>.
        </p>

        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>active</NxTableCell>
              <NxTableCell>boolean</NxTableCell>
              <NxTableCell>false</NxTableCell>
              <NxTableCell>Used to mark the current tab as active</NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>

        <hr />

        <h5>NxTab</h5>

        <p>
          Container component for the tab contents.
        </p>
      </GalleryDescriptionTile>
      <GalleryTile title="Simple Example">
        <NxTabsSimpleExample />
        <CodeExample content={tabsSimpleExampleCode} />
      </GalleryTile>
    </>
  );
}
